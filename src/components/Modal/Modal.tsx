import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  maxWidth: string;
  okButtonFunc: Function;
  closeButtonFunc: Function;
};

const Modal = ({
  title,
  children,
  maxWidth,
  okButtonFunc,
  closeButtonFunc,
}: Props) => {
  return (
    <div className="fixed z-10 flex items-center justify-center w-screen h-screen p-4 before:content[''] before:absolute before:inset-0 before:z-n10 before:bg-black/[.25]">
      <div className="w-full rounded bg-white" style={{ maxWidth }}>
        <div className="flex items-center justify-between gap-4 p-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={() => closeButtonFunc(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </button>
        </div>
        <div className="p-8">{children}</div>
        <div className="flex items-center justify-end gap-2 p-4 border-t">
          <button
            className="py-2 px-4 text-sm rounded bg-slate-500 text-white"
            onClick={() => closeButtonFunc(false)}
          >
            Close
          </button>
          <button
            className="py-2 px-4 text-sm rounded bg-red-500 text-white"
            onClick={(event) => okButtonFunc(event)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
