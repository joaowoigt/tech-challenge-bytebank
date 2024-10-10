import DashboardExtractHeading from "./DashboardExtractHeading";
import ExtractList from "./ExtractList";

export default function DashboardExtractArea() {
  return (
    <div className="h-fit bg-grey w-[280px] flex flex-col py-[37px] px-big rounded-2xl">
      <DashboardExtractHeading></DashboardExtractHeading>
      <ExtractList></ExtractList>
    </div>
  );
}
