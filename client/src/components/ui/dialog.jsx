"use client";
import * as React from "react";
export function Dialog({open,onClose,children}){
 if(!open) return null;
 return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
   <div className="bg-white/10 border border-white/20 p-6 rounded-xl">{children}
     <button onClick={onClose} className="mt-4 w-full px-3 py-2 bg-white/20 text-white rounded-md">Close</button>
   </div>
 </div>;
}