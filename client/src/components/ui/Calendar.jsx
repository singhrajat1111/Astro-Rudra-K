"use client";

import * as React from "react";
import { cn } from "./utils";

export function Calendar({ selected, onSelect }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = React.useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const monthName = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();

  const prevMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );

  const nextMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );

  const generateDays = () => {
    const firstDay = currentMonth.getDay();
    const daysInMonth = new Date(year, currentMonth.getMonth() + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, currentMonth.getMonth(), i));
    }

    return days;
  };

  const days = generateDays();

  const isSameDay = (d1, d2) =>
    d1 &&
    d2 &&
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const disabledDate = (d) =>
    d < new Date(new Date().setHours(0, 0, 0, 0)); // disable past

  return (
    <div className="w-full max-w-md p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20"
        >
          ‹
        </button>

        <div className="text-lg font-semibold text-[#FFD79A]">
          {monthName} {year}
        </div>

        <button
          type="button"
          onClick={nextMonth}
          className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20"
        >
          ›
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm text-white/70 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {days.map((day, i) => {
          const selectedDay = selected && isSameDay(day, selected);
          const isPast = day && disabledDate(day);

          return (
            <div key={i}>
              {day ? (
                <button
                  type="button"
                  disabled={isPast}
                  onClick={() => !isPast && onSelect(day)}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-lg transition",
                    isPast
                      ? "opacity-30 cursor-not-allowed"
                      : selectedDay
                      ? "bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF] text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  )}
                >
                  {day.getDate()}
                </button>
              ) : (
                <div className="w-10 h-10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;