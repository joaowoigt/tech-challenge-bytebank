import Button from "@/UI/components/Buttons";
import Text from "@/UI/components/Texts/texts";
import { useRouter } from "next/router";

export default function NotFoundMain() {
  const router = useRouter();
  const navigateToHome = () => {
    router.push("/");
  };
  return (
    <main className="flex flex-col items-center w-full mt-big">
      <div className="flex flex-col w-[500px] items-center text-center mobile:w-full">
        <Text
          intent="Heading"
          color="black"
          style="bold"
          text="Ops! Não encontramos a página..."
        ></Text>
        <Text
          intent="Regular"
          color="black"
          text="E olha que exploramos o universo procurando por ela! Que tal voltar e tentar novamente?"
          mt="big"
        ></Text>
        <Button
          intent="negative"
          text="Voltar ao inicio"
          spacing="mBig"
          onClick={(event) => {
            navigateToHome();
          }}
        ></Button>
        <img className="my-big" src="../../notFound.png"></img>
      </div>
    </main>
  );
}
