import BasePage from "./BasePage";

export default class FirmaDocumentoPage extends BasePage {
    constructor() {
        super();
        this.mainDiv = '#wrapper > div > div > div:nth-child(1) > div > small';
        this.inputs = {
            titulo: '#titulo',
            descripcion: '#descripcion',
            siguientePaso1: '#frm > div.panel-body.paso1 > div.pull-right > a',
            file: '#fileupload',
            descripcionFile: '#fdes_1',
            siguientePaso2: '#sig2',
            btnCatFirmantes: '#frm > div.panel-body.paso3 > div > a',
            btnNewFirmante: '#btnagregar',
            nombreFirmante: '#fNombreCompleto',
            rfc: '#fRfc',
            correo: '#fCorreo',
            celular: '#fCelular',
            btnSaveFirmante: '#btnGuardar',
            findFirmante: '#tblfirmantes_filter > label > input',
            btnUseFirmante: '#tblfirmantes > tbody > tr.odd > td:nth-child(5) > button.btn.btn-xs.btn-info',
            //selectDocAdjunto: '#frm > div.panel-body.paso3 > div > div.firmantes > div > div.contenido > div > div:nth-child(10) > div > select',
            selectDocAdjunto: '#frm > div.panel-body.paso3 > div > div.firmantes > div > div.contenido > div > div:nth-child(10) > div > span.multiSelect_placeholder',
            optionSelectDocAdjunto: '#frm > div.panel-body.paso3 > div > div.firmantes > div > div.contenido > div > div:nth-child(10) > div > ul > li:nth-child(1) > a',
            checkSelfie: '#flSelfie_1',
            btnEnvioSol: '#frm > div.panel-body.paso3 > div > div.pull-right > a.btn.btn-success.finalzar',
        }
    }



    async validatePage() {
        //await page.waitForNavigation()
        await page.waitForSelector(this.mainDiv)
        await page.waitForSelector(this.inputs.titulo)
        await page.waitForSelector(this.inputs.descripcion)
        await page.waitForSelector(this.inputs.file)
        await page.waitForSelector(this.inputs.siguientePaso1)
        await page.waitForSelector(this.inputs.btnCatFirmantes)
        await page.waitForSelector(this.inputs.btnNewFirmante)
        await page.waitForSelector(this.inputs.nombreFirmante)
        await page.waitForSelector(this.inputs.rfc)
        await page.waitForSelector(this.inputs.correo)
        await page.waitForSelector(this.inputs.celular)
        await page.waitForSelector(this.inputs.btnSaveFirmante)
        await page.waitForSelector(this.inputs.btnEnvioSol)
    }

    async nuevoDocumento(titulo,descripcion,descripcionFile,nombreFirmante,rfcFirmante="",correoFirmante,celularFirmante) {
        await this.type(this.inputs.titulo, titulo)
        await this.type(this.inputs.descripcion, descripcion)
        await this.click(this.inputs.siguientePaso1)
        await this.attachFile(this.inputs.file)
        await this.type(this.inputs.descripcionFile, descripcionFile)
        await this.click(this.inputs.siguientePaso2)
        await this.click(this.inputs.btnCatFirmantes)
        await this.click(this.inputs.btnNewFirmante)
        await this.type(this.inputs.nombreFirmante, nombreFirmante)
        await this.type(this.inputs.rfc, rfcFirmante)
        await this.type(this.inputs.correo, correoFirmante)
        await this.type(this.inputs.celular, celularFirmante)
        await this.click(this.inputs.btnSaveFirmante)
        await this.type(this.inputs.findFirmante, nombreFirmante)
        await this.click(this.inputs.btnUseFirmante)
        await this.click(this.inputs.selectDocAdjunto, "DOC001")
        await this.click(this.inputs.optionSelectDocAdjunto)
        //await this.click(this.inputs.checkSelfie)
        await this.click(this.inputs.btnEnvioSol)
        await this.wait(2000)
    }
}