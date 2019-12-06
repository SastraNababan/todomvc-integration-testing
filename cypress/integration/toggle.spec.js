describe('Toggle', () => {
    before(() => {
      cy.seed();
      cy.visit("/");
    });

    beforeEach(() => {
      cy.get(".todo-list li")
        .first()
        .as("first-todo");
    });
    
    

    // it("properly displays completed items", () => {
    //   cy.get(".todo-list li")
    //     .filter(".completed")
    //     .should("have.length", 1)
    //     .and("contain", "Eggs")
    //     .find(".toggle")
    //     .should("be.checked");
    // });

    it('Marks incomplete items', () => {
      // cy.get(".todo-list li")
      //   .first()
      //   .as("first-todo");

      cy.get("@first-todo")
        .find(".toggle")
        .click()
        .should("be.checked");

      cy.get("@first-todo").should("have.class", "completed");
      cy.get(".todo-count").should("contain", 2);


      cy.get(".todo-list li")
        .eq(1)
        .as("second-todo");
        
      cy.get("@second-todo")
        .find(".toggle")
        .click()
        .should("be.checked");

      cy.get("@second-todo").should("have.class", "completed");
      cy.get(".todo-count").should("contain", 1);

    })

    it('Marks complete items', () => {
      cy.get("@first-todo")
        .find(".toggle")
        .click()
        .should("not.be.checked");
    })

});