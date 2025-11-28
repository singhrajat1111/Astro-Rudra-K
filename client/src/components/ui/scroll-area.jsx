"use client";
export const ScrollArea = ({children,className})=>
 <div className={className} style={{maxHeight:"300px",overflowY:"auto"}}>{children}</div>;