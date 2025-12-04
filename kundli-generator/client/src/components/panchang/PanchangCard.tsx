import { ReactNode } from "react";

export default function PanchangCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-[#0b0b18] p-5 rounded-2xl border border-cyan-400/20 shadow-xl">
      <h3 className="text-lg font-bold text-cyan-300 mb-2">
        {title}
      </h3>

      <div className="text-white text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
