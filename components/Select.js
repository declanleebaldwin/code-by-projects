import { useState } from "react";
import Image from "next/image";

const Select = ({ items, selected, placeholder, onSelected }) => {
  const [open, setOpen] = useState(false);
  const openSelect = () => {
    setOpen(true);
  };

  const closeSelect = () => {
    setOpen(false);
  };

  const onItemSelected = (item) => {
    closeSelect();
    onSelected(item);
  };

  return (
    <div className="relative mb-8">
      <div
        onClick={openSelect}
        className={
          open
            ? "shadow-inner relative flex items-center cursor-pointer w-full bg-gray-400 pt-0 pb-0 pl-6 text-gray-300 text-base rounded-lg h-[4.25rem]"
            : "relative flex items-center cursor-pointer w-full bg-gray-400 pt-0 pb-0 pl-6 text-gray-300 text-base rounded-lg h-[4.25rem]"
        }
      >
        {!!selected ? selected :  placeholder}
        <div className="w-6 h-6 absolute right-6">
          <div className="relative w-full h-full">
            <Image
              objectFit="cover"
              src="/expand_more.svg"
              layout="fill"
              alt="expand-more"
            />
          </div>
        </div>
      </div>
      {open && (
        <>
          <div
            onClick={closeSelect}
            className="fixed top-0 left-0 w-full h-full bg-transparent"
          ></div>
          <div className="absolute w-full bg-black-300 z-10 text-white text-base rounded-b-lg cursor-pointer">
            <div className="relative flex flex-col w-full">
              {items.map((item) => {
                return (
                  <div
                    key={item}
                    onClick={() => onItemSelected(item)}
                    className="w-full h-[4.25rem] flex items-center pl-6 hover:bg-black-200"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Select;
