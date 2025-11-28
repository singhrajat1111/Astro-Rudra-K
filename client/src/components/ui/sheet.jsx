"use client";
import * as React from "react";
import { cn } from "./utils";
export function Sheet({open,onClose,children}){
 return <div className={cn("fixed inset-0 z-50 transition", open?"opacity-100":"opacity-0 pointer-events-none")}>
   <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
   <div className={cn("absolute top-0 right-0 h-full w-64 bg-[#0B0B0E] border-l border-white/10 p-6 transition-transform",
     open?"translate-x-0":"translate-x-full")}>{children}</div>
 </div>;
}