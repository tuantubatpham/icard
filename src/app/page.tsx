import JasmineStyleHero from "@/components/JasmineStyleHero";
import Lanyard from "@/components/Lanyard";
import Galaxy from "@/components/Galaxy";
import StaggeredMenu from "@/components/StaggeredMenu";

const MENU_ITEMS = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const SOCIAL_ITEMS = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

const MENU_COLORS = ['#B19EEF', '#5227FF'];


export default function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-transparent font-sans dark:bg-transparent">
      <div style={{ height: '100vh', background: '#1a1a1a' }}>
        <StaggeredMenu
          position="right"
          items={MENU_ITEMS}
          socialItems={SOCIAL_ITEMS}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={MENU_COLORS}
          logoUrl="/path-to-your-logo.svg"
          accentColor="#5227FF"
        />
      </div>

      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <JasmineStyleHero />
      </div>

      <div className="absolute inset-y-0 right-0 z-30 pointer-events-none w-[34vw] min-w-[320px]">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </main>
  );
}
