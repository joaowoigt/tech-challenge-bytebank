import HomeFooter from "@/UI/patterns/home/HomeFooter";
import { HomeHeader, MobileHeader } from "@/UI/patterns/home/HomeHeader";
import HomeMain from "@/UI/patterns/home/HomeMain/HomeMain";

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
