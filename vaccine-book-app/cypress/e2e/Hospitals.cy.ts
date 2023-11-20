describe("Navigation and feature check", () => {
  it("should have video played can pause and has button to /hospital also has more than 3 hospital image", () => {
    cy.visit("/");

    cy.get("video").as("videoElement");

    cy.get("@videoElement").then(($video) => {
      expect($video[0].paused).to.be.false;
    });

    cy.wait(5000);

    cy.get("button").contains("Pause").click();
    cy.get("@videoElement").then(($video) => {
      expect($video[0].paused).to.be.true;
    });

    cy.get("button").contains("BOOK YOUR VACCINE").click();
    cy.url().should("include", "/hospital");
    cy.wait(7000);

    cy.get("main").find("img").its("length").should("be.gte", 3);
  });
});