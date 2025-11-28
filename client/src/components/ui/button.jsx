"use client";
import * as React from "react";
import { cn } from "./utils";
export const Button = React.forwardRef(({className, ...p},ref)=>
  <button ref={ref} className={cn("px-4 py-2 rounded-md bg-white/10 text-white",className)} {...p}/>);