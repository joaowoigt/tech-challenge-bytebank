import Button from "@/UI/components/Buttons";
import Dropdown, { DropDownItem } from "@/UI/components/DropDown/dropDown";
import Text from "@/UI/components/Texts/texts";
import { TransactionType } from "@/domain/models/TransactionType";
import { CreateTransactionRequest } from "@/pages/api/add-transaction";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";

export default function NewTransactionArea() {
  const [value, setValue] = useState<number>(0.0);
  const [type, setType] = useState<number>(0);

  const onSelectedType = (type: number) => {
    setType(type);
    console.log(type);
  };

  const onChange = (text: number) => {
    setValue(text);
    console.log(value);
  };

  const onSubmit = async () => {
    try {
      const requestParam: CreateTransactionRequest = {
        value: value,
        type: type,
      };
      const res = await fetch("/api/add-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestParam),
      });

      if (!res.ok) {
        throw new Error("Erro ao criar transação");
      }

      if (res.status == 200) {
        console.log("Transação criada com sucesso");
        Router.reload();
      }
    } catch (error) {
      console.log("Erro ao criar transação aqui");
    }
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
    <div className="bg-grayVariant h-[420px] rounded-2xl flex flex-col  mx-big p-big mt-big mobile:items-center">
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
      <div className="w-[250px] mobile:w-full mobile:items-center mobile:flex mobile:flex-col">
        <Button
          intent="primary"
          text="Concluir transação"
          onClick={(event) => {
            onSubmit();
          }}
        ></Button>
      </div>
    </div>
  );
}
