"use client";

import { Toaster as SonnerToaster, type ToasterProps } from "sonner";
import { useTheme } from "@/hooks/useTheme";

export function Toaster(props: Omit<ToasterProps, "theme">) {
  const { theme } = useTheme();
  return (
    <SonnerToaster
      theme={theme}
      {...props}
    />
  );
}
