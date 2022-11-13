import { BasePage } from "./basePage";

const PRODUCTS_NAME = ".productdescriptionbrand";
const BRAND_ASC_RADIO_BUTTON = "#MobSortOptions_brand_asc";
const SELECT_NIKE_BRAND = '[data-parsedfiltername="Nike"]';
const REGULAR_PRICE = ".s-smalltext";
const SALE_PRICE = ".s-largered";

export class ProductsPage extends BasePage {
  static checkBrandASC() {
    cy.get(BRAND_ASC_RADIO_BUTTON).check();
  }

  static verifyFirstWord(word) {
    this.hasText(PRODUCTS_NAME, word);
  }

  static checkOnlyNikeBrand() {
    cy.get(SELECT_NIKE_BRAND).click();
    let brandArray = [];
    cy.wait(2000);
    cy.get(PRODUCTS_NAME).each((el) => {
      brandArray.push(el.text());

      expect(brandArray).to.match(/Nike/);
    });
  }

  static compareTwoValues() {
    let productPrice = [];
    let salePrice = [];

    cy.get(REGULAR_PRICE).each((el) => {
      productPrice.push(el.text().replace("$", ""));
    });

    cy.get(discountedPrice).each((el) => {
      salePrice.push(el.text().replace("$", ""));
    });
  }
}
