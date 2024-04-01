
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Stats from "@/components/hero/Stats";
import Announcement from "@/components/ui/Announcement";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Header />
      <Hero />
      <Stats />
      <Footer />
    </div>
  );
}
