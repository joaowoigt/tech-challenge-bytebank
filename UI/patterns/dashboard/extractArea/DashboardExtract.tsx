import Text from "@/UI/components/Texts/texts";
import ExtractList from "./ExtractList";

export default function DashboardExtractArea() {
  return (
    <div className="h-fit bg-grey w-[280px] flex flex-col py-[37px] px-big rounded-2xl mobile:items-center mobile:mt-big mobile:w-[312px] mobile:m-big mobile:px-0">
      <Text intent="Heading" color="black" text="Extrato" style="bold"></Text>
      <ExtractList></ExtractList>
    </div>
  );
}
