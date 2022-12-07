import data from "./russian-fails.json";

export const fetchAllFacts = () => {
  return new Promise((res) => {
    setTimeout(() => res(data), 1000);
  });
};
