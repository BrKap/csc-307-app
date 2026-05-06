import mut from "./module.js";

test("Testing div -- normal division", () => {
  const expected = 5;
  const got = mut.div(10, 2);
  expect(got).toBe(expected);
});

test("Testing div -- decimal result", () => {
  const expected = 2.5;
  const got = mut.div(5, 2);
  expect(got).toBe(expected);
});

test("Testing div -- divide by zero", () => {
  const got = mut.div(10, 0);
  expect(got).toBe(Infinity);
});

test("Testing containsNumbers -- has number", () => {
  const got = mut.containsNumbers("hello3");
  expect(got).toBe(true);
});

test("Testing containsNumbers -- no number", () => {
  const got = mut.containsNumbers("hello");
  expect(got).toBe(false);
});

test("Testing containsNumbers -- empty string", () => {
  const got = mut.containsNumbers("");
  expect(got).toBe(false);
});

test("Testing containsNumbers -- space should not count as number", () => {
  const got = mut.containsNumbers("hello world");
  expect(got).toBe(false);
});