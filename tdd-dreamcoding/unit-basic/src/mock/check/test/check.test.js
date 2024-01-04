const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("전달된 게 true이면", () => {
    check(() => true, onSuccess, onFail);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledTimes(0);
    expect(onSuccess).toHaveBeenCalledWith("yes");
  });
  it("전달된 게 false이면", () => {
    check(() => false, onSuccess, onFail);
    expect(onFail).toHaveBeenCalled();
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledWith("no");
  });
});
