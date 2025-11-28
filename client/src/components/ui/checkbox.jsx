"use client";
import * as React from "react";
export const Checkbox = ({checked,onChange})=>
 <input type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)} className="w-4 h-4" />;