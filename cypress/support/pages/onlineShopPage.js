export class OnlineShopPage {
    constructor() {
        this.agregarProducto ='[data-cy="add-product"]';
    };
    clickAgregarProducto() {
        cy.get(this.agregarProducto).click();
    };
};