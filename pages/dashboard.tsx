import Text from "@/components/Texts/texts";
import DashboardCenterArea from "@/patterns/dashboard/centerArea/DashboardCenterArea";
import DashboardHeader from "@/patterns/dashboard/DashboardHeader";
import DasboardSideMenu from "@/patterns/dashboard/DashboardSideMenu";

export default function Dashboard() {
  return (
    <div className="bg-secondaryVariant w-auto h-auto flex flex-col">
      <DashboardHeader></DashboardHeader>
      <div className="flex flex-row  mt-big ">
        <DasboardSideMenu></DasboardSideMenu>
        <DashboardCenterArea></DashboardCenterArea>
      </div>
    </div>
  );
}
