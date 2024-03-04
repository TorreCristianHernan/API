export class HomePage {
    constructor() {
        this.onlineShop = '[data-cy="onlineshoplink"]';
    };
    clickOnlineShopButton() {
        cy.get(this.onlineShop).click();
    };
};