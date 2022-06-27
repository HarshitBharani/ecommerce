const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    description: "joota he jaapani woh bhi lal",
    name: "laljoota",
    price: 500,
    catogories: "joota",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    description: "joota he jaapani woh bhi lal",
    name: "kalajoota",
    price: 700,
    catogiries: "joota",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    description: "joota he jaapani woh bhi lal",
    name: "lalchasma",
    price: 200,
    catogiries: "chasma",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    description: "joota he jaapani woh bhi lal",
    name: "pilachama",
    price: 150,
    catogiries: "chasma",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    description: "joota he jaapani woh bhi lal",
    name: "laljoota",
    price: 500,
    catogiries: "joota",
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
