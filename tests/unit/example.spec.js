describe("Example component", () => {
  test("debe ser mayor a 10", () => {
    let value = 9;

    // estimulo
    value = value + 2;

    expect(value).toBeGreaterThan(10)
  });
});
