import HomeHeader from "@/patterns/home/HomeHeader";
import HomeMain from "@/patterns/home/HomeMain/HomeMain";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gradientStart to-gradientEnd w-auto h-screen flex flex-col">
      <HomeHeader></HomeHeader>
      <HomeMain></HomeMain>
    </div>
  );
}
