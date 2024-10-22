import React, { useState } from "react";
import Text from "../Texts/texts";
import { TransactionType } from "@/domain/models/TransactionType";

export interface DropDownItem {
  title: string;
  type: TransactionType;
}

interface Props {
  items: DropDownItem[];
  onSelect: (item: TransactionType) => void;
}

export default function Dropdown(props: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(
    "Seleceione o tipo de transação"
  );
  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const onItemSelected = (item: DropDownItem) => {
    toggle();
    setSelected((value) => item.title);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <div className="relative">
        <div
          className="outline outline-1 outline-primary  bg-white rounded-md px-small w-[355px] mobile:w-[270px] py-small text-black text-start flex flex-row justify-between hover:cursor-pointer"
          onClick={toggle}
        >
          <Text text={selected} intent="Small" color="black"></Text>
          {isOpen ? (
            <svg
              className="w-6 h-6 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </div>
        <div
          className={`absolute z-30 w-[355px] flex flex-col items-center bg-white rounded-md  outline outline-1 outline-primary  ${transClass} mobile:w-[270px]`}
        >
          {props.items.map((item) => (
            <a
              className="hover:bg-secondaryVariant  hover:font-semibold hover:cursor-pointer text-black w-[355px] text-center py-small mobile:w-[270px]"
              onClick={() => {
                onItemSelected(item);
                props.onSelect(item.type);
              }}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
