"use client";
import * as React from "react";
import { cn } from "./utils";
export const Textarea = React.forwardRef(({className,...p},ref)=>
  <textarea ref={ref} className={cn("w-full p-3 rounded bg-white/10 border border-white/20 text-white",className)} {...p}/>);