import {
  HamburguerMenu,
  HamburguerMenuVariant,
  ProfileIcon,
} from "@/components/Icons/icons";
import Text from "@/components/Texts/texts";

export default function DashboardHeader() {
  return (
    <header className="bg-primary w-auto h-[96px] flex flex-row justify-end items-center pr-[10%] mobile:justify-between mobile:w-full mobile:px-medium">
      <div className="mobile:hidden">
        <Text intent="Heading" color="white" text="João Lucas Woigt"></Text>
      </div>
      <div className="hidden mobile:flex">
        <HamburguerMenuVariant></HamburguerMenuVariant>
      </div>
      <ProfileIcon></ProfileIcon>
    </header>
  );
}
