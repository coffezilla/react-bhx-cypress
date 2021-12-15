/*
  tests
  - Renders propertly
  - trying to Create one post without title - Error
  - Create one post
  - Check description from the new post
  - Like post created
*/

describe('Handle Post', () => {
	before(() => {
		cy.visit('/');
	});

	// check if is running
	it('Renders propertly', () => {
		cy.get('#root').should('exist');
	});

	// trying to add post but failing because title input is empty
	it('Create one post without title - Error', () => {
		// check if is empty
		cy.get('#title').should('have.value', '');

		// submit
		cy.get('button[type="submit"]').click();

		// check if alert shows up
		cy.on('window:alert', (str) => {
			expect(str).to.equal('Campo vazio alert');
		});
	});

	// add new post
	it('Create one post', () => {
		// fill input forms
		cy.get('#title').as('title').type('My first post');
		cy.get('#category').select('Trabalho');

		// submit
		cy.get('button[type="submit"]').click();

		// check if input reset
		cy.get('@title').should('have.value', '');
	});

	// check post creationg
	it('Check description from the new post', () => {
		cy.get(
			':nth-child(1) > .post-content > .post-content__description > .truncate > h2'
		).should('have.text', 'My first post');
		cy.get(
			':nth-child(1) > .post-content > .post-content__description > .truncate > p > span'
		).should('have.text', 'Trabalho');
		cy.get(
			':nth-child(1) > .post-content > .post-content__description > button > span'
		).should('have.text', '0');
	});

	// click to like
	it('Like post created', () => {
		cy.get(
			':nth-child(1) > .post-content > .post-content__description > button > span'
		).click();
		cy.get(
			':nth-child(1) > .post-content > .post-content__description > button > span'
		).should('have.text', '1');
	});
});
