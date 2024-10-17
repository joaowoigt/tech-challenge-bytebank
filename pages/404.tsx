import NotFoundMain from "@/patterns/404/NotFoundMain";
import HomeFooter from "@/patterns/home/HomeFooter";
import HomeHeader from "@/patterns/home/HomeHeader";
import HomeMain from "@/patterns/home/HomeMain/HomeMain";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-b from-gradientStart to-gradientEnd w-auto h-screen flex flex-col">
      <HomeHeader></HomeHeader>
      <NotFoundMain></NotFoundMain>
      <div className=" fixed bottom-0 left-0 right-0">
        <HomeFooter></HomeFooter>
      </div>
    </div>
  );
}
