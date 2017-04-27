import { Artikel } from "./Artikel";
import { Person } from "./Person";
import { ShoppingCart } from "./Shoppingcart";
let banane = new Artikel("Banane", 1.2);
let apfel = new Artikel("Apfel", 0.99);
let shopper1 = new Person("Luca", "Nerlich");
let shoppingCart = new ShoppingCart(shopper1);
shoppingCart.addArtikel(banane);
shoppingCart.addArtikel(banane);
shoppingCart.addArtikel(apfel);
shoppingCart.addArtikel(apfel);
shoppingCart.printShoppingCart();
console.log("###### - Preise - ######");
console.log(shoppingCart.getShoppingCartSum());
//# sourceMappingURL=Main.js.map