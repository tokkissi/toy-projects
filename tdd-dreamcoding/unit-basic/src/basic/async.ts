export function fetchProduct(error?: any) {
  if (error === "error") {
    return Promise.reject("network error");
  }
  return Promise.resolve({
    item: "milk",
    price: 200,
  });
}
