"use client";
export const Slider = ({value,onChange})=>
 <input type="range" value={value} onChange={e=>onChange(Number(e.target.value))} className="w-full accent-[#FFD79A]" />;