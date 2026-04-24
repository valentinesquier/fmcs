"use client";

import { useRouter } from "next/navigation";

export default function BackLink({
  fallback = "/",
  label = "Retour",
  className = "",
}: {
  fallback?: string;
  label?: string;
  className?: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window === "undefined") return;
    try {
      const ref = document.referrer;
      if (ref && new URL(ref).origin === window.location.origin) {
        router.back();
        return;
      }
    } catch {}
    router.push(fallback);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 text-[0.875rem] text-[#555] hover:text-[#131316] bg-transparent border-0 cursor-pointer p-0 ${className}`}
    >
      &larr; {label}
    </button>
  );
}
