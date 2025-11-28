"use client";
import * as React from "react";
import { cn } from "./utils";
export const Alert = ({children,className})=>
 <div className={cn("p-4 rounded-lg bg-white/10 border border-white/20 text-white",className)}>{children}</div>;