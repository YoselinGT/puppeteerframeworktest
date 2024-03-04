import {select} from "../../lib/helpers";

export default class BasePage {
    async getTitle(){
        return await page.title()
    }

    async getUrl(){
        return await page.url()
    }

    async getText(selector){
        try {
            await page.waitForSelector(selector)
            return await page.$eval(selector,(el)=>el.textContent)
        } catch (error) {
            throw new Error(`Error al obtener el texto del selector ${selector}`)
        }
    }

    async getAttribute(selector,attribute){
        try {
            await page.waitForSelector(selector)
            return await page.$eval(selector,(el)=>el.getAttribute(attribute))
        } catch (error) {
            throw new Error(`Error al obtener el atributo del selector ${selector}`)
        }
    }

    async getValue(selector){
        try {
            await page.waitForSelector(selector)
            return await page.$eval(selector,(el)=>el.value)
        } catch (error) {
            throw new Error(`Error al obtener el valor del selector ${selector}`)
        }
    }

    async getCount(selector){
        try {
            await page.waitForSelector(selector)
            return await page.$$eval(selector,(el)=>el.length)
        } catch (error) {
            throw new Error(`Error al obtener el numero de elementos del selector ${selector}`)
        }
    }

    async click(selector,opt={}){
        try {
            await page.waitForSelector(selector,{ visible: true }, { timeout: 60000 })
            await page.click(selector,opt)
        } catch (error) {
            console.log(error)
            throw new Error(`Error al dar click al selector ${selector}`)
        }
    }

    async type(selector, text, opts = {}) {
        try {
            // await page.waitForSelector(selector)
            await page.type(selector, text, opts)
        } catch (e) {
            throw new Error(`Error al escribir en al selector ${selector}`)
        }
    }

    async doubleClick(selector){
        try {
            await page.waitForSelector(selector)
            await page.click(selector, {clickCount: 2})
        } catch (error) {
            throw new Error(`Error al dar click en el selector ${selector}`)
        }
    }

    async attachFile(selector){
        try {
            const fileInput = await page.waitForSelector(selector)
            await fileInput.uploadFile('../google.pdf');
        } catch (error) {
            throw new Error(`Error al seleccionar un archivo para el selector ${selector}`)
        }
    }

    async select(selector) {
        try {
            await page.waitForSelector(selector);
            await page.select(selector,opt);
        } catch (e){
            throw new Error(`Error al obtener el select de ${selector}`)
        }
    }

    async wait(time){
        await new Promise(resolve => setTimeout(resolve, time));
    }
}