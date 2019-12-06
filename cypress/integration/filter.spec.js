describe('Filter Items', () => {
  beforeEach(() => {
    cy.seed();
    cy.visit("/")
  });
  
  it("Handles filter links", () => {
    cy.get(".todo-list li")
      .find(".toggle").as("todo-item");

    cy.get("@todo-item").eq(0).click();
    cy.get("@todo-item").eq(1).click() ; 
      
    const filters = [
      { link: "All", expectedLength: 3 },
      { link: "Active", expectedLength: 1 },
      { link: "Completed", expectedLength: 2 }
    ];
    
    cy.wrap(filters).each(filter => {
      cy.contains(filter.link).click();
      cy.get(".todo-list li").should("have.length", filter.expectedLength);
    });
  });
  
});