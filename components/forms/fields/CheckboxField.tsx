import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface CheckboxFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type"> {
  label: string;
  id: string;
  registration: UseFormRegisterReturn;
}

export function CheckboxField({ label, id, registration, ...rest }: CheckboxFieldProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-3 text-sm text-ink/80">
      <input
        id={id}
        type="checkbox"
        {...registration}
        {...rest}
        className="h-4 w-4 shrink-0 rounded border border-mist accent-bay-teal"
      />
      {label}
    </label>
  );
}
