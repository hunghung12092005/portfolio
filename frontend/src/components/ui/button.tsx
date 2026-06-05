/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-sky-500 via-cyan-400 to-amber-300 px-5 py-3 text-slate-950 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 hover:shadow-cyan-400/30",
        secondary:
          "border border-[color:var(--border)] bg-[var(--surface)] px-5 py-3 text-[var(--text-primary)] backdrop-blur hover:border-cyan-400/40 hover:bg-[var(--surface-strong)]",
        ghost: "px-4 py-2 text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--text-primary)]",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs",
        lg: "px-6 py-3.5 text-base",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
