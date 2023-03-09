// key необходимо использовать в настройках
// settings = { name: true, title: true, ... }
// эти настройки используются для оторажения и порядка колонок
export const dataColumn = [
  { key: "name", title: "Имя", id: "1", show: true },
  { key: "age", title: "Возраст", id: "2", show: true },
  { key: "address", title: "Адрес", id: "3", show: true },
  { key: "phone", title: "Телефон", id: "4", show: true },
];

export const dataRow = [
  {
    name: "Andew",
    age: 30,
    address: "address-1",
    phone: "phone-1",
    id: "5",
    show: true,
  },
  {
    name: "Anna",
    age: 19,
    address: "address-2",
    phone: "phone-2",
    id: "6",
    show: true,
  },
  // ...
];
