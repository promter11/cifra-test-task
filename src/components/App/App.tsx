import React, { useState } from "react";

import Form from "../Form";
import Table from "../Table";
import Modal from "../Modal";
import Footer from "../Footer";
import Header from "../Header";

import StorageService from "../../services/StorageService";

import { IForm, IField, IHeader } from "../../interfaces";

const App = () => {
  const headers: IHeader[] = [
    { text: "#", value: "id" },
    { text: "Title", value: "title" },
    { text: "Price, USD", value: "price" },
    { text: "Date and time", value: "datetime" },
  ];
  const initialForm: IForm = {
    fields: {
      id: 0,
      title: "",
      price: 0,
      datetime: "",
    },
    errors: {},
  };

  const [form, setForm] = useState(initialForm);
  const [items, setItems] = useState<IField[]>(StorageService.getItem());
  const [modal, setModal] = useState(false);

  const validate = () => {
    let isValid = true;

    setForm({ ...form, errors: {} });

    if (!form.fields.title) {
      isValid = false;

      setForm((form) => ({
        ...form,
        errors: { ...form.errors, title: "This field is required" },
      }));
    }

    if (form.fields.price < 0) {
      isValid = false;

      setForm((form) => ({
        ...form,
        errors: { ...form.errors, price: "Invalid price" },
      }));
    }

    if (!form.fields.datetime) {
      isValid = false;

      setForm((form) => ({
        ...form,
        errors: { ...form.errors, datetime: "This field is required" },
      }));
    }

    if (
      form.fields.datetime &&
      !/[01]\d\.[0-3]\d\.\d{4}[T\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?Z?/.test(
        form.fields.datetime
      )
    ) {
      isValid = false;

      setForm((form) => ({
        ...form,
        errors: { ...form.errors, datetime: "Invalid date time" },
      }));
    }

    return isValid;
  };

  const closeForm = () => {
    setForm(initialForm);
    setModal(false);
  };

  const submitForm = (event: Event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const item = { ...form.fields, id: items.length + 1 };

    setItems([...items, item]);
    closeForm();
    StorageService.setItem([...items, item]);
  };

  return (
    <div className="flex flex-col gap-8 min-h-screen">
      <Header />
      <main>
        <section className="p-4">
          <Table headers={headers} items={items} />
        </section>
      </main>
      <Footer setModal={setModal} />
      {modal && (
        <Modal
          title="New item"
          maxWidth="600px"
          okButtonFunc={submitForm}
          closeButtonFunc={closeForm}
        >
          <Form form={form} setForm={setForm} submitForm={submitForm} />
        </Modal>
      )}
    </div>
  );
};

export default App;
