/// <reference  types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { OnlineShopPage } from "../support/pages/onlineShopPage"
import { ProductPage } from "../support/pages/productPage"
describe('Probamos la home Page', () => {
    let loginData
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const onlineShopPage = new OnlineShopPage()
    const productPage = new ProductPage
 before('Preparamos el entorno', () => {

           cy.fixture('fixtureSuite').then(data => {
            loginData = data
           })
            cy.visit('')
            cy.log()
        cy.screenshot()
    }) 
    it('Seleccionamos Avatar principal', () => {
        loginPage.clickIniciarsesion()
        loginPage.escribirUsuario(loginData.test1.usuario.username)
        loginPage.escribirContraseña(loginData.test1.usuario.contraseña)
        loginPage.clickLoginButton()
        homePage.clickOnlineShopButton()           
        
        onlineShopPage.clickAgregarProducto()
        productPage.escribirProducto()
        productPage.escribirPrecio()
        productPage.seleccionarImagen()
        productPage.escribirIdProducto()
        productPage.clickAgregarProducto()
        productPage.clickClose()
        productPage.clickTipoBusqueda()
        productPage.clickBuscador()
        productPage.clickTacho()
        productPage.clickDelete()
        productPage.clickClose()
        productPage.clickTipoBusqueda()
        productPage.clickBuscador()
        productPage.validamosQueNoExistaElProducto()
        //
    });
});