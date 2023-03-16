import React, { Dispatch, SetStateAction } from "react";

import { IForm } from "../../interfaces";

type Props = {
  form: IForm;
  setForm: Dispatch<SetStateAction<IForm>>;
  submitForm: Function;
};

const Form = ({ form, setForm, submitForm }: Props) => {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => submitForm(event)}
    >
      <label>
        <div className="flex flex-col gap-2">
          <span>Title</span>
          <input
            name="title"
            type="text"
            className="py-2 px-4 border rounded"
            placeholder="Example"
            defaultValue={form.fields.title}
            onInput={(event) =>
              setForm({
                ...form,
                fields: { ...form.fields, title: event.currentTarget.value },
              })
            }
          />
        </div>
        {form.errors.title && (
          <span className="text-sm text-red-500">{form.errors.title}</span>
        )}
      </label>
      <label>
        <div className="flex flex-col gap-2">
          <span>Price</span>
          <input
            min="0"
            name="price"
            type="number"
            className="py-2 px-4 border rounded"
            defaultValue={form.fields.price}
            onInput={(event) =>
              setForm({
                ...form,
                fields: { ...form.fields, price: +event.currentTarget.value },
              })
            }
          />
        </div>
        {form.errors.price && (
          <span className="text-sm text-red-500">{form.errors.price}</span>
        )}
      </label>
      <label>
        <div className="flex flex-col gap-2">
          <span>Date and time</span>
          <input
            name="datetime"
            type="text"
            className="py-2 px-4 border rounded"
            placeholder="16.03.2023 13:00:00"
            defaultValue={form.fields.datetime}
            onInput={(event) =>
              setForm({
                ...form,
                fields: { ...form.fields, datetime: event.currentTarget.value },
              })
            }
          />
        </div>
        {form.errors.datetime && (
          <span className="text-sm text-red-500">{form.errors.datetime}</span>
        )}
      </label>
    </form>
  );
};

export default Form;
