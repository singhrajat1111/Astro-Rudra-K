"use client";
import * as React from "react";
import { cn } from "./utils";
export const Select = ({options,value,onChange,className})=>
 <select value={value} onChange={e=>onChange(e.target.value)}
 className={cn("w-full px-3 py-2 bg-white/10 border border-white/20 text-white rounded-md",className)}>
  {options.map(o=> <option key={o.value} value={o.value} className="text-black">{o.label}</option>)}
 </select>;