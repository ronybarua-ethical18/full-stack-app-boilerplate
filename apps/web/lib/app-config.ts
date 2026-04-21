const DEFAULT_APP_NAME = "Full Stack App Starter Pack";

export function getAppName(): string {
  const value = process.env.NEXT_PUBLIC_APP_NAME?.trim();
  return value && value.length > 0 ? value : DEFAULT_APP_NAME;
}

export function getAppNameInitials(name: string = getAppName()): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0];
  const second = parts[1];
  if (first && second) {
    return (first.charAt(0) + second.charAt(0)).toUpperCase();
  }
  const single = parts[0] || "?";
  return single.slice(0, 2).toUpperCase();
}
