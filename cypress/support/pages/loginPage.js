export class LoginPage {
    constructor() {
        this.usuario = '[data-cy="user"]';
        this.contraseña = '[data-cy="pass"]';
        this.loginButton = '[data-cy="submitForm"]';
        this.iniciarSesion='[data-cy="registertoggle"]';
    };
    escribirUsuario(usuario) {
        cy.get(this.usuario).type(usuario);
    };
    escribirContraseña(contraseña) {
        cy.get(this.contraseña).type(contraseña);
    };
    clickLoginButton() {
        cy.get(this.loginButton).click();
    };
    clickIniciarsesion() {
        cy.get(this.iniciarSesion).dblclick();
    };
};