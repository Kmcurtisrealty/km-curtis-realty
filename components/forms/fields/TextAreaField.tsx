import type { TextareaHTMLAttributes } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils/cn";

interface TextAreaFieldProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  label: string;
  id: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export function TextAreaField({ label, id, registration, error, className, rows = 5, ...rest }: TextAreaFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-marsh">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        {...registration}
        {...rest}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full resize-y border bg-shell px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none",
          error ? "border-clay" : "border-mist focus:border-bay-teal",
          className,
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-clay">
          {error.message}
        </p>
      ) : null}
    </div>
  );
}
