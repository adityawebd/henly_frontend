import HeroSection from "@/components/HeroSection";
import Layout from "../components/Layout";
import About from "@/components/About";
import Homefirstsection from "@/components/Homefirstsection";
import HomeShopByCategory from "@/components/HomeShopByCategory";
import Tab from "@/components/Tab";
import HomeBestSeller from "@/components/HomeBestSeller";

export default function Home() {
  return (
    <Layout>
      {/* <HeroSection /> */}
      <Homefirstsection />
      <HomeShopByCategory />
      <HomeBestSeller />
      <About />
    </Layout>
  );
}
