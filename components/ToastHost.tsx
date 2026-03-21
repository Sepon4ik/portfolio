"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ToastCtx = { show: (message: string) => void };

const Ctx = createContext<ToastCtx | null>(null);

export function useToast() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useToast outside ToastHost");
  return v;
}

export function ToastHost({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const show = useCallback((msg: string) => {
    setMessage(msg);
    setOpen(true);
    window.setTimeout(() => setOpen(false), 2600);
  }, []);

  const value = useMemo(() => ({ show }), [show]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-24 left-1/2 z-[10000] -translate-x-1/2 rounded-full border border-white/20 bg-zinc-900/95 px-5 py-2.5 text-sm font-medium text-white shadow-xl backdrop-blur-md transition-all duration-300 sm:bottom-28 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {message}
      </div>
    </Ctx.Provider>
  );
}
