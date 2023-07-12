const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

const book1 = {
  status: document.querySelector("#book1 .status"),
  reserve: document.querySelector("#book1 .reserve"),
  checkout: document.querySelector("#book1 .checkout"),
  checkin: document.querySelector("#book1 .checkin"),
};

const book2 = {
  status: document.querySelector("#book2 .status"),
  reserve: document.querySelector("#book2 .reserve"),
  checkout: document.querySelector("#book2 .checkout"),
  checkin: document.querySelector("#book2 .checkin"),
};

const book3 = {
  status: document.querySelector("#book3 .status"),
  reserve: document.querySelector("#book3 .reserve"),
  checkout: document.querySelector("#book3 .checkout"),
  checkin: document.querySelector("#book3 .checkin"),
};

function updateBook(book) {
  const status = book.status.textContent.trim();
  const statusProps = STATUS_MAP[status];

  book.status.style.color = statusProps.color;
  book.reserve.disabled = !statusProps.canReserve;
  book.checkout.disabled = !statusProps.canCheckout;
  book.checkin.disabled = !statusProps.canCheckIn;
}

updateBook(book1);
updateBook(book2);
updateBook(book3);
