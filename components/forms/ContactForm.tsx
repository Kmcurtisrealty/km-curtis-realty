"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormValues } from "@/lib/validation/contactSchema";
import { TextField } from "@/components/forms/fields/TextField";
import { TextAreaField } from "@/components/forms/fields/TextAreaField";
import { FormSuccessMessage } from "@/components/forms/FormSuccessMessage";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const pathname = usePathname();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", message: "", sourcePage: pathname ?? "/contact" },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, sourcePage: pathname ?? "/contact" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong sending your message. Please try again, or email us directly.");
    }
  }

  if (submitted) {
    return (
      <FormSuccessMessage
        title="Thanks for reaching out."
        message="We received your message and will respond as soon as possible."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <input type="hidden" {...register("sourcePage")} value={pathname ?? "/contact"} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField id="firstName" label="First Name" registration={register("firstName")} error={errors.firstName} autoComplete="given-name" />
        <TextField id="lastName" label="Last Name" registration={register("lastName")} error={errors.lastName} autoComplete="family-name" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField id="email" label="Email" type="email" registration={register("email")} error={errors.email} autoComplete="email" />
        <TextField id="phone" label="Phone (optional)" type="tel" registration={register("phone")} error={errors.phone} autoComplete="tel" />
      </div>
      <TextAreaField
        id="message"
        label="Message"
        registration={register("message")}
        error={errors.message}
        placeholder="Tell us a bit about what you're looking for..."
      />

      {submitError ? <p className="text-sm text-error">{submitError}</p> : null}

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
