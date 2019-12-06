describe('Add Integration', () => {
  beforeEach(() => {
    cy.seed();
    cy.visit("/");
  });


  afterEach(function() {
    cy.resetSeed();
  });

  it('focuses input on load', () => {
    cy.focused()
    .should('have.class','new-todo')
  });

  it('accepts input', () => {
    cy.get(".new-todo")
      .type("Buy Coffee")
      .should("have.value", "Buy Coffee");
  })
  
  it("adds 2 todos", function() {
    cy.resetSeed();
    cy.get(".new-todo")
      .type("learn testing{enter}")
      .type("be cool{enter}")
      .should("have.value", "");

    // cy.get(".todo-list li")
    //   .should("have.length", 3)
    //   .and("contain", "be cool");

    // cy.get(".todo-count")
    //   .should("contain", "3"); 
  });

  it("adds 1 todos", function() {
    // cy.resetSeed();
    cy.get(".new-todo")
      .type("Last Item{enter}")
      // .type("be cool{enter}")
      // .should("have.value", "");
  });

});
