"use client";
export const Avatar = ({src,alt,className})=> 
 <img src={src} alt={alt} className={`w-10 h-10 rounded-full object-cover ${className||""}`}/>;