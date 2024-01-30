document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal("reviewsModal");
    closeModal("shipmentModal");
    closeModal("contactsModal");
    closeModal("faqModal");
  }
});

function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}
