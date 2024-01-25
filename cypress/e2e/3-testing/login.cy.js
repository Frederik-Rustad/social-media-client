describe("Login function", () => {

  it(" should fail with none noroff email", () => {
    cy.visit("index.html");
    cy.clearAllLocalStorage();

    cy.wait(2000);
    cy.get("form[id='registerForm'").within(() => {
      cy.get("button[data-bs-target='#loginModal']:visible").click({
        multiple: true,
      });
    });

    cy.wait(1000);
    cy.get("#loginModal #loginEmail")
      .should("exist")
      .type("thor@gmail.com");
    cy.wait(1000);
    cy.get("#loginModal #loginPassword").should("exist").type("Abc123456");
    cy.wait(1000);
    cy.get("button[type='submit']:visible").click({ multiple: true });
    cy.wait(2000);
    cy.window().its("localStorage.profile").should("not.exist");
    cy.window().its("localStorage.token").should("not.exist");
  });

  it("should fail with invalid password.", () => {
    cy.visit("index.html");
    cy.clearAllLocalStorage();

    cy.wait(2000);
    cy.get("form[id='registerForm'").within(() => {
      cy.get("button[data-bs-target='#loginModal']:visible").click({
        multiple: true,
      });
    });

    cy.wait(1000);
    cy.get("#loginModal #loginEmail").should("exist").type("thor@noroff.no");
    cy.wait(1000);
    cy.get("#loginModal #loginPassword").should("exist").type("12345");
    cy.wait(1000);
    cy.get("button[type='submit']:visible").click({ multiple: true });
    cy.wait(5000);
    cy.window().its("localStorage.profile").should("not.exist");
    cy.window().its("localStorage.token").should("not.exist");
  });

  it("can login with valid credentials", () => {
    cy.visit("index.html");
    cy.clearAllLocalStorage();

    cy.wait(2000);
    cy.get("form[id='registerForm'").within(() => {
      cy.get("button[data-bs-target='#loginModal']:visible").click({
        multiple: true,
      });
    });

    cy.wait(1000);
    cy.get("#loginModal #loginEmail")
      .should("exist")
      .type("thor@noroff.no");
    cy.wait(1000);
    cy.get("#loginModal #loginPassword").should("exist").type("Abc123456");
    cy.wait(1000);
    cy.get("button[type='submit']:visible").click({ multiple: true });
    cy.wait(2000);
    cy.get(window.localStorage.getItem("profile")).should("not.be.empty");
    cy.get(window.localStorage.getItem("token")).should("not.be.empty");
  });
});
