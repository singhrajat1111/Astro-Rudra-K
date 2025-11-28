"use client";
import * as React from "react";
export function Popover({trigger,children}){
 const [open,setOpen]=React.useState(false);
 return <div className="relative inline-block">
  <div onClick={()=>setOpen(!open)}>{trigger}</div>
  {open && <div className="absolute mt-3 bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-xl">{children}</div>}
 </div>;
}