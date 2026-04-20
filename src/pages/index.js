// src/pages/index.js
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className="relative bg-background text-primary-text min-h-screen overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full"
     style={{ background: "rgba(255,193,7,0.35)", filter: "blur(140px)" }} />
<div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full"
     style={{ background: "rgba(148,137,121,0.30)", filter: "blur(160px)" }} />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  );
}