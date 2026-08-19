import type { InputHTMLAttributes } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils/cn";

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label: string;
  id: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export function TextField({ label, id, registration, error, className, ...rest }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-marsh">
        {label}
      </label>
      <input
        id={id}
        {...registration}
        {...rest}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full border bg-shell px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none",
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
