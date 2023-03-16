export interface IForm {
  fields: IField;
  errors: Partial<Record<keyof IField, string>>;
}

export interface IField {
  id: number;
  price: number;
  title: string;
  datetime: string;
}

export interface IHeader {
  text: string;
  value: string;
}
