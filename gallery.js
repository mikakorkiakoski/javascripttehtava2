// Get the modal and close button
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

// Get all clickable images
const clickableImages = document.querySelectorAll(".clickable-image");

// Function to open the modal with the clicked image
function openModal(imageSrc) {
  modal.style.display = "block";
  modalImage.src = imageSrc;
}

// Function to close the modal
function closeModalFunction() {
  modal.style.display = "none";
}

// Add click event listeners to all clickable images
clickableImages.forEach((image) => {
  image.addEventListener("click", () => {
    openModal(image.src);
  });
});

// Add click event listener to the close button
closeModal.addEventListener("click", () => {
  closeModalFunction();
});

// Close the modal if the user clicks anywhere outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModalFunction();
  }
});