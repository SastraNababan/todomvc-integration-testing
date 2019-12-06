describe("Remove Integration", () => {
  beforeEach(() => {
    cy.seed();
    cy.visit("/");
  });
  
  afterEach(function() {
    cy.resetSeed();
  });
  
  it("remove a todo", () => {
    // cy.get(".todo-list li")
    
    cy.get('.todo-list li')
      .as('list')

    cy.get("@list")  
      .first()
      .find(".destroy")
      .invoke("show")
      .click();

    cy.get("@list")
      .should("have.length", 2)
      .and("not.contain", "learn testing");
  });
});
