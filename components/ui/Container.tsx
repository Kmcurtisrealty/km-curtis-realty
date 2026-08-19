import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return <Tag className={cn("mx-auto w-full max-w-7xl px-6 md:px-10", className)}>{children}</Tag>;
}
