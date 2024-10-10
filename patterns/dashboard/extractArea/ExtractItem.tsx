import Text from "@/components/Texts/texts";

export default function ExtractItem({
  month = "",
  type = "",
  fullDate = "",
  value = "",
}) {
  return (
    <div className="flex flex-col mt-big">
      <Text
        intent="ExtraSmall"
        color="secondary"
        text={month}
        style="bold"
      ></Text>
      <div className="flex flex-row justify-between mt-small mb-small">
        <Text intent="Small" color="black" text={type}></Text>
        <Text intent="ExtraSmall" color="darkGray" text={fullDate}></Text>
      </div>
      <Text intent="Small" color="black" text={value} style="bold"></Text>
      <div className="bg-secondary w-[180px] h-[1px] my-medium"></div>
    </div>
  );
}
