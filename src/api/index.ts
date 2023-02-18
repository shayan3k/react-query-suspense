import fetch from "node-fetch";

export const fetchProudcts = async () => {
  const response = await fetch("'https://dummyjson.com/products", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
