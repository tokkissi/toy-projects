const calculator = require("./calculator.js");

describe("계산기", () => {
  let cal;
  beforeEach(() => {
    cal = new calculator();
  });

  it("초기화는 0이어야 함", () => {
    expect(cal.value).toBe(0);
  });
  it("클리어하면 0이어야 함", () => {
    cal.set(7);
    cal.clear();
    expect(cal.value).toBe(0);
  });
  it("설정값 경우", () => {
    cal.set(777);
    expect(cal.value).toBe(777);
  });
  it("덧셈", () => {
    cal.add(3);
    expect(cal.value).toBe(3);
  });
  it("덧셈(100보다 클 경우)", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });
  it("뺄셈", () => {
    cal.subtract(5);
    expect(cal.value).toBe(-5);
  });
  it("곱셈", () => {
    cal.set(5);
    cal.multiply(3);
    expect(cal.value).toBe(15);
  });

  describe("나눗셈", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("3 / 3 === 1", () => {
      cal.set(3);
      cal.divide(3);
      expect(cal.value).toBe(1);
    });
  });
});
