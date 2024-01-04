const Stack = require("../stack");

describe("stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("초기엔 비워져야 함", () => {
    expect(stack.size()).toBe(0);
  });

  it("아이템 push 가능해야 함", () => {
    stack.push("🐰");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("stack에 아이템이 없을때 pop 하는 경우 에러", () => {
      expect(() => stack.pop()).toThrow("스택이 비었습니다");
    });

    it("stack에 아이템이 있을때 pop 하면 마지막 아이템을 반환하고 스택에서 제거함", () => {
      stack.push("🐰");
      stack.push("토끼");

      expect(stack.pop()).toBe("토끼");
      expect(stack.size()).toBe(1);
    });
  });

  describe("peek", () => {
    it("stack에 아이템이 없는데 호출 시 에러", () => {
      expect(() => stack.peek()).toThrow("스택이 비었습니다");
    });

    it("마지막 아이템을 제거하지 않고 반환", () => {
      stack.push("🐰");
      stack.push("토끼");
      expect(stack.peek()).toBe("토끼");
      expect(stack.size()).toBe(2);
    });
  });
});
