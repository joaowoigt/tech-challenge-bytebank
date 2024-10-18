import NotFoundMain from "@/patterns/404/NotFoundMain";
import HomeFooter from "@/patterns/home/HomeFooter";
import { HomeHeader, MobileHeader } from "@/patterns/home/HomeHeader";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-b from-gradientStart to-gradientEnd w-auto h-fit flex flex-col mobile:w-full">
      <HomeHeader></HomeHeader>
      <MobileHeader></MobileHeader>
      <NotFoundMain></NotFoundMain>
      <HomeFooter></HomeFooter>
    </div>
  );
}
