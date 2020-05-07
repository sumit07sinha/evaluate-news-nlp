import { handleSubmit } from "../client/js/formHandler";

test("It should return true", async () => {
  expect(handleSubmit()).toBeDefined();
});
