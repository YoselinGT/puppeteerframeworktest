import LoginPage from '../pages/LoginPage'
import NavBar from '../Components/NavBar'
import FirmaDocumentoPage from "../pages/FirmaDocumentoPage";

let loginPage
let firmaDocumentoPage
let navbarPage

describe('E2E nueva solicitud cd firma', ()=> {
    beforeAll(async() => {
        loginPage = new LoginPage()
        firmaDocumentoPage = new FirmaDocumentoPage()
        navbarPage = new NavBar()
    })

    it('Hacer login', async()=>{
        await loginPage.visit()
        await loginPage.login('ygalvan','qwerty123')
        await loginPage.validateLogin()
    },50000)

    it('Navegar asi el menu de Nuevo documento', async()=>{
        await navbarPage.validateNavBarIsPresent()
        await navbarPage.selectSubMenuItem('firmaDocumento','nuevoDocumento')
        await firmaDocumentoPage.validatePage()
    },120000)

    it('Crear una nueva solicitud de firma', async() => {
        await firmaDocumentoPage.nuevoDocumento("Prueba","Prueba descripcion","Prueba descripcion File","María González Pérez","GOPM900101ABC","mariagonzalesperez@yopmail.com","")
    },170000)
})