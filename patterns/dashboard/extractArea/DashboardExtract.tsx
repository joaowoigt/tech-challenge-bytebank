import Text from "@/components/Texts/texts";
import ExtractList from "./ExtractList";

export default function DashboardExtractArea() {
  return (
    <div className="h-fit bg-grey w-[280px] flex flex-col py-[37px] px-big rounded-2xl">
      <Text intent="Heading" color="black" text="Extrato" style="bold"></Text>
      <ExtractList></ExtractList>
    </div>
  );
}
