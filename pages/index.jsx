import HeroSection from "@/components/HeroSection";
import Layout from "../components/Layout";
import About from "@/components/About";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <About />
    </Layout>
  );
}
