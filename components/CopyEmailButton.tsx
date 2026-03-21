"use client";

import { useToast } from "@/components/ToastHost";
import { CONTACT_EMAIL } from "@/lib/site-config";

const EMAIL = CONTACT_EMAIL;

export function CopyEmailButton() {
  const { show } = useToast();

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      show("Email Copied!");
    } catch {
      show("Copy failed — copy manually");
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="hover-bounce inline-flex cursor-pointer items-center justify-center rounded border border-white/35 px-4 py-2 text-sm uppercase tracking-[0.14em] text-zinc-100 transition hover:bg-white/10"
    >
      Email
    </button>
  );
}
