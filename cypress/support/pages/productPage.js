export class ProductPage {
    constructor() {
        this.agregarProducto ='[data-cy="createProduct"]';
        this.producto='[data-cy="productName"]'
        this.precio='[data-cy="productPrice"]'
        this.imagen='[data-cy="productCard"]'
        this.idProducto='[data-cy="productID"]'
        this.close='#closeModal'
        this.click2='.css-1jm8dps'
        this.buscarProducto='[data-cy="search-bar"]'
        this.tipoBusqueda='[data-cy="search-type"]'
        this.tacho='#delete-2001 > svg > path:nth-child(2)'
        this.delete='Delete'
        this.camiseta='Camiseta Racing'

    };
    clickAgregarProducto() {
        cy.get(this.agregarProducto).click();
    };
    escribirProducto() {
        cy.get(this.producto).type('Camiseta Racing');
    };
    escribirPrecio() {
        cy.get(this.precio).type('100000');
    };
    seleccionarImagen() {
        cy.get(this.imagen).type('data:image/png;base64,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')
    };
    escribirIdProducto() {
        cy.get(this.idProducto).clear().type('2001');
    };
    clickClose() {
        cy.get(this.close).click();
    };
    click2() {
        cy.get(this.click2).click();
    };
    clickBuscador() {
        cy.get(this.buscarProducto).clear().type('2001{enter}');
    };
    clickTipoBusqueda() {
        cy.get(this.tipoBusqueda).select('ID');
    };
    clickTacho() {
        cy.get(this.tacho).click();
    };
    clickDelete() {
        cy.contains(this.delete).click();
    };
    validamosQueNoExistaElProducto() {
    cy.contains(this.camiseta).should('not.exist');
    };
    
};