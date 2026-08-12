"use client";

import React, { memo, useEffect, useRef, useState } from "react";

export interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "red" | "white" | "pink";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

export const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.01,
    proximity = 140,
    spread = 70,
    variant = "pink",
    glow = true,
    className = "",
    movementDuration = 3.5,
    borderWidth = 2,
    disabled = false,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const isMouseInsideRef = useRef(false);
    const animFrameRef = useRef<number>(0);
    const progressRef = useRef(0);

    useEffect(() => {
      if (disabled || !glow) return;

      let lastTime = performance.now();

      const animateLoop = (now: number) => {
        const delta = (now - lastTime) / 1000;
        lastTime = now;

        if (!isMouseInsideRef.current && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const W = rect.width || 280;
          const H = rect.height || 120;
          const P = 2 * (W + H);

          const speed = P / (movementDuration || 3.5);
          progressRef.current = (progressRef.current + speed * delta) % P;
          const d = progressRef.current;

          let x = 0;
          let y = 0;

          if (d < W) {
            x = d;
            y = 0;
          } else if (d < W + H) {
            x = W;
            y = d - W;
          } else if (d < 2 * W + H) {
            x = W - (d - (W + H));
            y = H;
          } else {
            x = 0;
            y = H - (d - (2 * W + H));
          }

          setPosition({ x, y });
        }

        animFrameRef.current = requestAnimationFrame(animateLoop);
      };

      animFrameRef.current = requestAnimationFrame(animateLoop);

      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const target = containerRef.current.parentElement || containerRef.current;
        const rect = target.getBoundingClientRect();

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const effectiveProximity = proximity || 140;

        const dx = Math.max(rect.left - mouseX, 0, mouseX - rect.right);
        const dy = Math.max(rect.top - mouseY, 0, mouseY - rect.bottom);
        const distance = Math.hypot(dx, dy);

        if (distance <= effectiveProximity) {
          isMouseInsideRef.current = true;
          setPosition({ x: mouseX - rect.left, y: mouseY - rect.top });
        } else {
          isMouseInsideRef.current = false;
        }
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [proximity, disabled, glow, movementDuration]);

    if (disabled || !glow) return null;

    const spreadSize = spread || 70;
    const strokeWidth = borderWidth || 2;

    return (
      <div
        ref={containerRef}
        className={`pointer-events-none absolute -inset-[2.5px] rounded-[inherit] transition-opacity duration-200 z-30 opacity-100 ${className}`}
      >
        {/* Crisp Soft Pink Border Shining Line - STRICTLY BORDER ONLY */}
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            padding: `${strokeWidth}px`,
            background: `radial-gradient(${spreadSize * 1.8}px circle at ${position.x}px ${position.y}px, #FFA3A8 0%, #E5A8BB 50%, rgba(229, 168, 187, 0.2) 75%, transparent 100%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            filter: blur > 0 ? `blur(${blur}px)` : undefined,
          }}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";
