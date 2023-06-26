const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
let NONE_SELECTED = "0";
let shipping;
let currency;
let country = "RSA";
let customers = 1;

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

/*
shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED

shipping = null
currency = $

if (shoes + batteries + pens + shirts > 1000 &&  ) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
}

if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

country = "NK" ? console.log(BANNED_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)
*/
