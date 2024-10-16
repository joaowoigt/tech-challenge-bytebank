import { LogoIcon } from "@/components/Icons/icons";
import Text from "@/components/Texts/texts";
import Button from "@/components/Buttons/index";
import { useRouter } from "next/router";

export default function HomeHeader() {
  const router = useRouter();
  const navigateToDashboard = () => {
    router.push("/dashboard");
  };
  return (
    <header className="bg-black w-auto h-[96px] flex flex-row items-center pr-[10%] justify-around">
      <div className="flex flex-row items-center justify-around w-[50%]">
        <LogoIcon></LogoIcon>
        <div className="flex flex-row w-[30%] justify-around">
          <Text intent="Regular" color="secondary" text="Sobre"></Text>
          <Text intent="Regular" color="secondary" text="Serviços"></Text>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[180] mr-big">
          <Button
            intent="secondary"
            text="Abrir minha conta"
            onClick={(event) => {
              console.log("clicou no primeiro botao");
            }}
          ></Button>
        </div>
        <div className="w-[180]">
          <Button
            intent="secondaryVariant"
            text="Já tenho conta"
            onClick={(event) => {
              navigateToDashboard();
            }}
          ></Button>
        </div>
      </div>
    </header>
  );
}
