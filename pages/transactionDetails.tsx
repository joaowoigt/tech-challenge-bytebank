import { useRouter } from "next/router";
import Router from "next/router";
import Text from "@/UI/components/Texts/texts";
import { useEffect, useState } from "react";
import Dropdown, { DropDownItem } from "@/UI/components/DropDown/dropDown";
import { TransactionType } from "@/domain/models/TransactionType";
import { CloseIcon, DeleteIcon, EditIcon } from "@/UI/components/Icons/icons";
import CurrencyInput from "react-currency-input-field";
import { TransactionResponse } from "@/data/responses/ExtractResponse";
import Button from "@/UI/components/Buttons";
import { EditTransactionRequest } from "./api/[id]";

export default function TransactionDetails() {
  const [currentTransaction, setCurrentTransaction] =
    useState<TransactionResponse>();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [newValue, setNewValue] = useState<number>();
  const [newType, setNewType] = useState<number>();
  const [newDate, setNewDate] = useState<string>();

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
        const res = await fetch(`/api/${id}`, {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error("Erro ao buscar transação");
        }

        const data: TransactionResponse = await res.json();
        setCurrentTransaction(data);
      } catch (error) {
        console.log("Erro ao buscar transação aqui");
      }
    }
    if (currentTransaction == null) {
      getCurrentTransaction();
    }
  });

  const onEditClicked = async () => {
    try {
      const requestParam: EditTransactionRequest = {
        value: newValue,
        type: newType,
        date: newDate,
      };
      const res = await fetch(`/api/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestParam),
      });

      if (!res.ok) {
        throw new Error("Erro ao editar transação");
      }

      if (res.status == 200) {
        console.log("Transação editada com sucesso");
        Router.reload();
      }
    } catch (error) {
      console.log("Erro ao editar transação");
    }
  };

  async function deleteTransaction() {
    try {
      const res = await fetch(`/api/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Erro ao deletar transação");
      }
      router.push("/dashboard");
    } catch (error) {
      console.log("Erro ao deletar transaçã: ", error);
    }
  }

  return (
    <section className="bg-secondaryVariant h-fit rounded-2xl flex flex-col m-big justify-around p-big ">
      <div className="flex flex-row justify-between mobile:flex-col">
        <div className="mobile:hidden">
          <Text intent="Heading" color="black" text={title}></Text>
        </div>
        <div className="hidden mb-big mobile:flex">
          <Text intent="Regular" color="black" text={title}></Text>
        </div>
        <div className="flex flex-row">
          {isEditing ? (
            <CloseIcon onClick={() => handleEditing(false)}></CloseIcon>
          ) : (
            <EditIcon onClick={() => handleEditing(true)}></EditIcon>
          )}
          <DeleteIcon onClick={() => deleteTransaction()}></DeleteIcon>
        </div>
      </div>
      <div className="flex flex-col align-middle py-small">
        <Text intent="Small" color="black" text="Tipo:"></Text>
        {isEditing ? (
          <Dropdown
            items={menuDropDownItems}
            onSelect={(item: TransactionType) => {
              setNewType(item);
            }}
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
            onValueChange={(value, name, values) => {
              setNewValue(values?.float as number);
            }}
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
            onChange={(date) => setNewDate(date.target.value)}
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
        {isEditing ? (
          <div className="w-[250px]">
            <Button
              intent="primary"
              text="Editar!"
              onClick={() => onEditClicked()}
            ></Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
