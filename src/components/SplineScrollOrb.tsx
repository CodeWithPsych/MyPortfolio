"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Spline from "@splinetool/react-spline";

/* ─── Context ─────────────────────────────────────────────────────────────── */
interface OrbCtx {
  registerSlot: (id: string, el: HTMLElement) => void;
  unregisterSlot: (id: string) => void;
}
const OrbContext = createContext<OrbCtx | null>(null);

/* ─── Slot order — only hero & terminal now ───────────────────────────────── */
const SLOT_ORDER = ["hero", "terminal"] as const;
type SlotId = (typeof SLOT_ORDER)[number];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* ─── Provider ────────────────────────────────────────────────────────────── */
export function SplineOrbProvider({ children }: { children: React.ReactNode }) {
  const slots  = useRef<Map<string, HTMLElement>>(new Map());
  const orbRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [mounted,  setMounted]  = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile || !mounted) return;

    const getSlotRect = (id: string) => {
      const el = slots.current.get(id);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        top:    r.top    + window.scrollY,
        left:   r.left   + window.scrollX,
        width:  r.width,
        height: r.height,
      };
    };

    const place = () => {
      const orb = orbRef.current;
      if (!orb) return;

      const scrollY    = window.scrollY;
      const vh         = window.innerHeight;
      const viewCenter = scrollY + vh / 2;

      const waypoints = SLOT_ORDER.map((id) => {
        const r = getSlotRect(id);
        if (!r) return null;
        return { id, center: r.top + r.height / 2, rect: r };
      }).filter(Boolean) as { id: SlotId; center: number; rect: { top: number; left: number; width: number; height: number } }[];

      if (waypoints.length === 0) return;

      const first = waypoints[0];
      const last  = waypoints[waypoints.length - 1];

      // Past the last slot → stay locked at terminal position, stay visible
      if (viewCenter > last.center) {
        orb.style.top    = `${last.rect.top}px`;
        orb.style.left   = `${last.rect.left}px`;
        orb.style.width  = `${last.rect.width}px`;
        orb.style.height = `${last.rect.height}px`;
        orb.style.opacity = "1";
        return;
      }

      // Before or inside first slot
      orb.style.opacity = "1";

      if (viewCenter <= first.center) {
        orb.style.top    = `${first.rect.top}px`;
        orb.style.left   = `${first.rect.left}px`;
        orb.style.width  = `${first.rect.width}px`;
        orb.style.height = `${first.rect.height}px`;
        return;
      }

      // Travelling between first and last
      let from = first;
      let to   = last;

      for (let i = 0; i < waypoints.length - 1; i++) {
        if (viewCenter >= waypoints[i].center && viewCenter <= waypoints[i + 1].center) {
          from = waypoints[i];
          to   = waypoints[i + 1];
          break;
        }
      }

      const span = to.center - from.center;
      const t    = span > 0 ? Math.max(0, Math.min(1, (viewCenter - from.center) / span)) : 0;

      orb.style.top    = `${lerp(from.rect.top,    to.rect.top,    t)}px`;
      orb.style.left   = `${lerp(from.rect.left,   to.rect.left,   t)}px`;
      orb.style.width  = `${lerp(from.rect.width,  to.rect.width,  t)}px`;
      orb.style.height = `${lerp(from.rect.height, to.rect.height, t)}px`;
    };

    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(place);
    };

    const init = setTimeout(place, 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", place);

    return () => {
      clearTimeout(init);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", place);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, mounted]);

  const registerSlot   = useCallback((id: string, el: HTMLElement) => {
    slots.current.set(id, el);
  }, []);
  const unregisterSlot = useCallback((id: string) => {
    slots.current.delete(id);
  }, []);

  return (
    <OrbContext.Provider value={{ registerSlot, unregisterSlot }}>
      {children}

      {mounted && !isMobile && (
        <div
          ref={orbRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <Spline
            scene="https://prod.spline.design/axD63XGyPO7IswMG/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
    </OrbContext.Provider>
  );
}

/* ─── OrbSlot ─────────────────────────────────────────────────────────────── */
export function OrbSlot({ id, className }: { id: string; className?: string }) {
  const ctx = useContext(OrbContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ctx || !ref.current) return;
    ctx.registerSlot(id, ref.current);
    return () => ctx.unregisterSlot(id);
  }, [ctx, id]);

  return <div ref={ref} data-orb-slot={id} className={className} />;
}