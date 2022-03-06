/// <reference types= "cypress" />
const data = require("../../fixtures/example.json");

class Order {
  visitPlatform() {
    cy.visit("/");
    cy.url().should("eq", "http://localhost:3000/");
  }
  clickButton($el) {
    cy.get("[data-e2e-button='" + $el + "']")
      .should("exist")
      .and("be.visible")
      .click();
  }
  verifyAssemblePage() {
    cy.get("[data-e2e-element='title']")
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Assemble your pizza(s)");
    cy.get("[data-e2e-button='addPizza']").should("exist").and("be.visible");
    cy.get("[data-e2e-button='Submit']")
      .should("exist")
      .and("be.visible")
      .and("have.class", "Mui-disabled")
      .and("not.be.enabled");
  }
  countPizza($count) {
    cy.get(".makeStyles-paperRoot-3")
      .should("exist")
      .and("be.visible")
      .and("have.length", $count);
  }
  verifyOrderOptions() {
    for (var i = 0; i < data.pizza.length; i++) {
      cy.get("[data-e2e-topping='" + data.pizza[i] + "']")
        .should("exist")
        .and("be.visible");
    }
    this.countPizza(1);
  }
  selectSize($num) {
    cy.get(".makeStyles-paperRoot-3")
      .eq($num)
      .within(() => {
        cy.get("[data-e2e-topping='Small']").click();
        cy.get(":nth-child(3) > :nth-child(1)").should(
          "have.css",
          "box-shadow",
          "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px"
        );
      });
  }
  selectTopping($num) {
    cy.get(".makeStyles-paperRoot-3")
      .eq($num)
      .within(() => {
        cy.get("[data-e2e-topping='Bacon']").click();
        cy.get(":nth-child(4) > :nth-child(2)").should(
          "have.css",
          "box-shadow",
          "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px"
        );
        cy.get("[data-e2e-topping='Cheese']").click();
        cy.get(":nth-child(4) > :nth-child(1)").should(
          "have.css",
          "box-shadow",
          "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px"
        );
      });
    cy.get("[data-e2e-button='Submit']")
      .should("not.have.class", "Mui-disabled")
      .and("have.css", "background-color", "rgb(63, 81, 181)");
  }
  addSecondPizza() {
    this.clickButton("addPizza");
    this.selectSize(1);
    this.selectTopping(1);
    this.countPizza(2);
  }
  removeLastPizza($num) {
    cy.get("[data-icon='trash']").eq($num).click();
    this.countPizza(1);
  }
  submitOrder() {
    this.clickButton("Submit");
  }
  verifySubmitOrder() {
    cy.get("[data-e2e-element='title']").should("not.exist");
    cy.get("[data-e2e-button='addPizza']").should("not.exist");
    cy.get("[data-e2e-button='Submit']").should("not.exist");
    cy.get(".MuiTypography-root")
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Thank you for your order!");
  }
}

module.exports = new Order();
