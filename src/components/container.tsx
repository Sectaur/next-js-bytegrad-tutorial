import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1500px] mx-auto bg-white min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
}
