describe('test-one', ()=>{
  
  it('Login', () => {
    cy.visit('https://jvtestqa.netlify.app/')
    cy.get('input[name="name"]').type('TestQAone');
    cy.get('input[name="email"]').type('p@gmail.com');
    cy.get('input[name="nik"]').type('1122282383782893');
    cy.get('input[name="phone"]').type('28238378278');
    cy.get('button').click();
  })  
})