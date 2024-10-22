import Text from "@/UI/components/Texts/texts";
import Button from "../UI/components/Buttons/index";
import Dropdown, { DropDownItem } from "@/UI/components/DropDown/dropDown";
import { TransactionType } from "../domain/models/TransactionType";

export default function DesignExample() {
  const menuDropDownItems: DropDownItem[] = [
    { title: "Cambio de Moeda", type: TransactionType.CambioDeMoeda },
    { title: "DOC/TED", type: TransactionType.DOC },
    {
      title: "Empréstimo e Financiamento",
      type: TransactionType.Emprestimo,
    },
  ];
  return (
    <div className="flex flex-col items-center bg-white">
      <Text
        intent="Heading"
        color="primary"
        text="The quick brown fox jumps over the lazy dog"
      ></Text>
      <Text
        intent="Regular"
        color="secondary"
        text="The quick brown fox jumps over the lazy dog"
      ></Text>
      <Text
        intent="Small"
        color="negative"
        text="The quick brown fox jumps over the lazy dog"
      ></Text>
      <Text
        intent="ExtraSmall"
        color="black"
        text="The quick brown fox jumps over the lazy dog"
      ></Text>

      <Button
        intent="primary"
        text="Concluir"
        spacing="mSmall"
        onClick={(event) => {
          console.log("clicou no primeiro botao");
        }}
      ></Button>
      <Button
        intent="secondary"
        text="Concluir transação"
        spacing="mMedium"
        onClick={(event) => {
          console.log("clicou no primeiro botao");
        }}
      ></Button>
      <Button
        intent="secondaryVariant"
        text="Concluir transação"
        spacing="mMedium"
        onClick={(event) => {
          console.log("clicou no primeiro botao");
        }}
      ></Button>
      <Button
        intent="negative"
        text="Vamos ver"
        spacing="mBig"
        onClick={(event) => {
          console.log("clicou no primeiro botao");
        }}
      ></Button>
      <br></br>
      <Dropdown
        items={menuDropDownItems}
        onSelect={(item: TransactionType) => console.log(item)}
      ></Dropdown>
    </div>
  );
}
