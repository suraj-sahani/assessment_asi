"use client";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import { type ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ProgressProvider
        height="6px"
        color="#000"
        options={{ showSpinner: false }}
        shallowRouting
      >
        {children}
      </ProgressProvider>
    </>
  );
}
