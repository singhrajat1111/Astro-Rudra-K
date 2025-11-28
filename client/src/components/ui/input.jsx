"use client";
import * as React from "react";
import { cn } from "./utils";
export const Input = React.forwardRef(({className,...p},ref)=>
  <input ref={ref} className={cn("w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white",className)} {...p}/>);