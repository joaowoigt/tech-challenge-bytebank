import Text from "@/components/Texts/texts";
import DashboardCenterArea from "@/patterns/dashboard/centerArea/DashboardCenterArea";
import DashboardHeader from "@/patterns/dashboard/DashboardHeader";
import DasboardSideMenu from "@/patterns/dashboard/DashboardSideMenu";
import DashboardExtractArea from "@/patterns/dashboard/extractArea/DashboardExtract";
import NewTransactionArea from "@/patterns/dashboard/NewTransactionArea/NewTransactionArea";

export default function Dashboard() {
  return (
    <div className="bg-secondaryVariant w-auto h-auto flex flex-col">
      <DashboardHeader></DashboardHeader>
      <div className="flex flex-row  mt-big w-auto justify-center">
        <DasboardSideMenu></DasboardSideMenu>
        <div className=" w-[100%] max-w-[680px] flex flex-col">
          <DashboardCenterArea></DashboardCenterArea>
          <NewTransactionArea></NewTransactionArea>
        </div>
        <DashboardExtractArea></DashboardExtractArea>
      </div>
    </div>
  );
}
