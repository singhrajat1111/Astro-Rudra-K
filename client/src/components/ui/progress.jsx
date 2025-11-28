"use client";
export const Progress = ({value})=>
 <div className="w-full h-2 bg-white/10 rounded-full">
  <div className="h-full bg-[#FFD79A]" style={{width:`${value}%`}}></div>
 </div>;