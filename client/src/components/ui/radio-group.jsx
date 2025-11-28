"use client";
import * as React from "react";
export const RadioGroup = ({options,value,onChange})=>
 <div className="flex flex-col gap-2">
  {options.map(o=> <label key={o.value} className="flex items-center gap-3 text-white">
   <input type="radio" checked={value===o.value} onChange={()=>onChange(o.value)} />
   {o.label}
  </label>)}
 </div>;