/// <reference types= "cypress" />

class Request {
  clickOrder() {
    cy.request({ method: "GET", url: "http://localhost:3001/api/order" }).then(
      ($res) => {
        expect($res.status).to.eq(200);
        expect($res.body).to.have.property("orderId");
      }
    );
  }
}
module.exports = new Request();
