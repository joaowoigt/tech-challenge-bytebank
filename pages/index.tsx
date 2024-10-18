import HomeFooter from "@/patterns/home/HomeFooter";
import { HomeHeader, MobileHeader } from "@/patterns/home/HomeHeader";
import HomeMain from "@/patterns/home/HomeMain/HomeMain";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gradientStart to-gradientEnd w-auto h-full flex flex-col">
      <HomeHeader></HomeHeader>
      <MobileHeader></MobileHeader>
      <HomeMain></HomeMain>
      <HomeFooter></HomeFooter>
    </div>
  );
}
