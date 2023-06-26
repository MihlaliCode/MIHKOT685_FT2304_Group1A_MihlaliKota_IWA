const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING = "Unfortunately we do not ship to your country of residence";
let NONE_SELECTED = 0;
let shipping;
let currency;
let country = "RSA";
let customers = 1;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

if (country === "RSA") {
  shipping = 400;
  currency = "R";
} else if (country === "NAM") {
  shipping = 600;
  currency = "$";
} else {
  shipping = 800;
  currency = "$";
}


if (shoes + batteries + pens + shirts > R1000 && $60 ) {
	if (country = NAM && customers < 2) {
			if (country = RSA)
		    shipping = 0 || calcShipping
		}
	}
}

if (shipping = 0) && (customers !=== 1) { console.log(WARNING) } */

country === "NK" ? console.log(BANNED_WARNING) : console.log("price", currency, shoes + batteries + pens + shirts + shipping)
