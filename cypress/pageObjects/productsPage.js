import {BasePage} from "./basePage";

const PRODUCTS_NAME = ".productdescriptionbrand"
const BRAND_ASC_RADIO_BUTTON = "#MobSortOptions_brand_asc"

export class ProductsPage extends BasePage{


    static checkBrandASC(){
        cy.get(BRAND_ASC_RADIO_BUTTON).check()
    }

    static verifyFirstWord(word) {
        this.hasText(PRODUCTS_NAME, word)
    }


    static compareTwoValues() {

        let number1 = [];
        let number2 = [];


        cy.get(PRODUCT_PRICES).each(el => {
            number1.push(parseInt((el.text().replace("€", ""))))
        })

        // cy.get(DISCOUNTED_PRICES).each(el => {
        //     number2.push(parseInt((el.text().replace("€", ""))))
        //
        //     expect(number1).to.be.gt(number2)
        // })
        let number;
        cy.get(DISCOUNTED_PRICES).each($el => {
            number = parseInt(
                $el.text()
                    // match number, including spaces as number
                    //  separators
                    // remove non-numeric characters
                    .replace("€", ''),
                // interpret as base-10
                10
            )
            console.log(number)
        })


    }
}