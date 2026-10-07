"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { showSuggestionSchema, type ShowSuggestionFormValues } from "@/lib/validation/showSuggestionSchema";
import { TextField } from "@/components/forms/fields/TextField";
import { TextAreaField } from "@/components/forms/fields/TextAreaField";
import { FormSuccessMessage } from "@/components/forms/FormSuccessMessage";
import { Button } from "@/components/ui/Button";

export function ShowSuggestionForm() {
  const pathname = usePathname();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ShowSuggestionFormValues>({
    resolver: zodResolver(showSuggestionSchema),
    defaultValues: { name: "", email: "", suggestion: "", sourcePage: pathname ?? "/american-dream-tv" },
  });

  async function onSubmit(values: ShowSuggestionFormValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/show-suggestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, sourcePage: pathname ?? "/american-dream-tv" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong sending your suggestion. Please try again, or email us directly.");
    }
  }

  if (submitted) {
    return (
      <FormSuccessMessage
        title="Thanks for the idea!"
        message="Your show suggestion has been sent to Krissy — we read every one."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <input type="hidden" {...register("sourcePage")} value={pathname ?? "/american-dream-tv"} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField id="name" label="Name" registration={register("name")} error={errors.name} autoComplete="name" />
        <TextField id="email" label="Email" type="email" registration={register("email")} error={errors.email} autoComplete="email" />
      </div>
      <TextAreaField
        id="suggestion"
        label="Show Suggestion"
        registration={register("suggestion")}
        error={errors.suggestion}
        placeholder="A local business, community story, or idea you'd love to see featured..."
      />

      {submitError ? <p className="text-sm text-error">{submitError}</p> : null}

      <Button type="submit" variant="clay" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Suggestion"}
      </Button>
    </form>
  );
}
