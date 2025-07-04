import Navbar from "./ui/hero/navbar";
import HeroPage from "./ui/hero/hero-page";
import Banner from "@/components/banner";

export default function Page() {
  return (
    <>
      <Banner />
      <main className="min-h-screen relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
        <Navbar />
        <HeroPage />
      </main>
    </>
  );
}
