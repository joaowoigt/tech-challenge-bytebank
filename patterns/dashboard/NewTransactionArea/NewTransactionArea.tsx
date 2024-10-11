import Button from "@/components/Buttons";
import Dropdown, { DropDownItem } from "@/components/DropDown/dropDown";
import Text from "@/components/Texts/texts";
import { TransactionType } from "@/models/TransactionType";
import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";

export default function NewTransactionArea() {
  const [value, setValue] = useState<number>(0.0);
  const [type, setType] = useState<TransactionType>();

  const onSelectedType = (type: TransactionType) => {
    setType(type);
    console.log(type);
  };

  const onChange = (text: number) => {
    setValue(text);
    console.log(value);
  };

  const menuDropDownItems: DropDownItem[] = [
    { title: "Cambio de Moeda", type: TransactionType.CambioDeMoeda },
    { title: "DOC/TED", type: TransactionType.DOC },
    {
      title: "Empréstimo e Financiamento",
      type: TransactionType.Emprestimo,
    },
    {
      title: "Salário",
      type: TransactionType.Salario,
    },
  ];
  return (
    <div className="bg-grayVariant h-[420px] rounded-2xl flex flex-col  mx-big p-big mt-big">
      <Text intent="Heading" color="white" text="Nova transação"></Text>
      <div className="my-extraBig">
        <Dropdown
          items={menuDropDownItems}
          onSelect={(item: TransactionType) => onSelectedType(item)}
        ></Dropdown>
      </div>
      <Text intent="Regular" color="white" text="Valor"></Text>
      <CurrencyInput
        decimalsLimit={2}
        onValueChange={(value, name, values) =>
          onChange(values?.float as number)
        }
        prefix="R$"
        className="outline outline-1 outline-primary  mb-big mt-medium bg-white rounded-md px-small w-[250px]  py-small text-black text-start flex flex-row hover:cursor-text"
      />
      <div className="w-[250px]">
        <Button
          intent="primary"
          text="Concluir transação"
          onClick={(event) => {
            console.log("clicou no primeiro botao");
          }}
        ></Button>
      </div>
    </div>
  );
}
