import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  HostListener,
  NgZone
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
  alpha: number;
  pulseSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  len: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

@Component({
  selector: 'app-background-animation',
  standalone: true,
  templateUrl: './background-animation.html',
  styleUrl: './background-animation.css'
})
export class BackgroundAnimationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas', { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private shootingStars: ShootingStar[] = [];
  private animationFrameId: number | null = null;
  private isBrowser: boolean;
  private lastStarTime = Date.now();

  private mouse = {
    x: -9999,
    y: -9999,
    radius: 170
  };

  private readonly palette = [
    '255, 0, 127',   // #ff007f electric magenta
    '255, 45, 149',  // #ff2d95 neon bright pink
    '224, 0, 112',   // #e00070 signature magenta
    '192, 38, 211',  // #c026d3 magenta violet
    '168, 85, 247',  // #a855f7 electric purple
    '244, 63, 94'    // #f43f5e vivid rose
  ];

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private ngZone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser || !this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;

    this.initCanvasSize();
    this.createParticles();

    // Run animation outside Angular zone for true 60fps GPU smoothness without triggering change detection
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (!this.isBrowser || !this.canvasRef) return;
    this.initCanvasSize();
    this.createParticles();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  @HostListener('window:mouseleave')
  onMouseLeave(): void {
    this.mouse.x = -9999;
    this.mouse.y = -9999;
  }

  private initCanvasSize(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private createParticles(): void {
    if (!this.isBrowser) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Rich particle density for immersive cyber-magenta atmosphere
    const count = width < 768 ? 40 : Math.min(Math.floor((width * height) / 16000), 85);

    this.particles = [];
    for (let i = 0; i < count; i++) {
      const color = this.palette[Math.floor(Math.random() * this.palette.length)];
      const baseAlpha = 0.35 + Math.random() * 0.45;
      this.particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        radius: Math.random() < 0.2 ? Math.random() * 2.8 + 2 : Math.random() * 1.8 + 1,
        color,
        baseAlpha,
        alpha: baseAlpha,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }

    this.shootingStars = [];
  }

  private spawnShootingStar(width: number, height: number): void {
    if (this.shootingStars.length >= 2) return;
    this.shootingStars.push({
      x: Math.random() * (width * 0.8),
      y: Math.random() * (height * 0.4),
      len: 70 + Math.random() * 80,
      speed: 8 + Math.random() * 6,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 deg diagonal
      alpha: 1,
      active: true
    });
  }

  private animate = (): void => {
    if (!this.ctx || !this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    const width = canvas.width;
    const height = canvas.height;

    this.ctx.clearRect(0, 0, width, height);

    // Periodically spawn a radiant shooting star
    const now = Date.now();
    if (now - this.lastStarTime > 4500 && Math.random() < 0.03) {
      this.spawnShootingStar(width, height);
      this.lastStarTime = now;
    }

    // Render shooting stars
    for (let s = this.shootingStars.length - 1; s >= 0; s--) {
      const star = this.shootingStars[s];
      if (!star.active) continue;

      const tailX = star.x - Math.cos(star.angle) * star.len;
      const tailY = star.y - Math.sin(star.angle) * star.len;

      const grad = this.ctx.createLinearGradient(star.x, star.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255, 255, 255, ${star.alpha})`);
      grad.addColorStop(0.3, `rgba(255, 0, 127, ${star.alpha * 0.8})`);
      grad.addColorStop(1, 'rgba(255, 0, 127, 0)');

      this.ctx.beginPath();
      this.ctx.moveTo(star.x, star.y);
      this.ctx.lineTo(tailX, tailY);
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 2;
      this.ctx.shadowBlur = 12;
      this.ctx.shadowColor = '#ff007f';
      this.ctx.stroke();

      star.x += Math.cos(star.angle) * star.speed;
      star.y += Math.sin(star.angle) * star.speed;
      star.alpha -= 0.012;

      if (star.alpha <= 0 || star.x > width + 100 || star.y > height + 100) {
        this.shootingStars.splice(s, 1);
      }
    }

    // Render particles and interactive mesh
    const len = this.particles.length;
    for (let i = 0; i < len; i++) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Pulse breathing
      p.alpha = p.baseAlpha + Math.sin(now * 0.002 * p.pulseSpeed) * 0.25;
      if (p.alpha < 0.2) p.alpha = 0.2;
      if (p.alpha > 0.95) p.alpha = 0.95;

      // Draw particle with vivid luminous halo
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      this.ctx.shadowBlur = 14;
      this.ctx.shadowColor = `rgba(${p.color}, 0.8)`;
      this.ctx.fill();

      // Connect neighbor nodes with energetic lines
      for (let j = i + 1; j < len; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.hypot(dx, dy);

        const maxDist = 140;
        if (dist < maxDist) {
          const lineAlpha = (1 - dist / maxDist) * 0.35;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(255, 0, 127, ${lineAlpha})`;
          this.ctx.lineWidth = 0.9;
          this.ctx.shadowBlur = 6;
          this.ctx.shadowColor = 'rgba(255, 45, 149, 0.5)';
          this.ctx.stroke();
        }
      }

      // Dynamic mouse web connection
      if (this.mouse.x > 0 && this.mouse.y > 0) {
        const mdx = p.x - this.mouse.x;
        const mdy = p.y - this.mouse.y;
        const mDist = Math.hypot(mdx, mdy);

        if (mDist < this.mouse.radius) {
          const mAlpha = (1 - mDist / this.mouse.radius) * 0.6;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `rgba(255, 45, 149, ${mAlpha})`;
          this.ctx.lineWidth = 1.3;
          this.ctx.shadowBlur = 10;
          this.ctx.shadowColor = '#ff2d95';
          this.ctx.stroke();
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}
