import Lanyard from "@/components/Lanyard";
import LiquidEther from "@/components/LiquidEther";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      <div className="absolute inset-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={14}
          cursorSize={72}
          isViscous
          viscous={22}
          iterationsViscous={14}
          iterationsPoisson={14}
          resolution={0.28}
          isBounce={false}
          autoDemo
          autoSpeed={0.35}
          autoIntensity={1.2}
          takeoverDuration={0.18}
          autoResumeDelay={2200}
          autoRampDuration={0.45}
        />
      </div>

      <div className="absolute inset-0 z-10">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </main>
  );
}
