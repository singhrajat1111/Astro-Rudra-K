"use client";
import * as React from "react";
export function Accordion({items}){
 const [open,setOpen]=React.useState(null);
 return <div className="flex flex-col gap-3">
  {items.map(i=> <div key={i.title} className="bg-white/5 border border-white/10 rounded-xl">
   <button onClick={()=>setOpen(open===i.title?null:i.title)} className="w-full px-4 py-3 text-white text-left">{i.title}</button>
   {open===i.title && <div className="px-4 pb-4 text-white/80">{i.content}</div>}
  </div>)}
 </div>;
}