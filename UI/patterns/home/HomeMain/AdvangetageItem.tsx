import Text from "@/UI/components/Texts/texts";

export default function AdvantageItem({ title, text, icon }) {
  const getImage = () => {
    switch (icon) {
      case "gift": {
        return "../../gift.png";
      }
      case "money": {
        return "../../money.png";
      }
      case "star": {
        return "../../star.png";
      }
      case "devices": {
        return "../../devices.png";
      }
      default:
        return "../../gift.png";
    }
  };
  return (
    <div className="flex flex-col items-center w-[270px] text-center mr-medium">
      <img src={getImage()}></img>
      <Text
        intent="Regular"
        color="secondary"
        text={title}
        style="bold"
        mt="medium"
      ></Text>
      <Text intent="Small" color="darkGray" text={text} mt="medium"></Text>
    </div>
  );
}
