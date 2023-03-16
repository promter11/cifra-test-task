import React from "react";

import { IField, IHeader } from "../../interfaces";

type Props = {
  headers: IHeader[];
  items: IField[];
};

const Table = ({ headers, items }: Props) => {
  if (!items.length) {
    return null;
  }

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.value} className="py-2 px-4 text-sm text-left">
              {header.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="border-t">
            {Object.entries(item).map(([key, value]) => (
              <td key={key} className="py-2 px-4 text-sm">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
