import {
  TABLES,
  COLUMNS,
  state,
  createOrderData,
  updateDragging,
} from "./data.js";
import {
  html,
  createOrderHtml,
  updateDraggingHtml,
  moveToColumn,
} from "./view.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

const handleDragStart = (event) => {
  const orderId = event.target.dataset.id;
  updateDragging({ source: orderId });
  event.dataTransfer.setData("text/plain", orderId);
  event.target.classList.add("dragging");
  event.dataTransfer.effectAllowed = "move";
};

const handleDragEnd = (event) => {
  const orderId = event.target.dataset.id;
  updateDragging({ source: null });
  event.target.classList.remove("dragging");
};

const handleHelpToggle = (event) => {
  const helpOverlay = html.help.overlay;

  if (helpOverlay.open) {
    helpOverlay.close();
  } else {
    helpOverlay.showModal();
  }
  html.other.add.focus();
};

const handleAddToggle = (event) => {
  const addOverlay = html.add.overlay;
  const addForm = html.add.form;

  if (addOverlay.open) {
    addOverlay.close();
    addForm.reset();
  } else {
    addOverlay.showModal();
  }
  html.other.add.focus();
};

const handleAddSubmit = (event) => {
  event.preventDefault();
  const addForm = event.target;
  const formData = new FormData(addForm);
  const title = formData.get("title");
  const table = formData.get("table");

  if (!title || !table) {
    return;
  }
  const newOrder = createOrderData({ title, table, column: "ordered" });
  state.orders[newOrder.id] = newOrder;
  const newOrderElement = createOrderHtml(newOrder);
  html.columns.ordered.appendChild(newOrderElement);
  html.add.overlay.close();
  addForm.reset();
};

const handleEditToggle = (event) => {
  const targetOrderElement = event.target.closest(".order");

  if (!targetOrderElement) {
    return;
  }

  const orderId = targetOrderElement.dataset.id;
  const order = state.orders[orderId];

  if (!order) {
    return;
  }
  html.edit.title.value = order.title;
  html.edit.table.value = order.table;
  html.edit.id.value = orderId;
  html.edit.column.value = order.column;
  html.edit.overlay.showModal();
};

const handleEditSubmit = (event) => {
  event.preventDefault();
  const editForm = event.target;
  const formData = new FormData(editForm);
  const orderId = formData.get("id");
  const order = state.orders[orderId];

  if (!order) {
    return;
  }

  const updatedTitle = formData.get("title");
  const updatedTable = formData.get("table");
  const updatedColumn = formData.get("column");

  if (!updatedTitle || !updatedTable || !updatedColumn) {
    return;
  }

  order.title = updatedTitle;
  order.table = updatedTable;
  order.column = updatedColumn;

  const updatedOrderElement = createOrderHtml(order);

  moveToColumn(orderId, updatedColumn);

  html.edit.overlay.close();
};

const handleDelete = (event) => {
  const editForm = event.target.closest("form");
  const formData = new FormData(editForm);
  const orderId = formData.get("id");
  const order = state.orders[orderId];

  if (!order) {
    return;
  }

  delete state.orders[orderId];

  const orderElement = document.querySelector(`[data-id="${orderId}"]`);
  if (orderElement) {
    orderElement.remove();
  }
  html.edit.overlay.close();
};

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
