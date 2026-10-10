"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function AtmosphericEffects() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // ==========================================
  // BATMAN MODE: GLOWING EMBERS DRIFTING UP
  // ==========================================
  useEffect(() => {
    if (theme !== "batman") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Resize handler
    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Particle Setup
    const particlesArray: any[] = [];
    const numberOfParticles = width < 768 ? 25 : 50; // Keep it subtle so it doesn't distract from reading

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number; opacity: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height + height; // Start below screen
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * -1.5 - 0.5; // Drift UPWARDS
        this.opacity = Math.random() * 0.8 + 0.1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Gentle sway
        this.speedX += (Math.random() * 0.02 - 0.01);
        
        // Reset if it goes off top of screen
        if (this.y < 0) {
          this.y = height + 10;
          this.x = Math.random() * width;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 30, 20, ${this.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#ff1a1a";
        ctx.fill();
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  // ==========================================
  // STANDARD MODE: GREEN FALLING LEAVES
  // ==========================================
  if (theme !== "batman") {
    return (
      <div className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden">
        {/* PUT YOUR EXISTING GREEN LEAVES HTML/CSS HERE */}
        <div className="leaf-container">
            {/* Example leaf placeholders */}
            <div className="leaf text-success opacity-30 text-2xl absolute top-[-10%] animate-fall-1">🍃</div>
            <div className="leaf text-success opacity-20 text-3xl absolute top-[-10%] animate-fall-2">🌿</div>
        </div>
      </div>
    );
  }

  // Render Canvas for Batman Mode
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-[-10] pointer-events-none opacity-60"
      aria-hidden="true"
    />
  );
}
