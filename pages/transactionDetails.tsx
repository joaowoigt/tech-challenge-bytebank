import { useRouter } from "next/router";
import Text from "@/components/Texts/texts";
import { useEffect, useState } from "react";
import Dropdown, { DropDownItem } from "@/components/DropDown/dropDown";
import { TransactionType } from "@/domain/models/TransactionType";
import { CloseIcon, DeleteIcon, EditIcon } from "@/components/Icons/icons";
import CurrencyInput from "react-currency-input-field";
import { TransactionResponse } from "@/data/responses/ExtractResponse";
import { GetTransactionRequest } from "./api/get-transaction";

export default function TransactionDetails() {
  const [currentTransaction, setCurrentTransaction] =
    useState<TransactionResponse>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
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
  const handleEditing = (isEditing: boolean) => {
    setIsEditing(isEditing);
  };

  const router = useRouter();
  const id = router.query.id as string;
  const title = `Detalhes da transação: ${id}`;

  useEffect(() => {
    async function getCurrentTransaction() {
      try {
        console.log("entrou");
        const requestParams: GetTransactionRequest = {
          id: id,
        };
        const res = await fetch("/api/get-transaction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestParams),
        });

        if (!res.ok) {
          throw new Error("Erro ao buscar transação");
        }

        const data: TransactionResponse = await res.json();
        console.log(data);
        setCurrentTransaction(data);
      } catch (error) {
        console.log("Erro ao buscar transação aqui");
      }
    }
    if (currentTransaction == null) {
      getCurrentTransaction();
    }
  });

  return (
    <section className="bg-secondaryVariant h-[420px] rounded-2xl flex flex-col m-big justify-around p-big">
      <div className="flex flex-row justify-between">
        <Text intent="Heading" color="black" text={title}></Text>
        <div className="flex flex-row">
          {isEditing ? (
            <CloseIcon onClick={() => handleEditing(false)}></CloseIcon>
          ) : (
            <EditIcon onClick={() => handleEditing(true)}></EditIcon>
          )}
          <DeleteIcon onClick={() => {}}></DeleteIcon>
        </div>
      </div>
      <div className="flex flex-col align-middle py-small">
        <Text intent="Small" color="black" text="Tipo:"></Text>
        {isEditing ? (
          <Dropdown
            items={menuDropDownItems}
            onSelect={(item: TransactionType) => {}}
          ></Dropdown>
        ) : (
          <Text
            intent="Regular"
            color="black"
            text={currentTransaction?.type}
          ></Text>
        )}
      </div>
      <div className="flex flex-col align-middle py-small">
        <Text intent="Small" color="black" text="Valor:"></Text>

        {isEditing ? (
          <CurrencyInput
            decimalsLimit={2}
            onValueChange={(value, name, values) => {}}
            prefix="R$"
            className="outline outline-1 outline-primary  mb-big mt-medium bg-white rounded-md px-small w-[250px]  py-small text-black text-start flex flex-row hover:cursor-text"
          />
        ) : (
          <Text
            intent="Regular"
            color="black"
            text={currentTransaction?.value}
          ></Text>
        )}
      </div>
      <div className="flex flex-col align-middle py-small">
        <Text intent="Small" color="black" text="Data:"></Text>
        {isEditing ? (
          <input
            onChange={(date) => console.log(date.target.value)}
            type="date"
            className="outline outline-1 outline-primary  mb-big mt-medium bg-white rounded-md px-small w-[250px]  py-small text-black text-start flex flex-row hover:cursor-text"
          />
        ) : (
          <Text
            intent="Regular"
            color="black"
            text={currentTransaction?.fullDate}
          ></Text>
        )}
      </div>
    </section>
  );
}
