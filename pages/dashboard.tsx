import DashboardCenterArea from "@/UI/patterns/dashboard/centerArea/DashboardCenterArea";
import DashboardHeader from "@/UI/patterns/dashboard/DashboardHeader";
import DasboardSideMenu from "@/UI/patterns/dashboard/DashboardSideMenu";
import DashboardExtractArea from "@/UI/patterns/dashboard/extractArea/DashboardExtract";
import NewTransactionArea from "@/UI/patterns/dashboard/NewTransactionArea/NewTransactionArea";

export default function Dashboard() {
  return (
    <div className="bg-secondaryVariant w-auto h-auto flex flex-col mobile:w-full">
      <DashboardHeader></DashboardHeader>
      <div className="flex flex-row  mt-big w-auto justify-center mobile:flex-col">
        <DasboardSideMenu></DasboardSideMenu>
        <div className=" w-[100%] max-w-[680px] flex flex-col mobile:w-full">
          <DashboardCenterArea></DashboardCenterArea>
          <NewTransactionArea></NewTransactionArea>
        </div>
        <DashboardExtractArea></DashboardExtractArea>
      </div>
    </div>
  );
}
