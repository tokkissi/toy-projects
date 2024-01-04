import { fetchProduct } from "./async";

describe("async", () => {
  // it("test1", () => {
  //   fetchProduct().then((item) => {
  //     expect(item).toEqual({ item: "Milk", price: 200 });
  //   });
  // }); // 잘못된 예
  it("done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "milk", price: 200 });
    });
    done();
  });
  it("return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "milk", price: 200 });
    });
  });
  it("await", async () => {
    const item = await fetchProduct();
    expect(item).toEqual({ item: "milk", price: 200 });
  });
  it("reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
  it("resolve", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "milk",
      price: 200,
    });
  });
});
