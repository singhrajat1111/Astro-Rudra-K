"use client";

import * as React from "react";
import { cn } from "./utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg",
        className
      )}
      {...props}
    />
  );
}

export const CardHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "p-4 border-b border-white/10",
      className
    )}
    {...props}
  />
);

export const CardTitle = ({ className, ...props }) => (
  <h3
    className={cn(
      "text-lg font-semibold tracking-wide text-[#FFD79A]",
      className
    )}
    {...props}
  />
);

export const CardDescription = ({ className, ...props }) => (
  <p
    className={cn(
      "text-sm text-white/70 mt-1",
      className
    )}
    {...props}
  />
);

export const CardContent = ({ className, ...props }) => (
  <div className={cn("p-4", className)} {...props} />
);

export const CardFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "p-4 border-t border-white/10 flex items-center justify-end",
      className
    )}
    {...props}
  />
);