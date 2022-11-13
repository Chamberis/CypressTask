export class ProductsPage {

    static verifyFirstWord(word) {
        this.hasText(PRODUCTS_NAME, word)
        console.log("1");
        console.log(PRICE);
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