import Text from "@/UI/components/Texts/texts";
import { useRouter } from "next/router";

export default function ExtractItem({
  _id = "",
  month = "",
  type = "",
  fullDate = "",
  value = "",
}) {
  const router = useRouter();

  const handleOnClick = () => {
    router.push({
      pathname: "/transactionDetails",
      query: { id: _id },
    });
  };
  return (
    <div
      className="flex flex-col mt-big hover:cursor-pointer outline outline-1 outline-primary rounded-md p-big mobile:w-[300px]"
      onClick={handleOnClick}
    >
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
    </div>
  );
}
