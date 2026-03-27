import Lanyard from "@/components/Lanyard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
}
