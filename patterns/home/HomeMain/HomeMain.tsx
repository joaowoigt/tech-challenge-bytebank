import Text from "@/components/Texts/texts";
import AdvantageItem from "./AdvangetageItem";

export default function HomeMain() {
  return (
    <main className="flex flex-col items-center w-max-[1200px] mt-big">
      <div className="flex flex-row items-center mb-[40px]">
        <div className="w-[434px] mr-[76px]">
          <Text
            intent="Heading"
            color="black"
            style="bold"
            text="Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!"
          ></Text>
        </div>
        <img src="../../homeBanner.png"></img>
      </div>
      <Text
        intent="Heading"
        color="black"
        style="bold"
        text="Vantagens do nosso banco:"
      ></Text>
      <div className="mt-[40px] flex flex-row justify-evenly">
        <AdvantageItem
          title="Conta e cartão gratuitos"
          text="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
          icon="gift"
        ></AdvantageItem>
        <AdvantageItem
          title="Saques sem custo"
          text="Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
          icon="money"
        ></AdvantageItem>
        <AdvantageItem
          title="Programa de pontos"
          text="Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
          icon="star"
        ></AdvantageItem>
        <AdvantageItem
          title="Seguro Dispositivos"
          text="Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
          icon="devices"
        ></AdvantageItem>
      </div>
    </main>
  );
}
