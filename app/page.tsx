import Navbar from "./ui/hero/navbar";
import HeroPage from "./ui/hero/hero-page";
import Banner from "@/components/banner";

export default function Page() {
  return (
    <>
      <Banner />
      <main className="relative mx-auto my-2 flex max-w-7xl flex-col items-center justify-center">
        <Navbar />
        <HeroPage />
      </main>
    </>
  );
}
