import "./CanvasBackground.css";
import { useEffect, useRef } from "react";

function drawPathForRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawCanvas(canvas: HTMLCanvasElement, backgroundColor: string) {
  if (!canvas) {
    return;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  const scale = (window.devicePixelRatio || 1) / 2;
  const halfStep = 0.4 * scale;
  const count = 25;
  const padding = 1;
  const x = count * halfStep + padding;
  const y = count * halfStep + padding;
  const width = canvas.width - count * halfStep * 2 - padding * 2;
  const height = canvas.height - count * halfStep * 2 - padding * 2;
  const radius = Math.min(30, width / 2, height / 2) * scale;
  const colorTemplate = backgroundColor.replace("rgb", "rgba").substring(0, backgroundColor.length) + ", ";
  

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw rounded rectangle
  drawPathForRoundedRect(ctx, x, y, width, height, radius);

  ctx.fillStyle = `${colorTemplate} 1)`;
  ctx.fill();

  // Draw fading border
  let borderX = x
  let borderY = y;
  let borderWidth = width;
  let borderHeight = height;
  for (let i = 0; i < count; i++) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = `${colorTemplate} ${1 - (i / count)})`;
    drawPathForRoundedRect(ctx, borderX, borderY, borderWidth, borderHeight, radius + halfStep * i);
    ctx.stroke();
    borderX -= halfStep;
    borderY -= halfStep;
    borderWidth += halfStep * 2;
    borderHeight += halfStep * 2;
  }
}

export default function CanvasBackground({ children, className, backgroundColor }: { children?: React.ReactNode, className?: string, backgroundColor?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    function handleResize() {
      if (canvasRef.current && backgroundColor) {
        const rect = canvasRef.current.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        const width = Math.round(rect.width * dpr);
        const height = Math.round(rect.height * dpr);
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        drawCanvas(canvasRef.current, backgroundColor);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [backgroundColor]);


  if (!backgroundColor) {
    return (
      <div className={"canvas-background-container" + (className ? ` ${className}` : "")}>
        {children}
      </div>
    );
  }

  return (
    <div className={"canvas-background-container" + (className ? ` ${className}` : "")}>
      <canvas ref={canvasRef} className="canvas-background" />
      {children}
    </div>
  );
}