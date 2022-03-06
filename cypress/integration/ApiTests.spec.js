/// <reference types= "cypress" />

import Requests from "../integration/Request/Request";

describe("Test the APIs", () => {
  it("click on the order now button Request", () => {
    Requests.clickOrder();
  });
});
