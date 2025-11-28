"use client";
import * as React from "react";
import { cn } from "./utils";
export const Tabs = ({items,active,onChange})=> 
 <div className="flex gap-2 border-b border-white/10">
  {items.map(t=> <button key={t.value} onClick={()=>onChange(t.value)}
    className={cn("px-4 py-2 text-sm transition",
    active===t.value?"text-[#FFD79A] border-b-2 border-[#FFD79A]":"text-white/70 hover:text-white")}>{t.label}</button>)}
 </div>;