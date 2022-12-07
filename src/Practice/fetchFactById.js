import data from "./russian-fails.json";

export const fetchFactById = (id) => {
  const fact = data.find((f) => f.id === id);
  return new Promise((res) => {
    setTimeout(() => res(fact), 1000);
  });
};
