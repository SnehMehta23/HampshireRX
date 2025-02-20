type Medication = {
  name: string;
  options: Option[];
  _id: string;
};

type Option = {
  count: number;
  countUnit: string;
  size: string;
  _id: string;
  price: number;
};

export type { Medication, Option };
