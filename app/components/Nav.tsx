"use client";

import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight">
          310 <span className="text-blue-500">Fitness</span>
        </a>

        {/* Desktop links — hidden on mobile */}
        <div className="hidden items-center gap-8 sm:flex">
          <a href="#memberships" className="text-sm text-zinc-300 transition-colors hover:text-white">
            Pricing
          </a>
          <a href="#visit" className="text-sm text-zinc-300 transition-colors hover:text-white">
            Visit
          </a>
          <a href="#visit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500">
            Book a Tour
          </a>
        </div>

        {/* Mobile hamburger button — hidden on desktop */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 text-2xl text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu drawer — only renders when isOpen is true */}
      {isOpen && (
        <div className="sm:hidden border-t border-white/5 px-6 py-4">
          <div className="flex flex-col gap-4">
            <a href="#memberships" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white">
              Pricing
            </a>
            <a href="#visit" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white">
              Visit
            </a>
            <a href="#visit" onClick={() => setIsOpen(false)} className="rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white">
              Book a Tour
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}