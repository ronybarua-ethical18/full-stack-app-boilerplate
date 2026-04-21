"use client";

import { getAppName, getAppNameInitials } from "@/lib/app-config";

const sizeClasses = {
  sm: {
    circle: "h-6 w-6 text-xs",
    title: "text-lg font-bold text-blue-900",
  },
  md: {
    circle: "h-10 w-10 text-lg",
    title: "text-xl font-bold text-blue-900",
  },
  lg: {
    circle: "h-10 w-10 text-lg",
    title: "text-2xl font-bold text-blue-900",
  },
} as const;

export function AppBrand({ size = "md" }: { size?: keyof typeof sizeClasses }) {
  const name = getAppName();
  const initials = getAppNameInitials(name);
  const s = sizeClasses[size];

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white ${s.circle}`}
      >
        {initials}
      </div>
      <span className={`${s.title} truncate`}>{name}</span>
    </div>
  );
}
