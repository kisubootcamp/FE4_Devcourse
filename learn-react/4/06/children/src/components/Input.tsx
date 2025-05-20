import React from "react";
export default function Input({ children }: { children: React.ReactNode }) {
  return (
    <>
      <input type="text" placeholder={children} />
    </>
  );
}
