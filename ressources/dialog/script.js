const dialog = document.querySelector('dialog#dialog1');
const btnOuvrirDialog = document.querySelector("#ouvrirDialog");

const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
btnOuvrirDialog.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});