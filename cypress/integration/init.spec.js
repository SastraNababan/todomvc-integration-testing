describe('Init Integration', () => {
  beforeEach(() => {
    cy.seed();
    cy.visit("/");
  });

  it('load initial data', () => {
    cy.get(".todo-list li")
      .should("have.length", 3)
  });
})
