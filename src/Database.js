const data = [
  {
    id: 1,
    name: "laljoota",
    price: 500,
    catogories: "joota",
  },
  {
    id: 2,
    name: "kalajoota",
    price: 700,
    catogiries: "joota",
  },
  {
    id: 3,
    name: "lalchasma",
    price: 200,
    catogiries: "chasma",
  },
  {
    id: 9,
    name: "pilachama",
    price: 150,
    catogiries: "chasma",
  },
  {
    id: 8,
    name: "laljoota",
    price: 500,
    catogiries: 760,
  },
];
export const MockPromise = (sucess) =>
  new Promise((resolve, reject) => {
    if (sucess) {
      resolve(JSON.stringify(data));
    } else {
      reject({ message: "error promise" });
    }
  });
