/* TestCase009 */
When("User select email confirm", () => {
  cy.visit('https://temp-mail.org/en/');
  cy.get('a[id="click-to-change"]').click();
  cy.wait(2000);
  cy.get('input[id="new_mail"]').type('2');
  cy.get('button[type="submit"]');
  cy.wait(2000);
  cy.xpath('//*[text()="hoangdevh3@gmail.com"]').click();
  cy.xpath('//*[text()="Confirm my account"]').click();
})
Then("User access wensite MMAP", () => {
  cy.xpath('//*[text()="Welcome to "]').and(($dev) => {
    expect($dev.get(0).textContent, 'Welcome to !').to.equal('Welcome to !')
  })
  cy.xpath('//*[text()="Magic Map"]').and(($dev) => {
    expect($dev.get(0).textContent, 'Magic Map').to.equal('Magic Map')
  })
})
When("User input new email and password", () => {
  cy.get('input[id="user_email"]').type(email);
  cy.get('input[id="user_password"]').type(password);
  cy.get('button[name="button"]').click();
})
Then("User can login system with new account register", () => {
  cy.xpath('//*[text()="Congratulations!"]').and(($h3) => {
    expect($h3.get(0).textContent, 'Congratulations!').to.equal('Congratulations!')
  })
})