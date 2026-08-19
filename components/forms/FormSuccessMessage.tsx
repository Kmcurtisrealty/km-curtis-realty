import { CheckCircle2 } from "lucide-react";

interface FormSuccessMessageProps {
  title?: string;
  message?: string;
}

export function FormSuccessMessage({
  title = "Message sent.",
  message = "Thank you for reaching out — we'll be in touch shortly.",
}: FormSuccessMessageProps) {
  return (
    <div className="flex flex-col items-start gap-3 border border-bay-teal/30 bg-bay-teal/5 px-6 py-8">
      <CheckCircle2 className="h-8 w-8 text-bay-teal" aria-hidden="true" />
      <div>
        <p className="font-display text-xl text-ink">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">{message}</p>
      </div>
    </div>
  );
}
