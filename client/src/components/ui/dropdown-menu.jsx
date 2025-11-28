"use client";
import * as React from "react";
import { cn } from "./utils";
export function DropdownMenu({trigger,children}){
 const [open,setOpen]=React.useState(false);
 return <div className="relative inline-block">
   <div onClick={()=>setOpen(!open)}>{trigger}</div>
   {open && <div className="absolute mt-2 w-40 bg-white/10 border border-white/20 rounded-xl p-2 z-40">{children}</div>}
 </div>;
}
export const DropdownMenuItem = ({className,children,...p})=>
 <button className={cn("w-full text-left px-3 py-2 text-white hover:bg-white/10",className)} {...p}>{children}</button>;