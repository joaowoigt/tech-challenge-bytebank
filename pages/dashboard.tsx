import Text from "@/components/Texts/texts";
import DashboardHeader from "@/patterns/dashboard/DashboardHeader";
import DasboardSideMenu from "@/patterns/dashboard/DashboardSideMenu";

export default function Dashboard() {
  return (
    <div className="bg-secondaryVariant w-auto h-screen flex flex-col">
      <DashboardHeader></DashboardHeader>
      <DasboardSideMenu></DasboardSideMenu>
    </div>
  );
}
