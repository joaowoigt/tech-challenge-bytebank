import NotFoundMain from "@/UI/patterns/404/NotFoundMain";
import HomeFooter from "@/UI/patterns/home/HomeFooter";
import { HomeHeader, MobileHeader } from "@/UI/patterns/home/HomeHeader";

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
