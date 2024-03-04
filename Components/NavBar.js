import BasePage from '../pages/BasePage';

export  default class NavBar extends BasePage {

    constructor() {
        super();
        this.navBar = '#header';
        this.menus = {
            firmaDocumento: {
                selector: '#side-menu > li:nth-child(6) > a > span.nav-label',
                submenus: {
                    nuevoDocumento: '#side-menu > li.active > ul > li:nth-child(1) > a'
                }
            }
        }
    }

    async validateNavBarIsPresent(){
        await page.waitForSelector(this.navBar)
        await page.waitForSelector(this.menus.firmaDocumento.selector)
    }

    async selectMenuItem(menuItem) {
        await this.click(this.menus[menuItem].selector)
    }

    async selectSubMenuItem(menuItem,subMenuItem) {
        console.log(menuItem,subMenuItem)
        console.log(this.menus[menuItem])
        console.log(this.menus[menuItem].submenus)
        console.log(this.menus[menuItem].submenus[subMenuItem])
        await this.click(this.menus[menuItem].selector)
        await this.click(this.menus[menuItem].submenus[subMenuItem])
    }
}