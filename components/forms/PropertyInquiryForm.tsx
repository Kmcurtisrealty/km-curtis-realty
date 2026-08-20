"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { propertyInquirySchema, type PropertyInquiryFormValues } from "@/lib/validation/propertyInquirySchema";
import { TextField } from "@/components/forms/fields/TextField";
import { TextAreaField } from "@/components/forms/fields/TextAreaField";
import { CheckboxField } from "@/components/forms/fields/CheckboxField";
import { FormSuccessMessage } from "@/components/forms/FormSuccessMessage";
import { Button } from "@/components/ui/Button";

interface PropertyInquiryFormProps {
  propertyId: string;
  propertySlug: string;
  propertyAddress: string;
  /** Absolute URL to the property page, captured for the CRM handoff. */
  propertyUrl: string;
  defaultMessage?: string;
}

/**
 * The property inquiry form auto-captures address/ID/URL/source page
 * (spec §15) — none of that is user-entered, it rides along as hidden
 * fields so a future CRM integration has full context on every lead.
 */
export function PropertyInquiryForm({
  propertyId,
  propertySlug,
  propertyAddress,
  propertyUrl,
  defaultMessage = "",
}: PropertyInquiryFormProps) {
  const pathname = usePathname();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PropertyInquiryFormValues>({
    resolver: zodResolver(propertyInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: defaultMessage,
      interestedInProperty: true,
      sourcePage: pathname ?? propertyUrl,
      propertyId,
      propertySlug,
      propertyAddress,
      propertyUrl,
    },
  });

  async function onSubmit(values: PropertyInquiryFormValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/property-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, sourcePage: pathname ?? propertyUrl }),
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
        title="Your inquiry is on its way."
        message="We'll follow up shortly to talk through next steps for this property."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input type="hidden" {...register("propertyId")} />
      <input type="hidden" {...register("propertySlug")} />
      <input type="hidden" {...register("propertyAddress")} />
      <input type="hidden" {...register("propertyUrl")} />
      <input type="hidden" {...register("sourcePage")} value={pathname ?? propertyUrl} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField id="pi-firstName" label="First Name" registration={register("firstName")} error={errors.firstName} autoComplete="given-name" />
        <TextField id="pi-lastName" label="Last Name" registration={register("lastName")} error={errors.lastName} autoComplete="family-name" />
      </div>
      <TextField id="pi-email" label="Email" type="email" registration={register("email")} error={errors.email} autoComplete="email" />
      <TextField id="pi-phone" label="Phone (optional)" type="tel" registration={register("phone")} error={errors.phone} autoComplete="tel" />
      <TextAreaField
        id="pi-message"
        label="Message"
        registration={register("message")}
        error={errors.message}
        rows={4}
        placeholder="I'd like to know more about this property..."
      />
      <CheckboxField id="pi-interested" label="I'm interested in this property." registration={register("interestedInProperty")} />

      {submitError ? <p className="text-sm text-error">{submitError}</p> : null}

      <Button type="submit" variant="clay" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
