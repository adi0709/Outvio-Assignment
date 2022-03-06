/// <reference types= "cypress" />

import Order from "../integration/PageObjects/order";

describe("test the order flow", () => {
  it("click on the order now button", () => {
    Order.visitPlatform();
    Order.clickButton("order");
    Order.verifyAssemblePage();
  });
  it("Add Pizza", () => {
    Order.clickButton("addPizza");
    Order.verifyOrderOptions();
    Order.selectSize(0);
    Order.selectTopping(0);
  });
  it("Add Another Pizza", () => {
    Order.addSecondPizza();
  });
  it("Remove the last pizza", () => {
    Order.removeLastPizza(1);
  });
  it("SubmitOrder", () => {
    Order.submitOrder();
    Order.verifySubmitOrder();
  });
});
