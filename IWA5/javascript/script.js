const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
let NONE_SELECTED = 0;
let shipping;
let currency;
let country = "NAM";
let customers = 1;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

let shippingItems = shoes + toys + shirts + batteries + pens;

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

if (
  (shippingItems >= 1000 && country === "RSA") ||
  (shippingItems >= 60 && country === "NAM")
) {
  if (customers === 1) {
    shipping = 0;
  } else {
    console.log(FREE_WARNING);
  }
}


country === "NK"
  ? console.log(BANNED_WARNING)
  : console.log(
      "price",
      currency,
      shippingItems + shipping
    );
