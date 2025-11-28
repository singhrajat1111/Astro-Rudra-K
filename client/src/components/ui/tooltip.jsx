"use client";
import * as React from "react";
export function Tooltip({text,children}){
 const [show,setShow]=React.useState(false);
 return <div className="relative inline-block" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
  {children}
  {show && <div className="absolute bottom-full mb-2 px-3 py-1 text-xs text-white bg-black/70 rounded-md">{text}</div>}
 </div>;
}