import {
  InstagramIcon,
  LogoIconWhite,
  WhatsappIcon,
  YoutubeIcon,
} from "@/components/Icons/icons";
import Text from "@/components/Texts/texts";

export default function HomeFooter() {
  return (
    <div className="bg-black w-max-[1200px] h-[224px] flex flex-row items-center pr-[10%] justify-around mt-[150px]">
      <div className="flex flex-row justify-around w-full">
        <div className="flex flex-col justify-around h-[128px]">
          <Text
            intent="Small"
            color="white"
            style="bold"
            text="Serviços"
          ></Text>
          <Text
            intent="Small"
            color="white"
            text="Conta corrente"
            hover="pointer"
          ></Text>
          <Text
            intent="Small"
            color="white"
            text="Conta PJ"
            hover="pointer"
          ></Text>
          <Text
            intent="Small"
            color="white"
            text="Cartão de crédito"
            hover="pointer"
          ></Text>
        </div>
        <div className="flex flex-col justify-around h-[128px]">
          <Text intent="Small" color="white" style="bold" text="Contato"></Text>
          <Text intent="Small" color="white" text="0800 004 250 08"></Text>
          <Text
            intent="Small"
            color="white"
            text="meajuda@bytebank.com.br"
          ></Text>
          <Text
            intent="Small"
            color="white"
            text="ouvidoria@bytebank.com.br"
          ></Text>
        </div>
        <div className="flex flex-col justify-around h-[128px] items-center">
          <Text
            intent="Small"
            color="white"
            style="bold"
            text="Desenvolvido por João Woigt"
          ></Text>
          <LogoIconWhite></LogoIconWhite>
          <div className="flex flex-row justify-evenly w-full">
            <InstagramIcon></InstagramIcon>
            <WhatsappIcon></WhatsappIcon>
            <YoutubeIcon></YoutubeIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
