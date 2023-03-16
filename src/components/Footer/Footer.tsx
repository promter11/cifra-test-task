import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setModal: Dispatch<SetStateAction<boolean>>;
};

const Footer = ({ setModal }: Props) => {
  return (
    <footer className="py-8 px-4 mt-auto text-center">
      <button
        className="py-2 px-20 shadow-xl bg-red-500 text-white"
        onClick={() => setModal(true)}
      >
        New item
      </button>
    </footer>
  );
};

export default Footer;
