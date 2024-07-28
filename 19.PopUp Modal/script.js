const section = document.querySelector("section");
const showModalBtn = document.querySelector(".show-modal");
const modalBox = document.querySelector(".modal-box");
const closebtn = document.querySelector(".close-btn");

// we add the class active to the section and then we called this function when the showModalBtn is clicked
const openModal = function () {
  section.classList.add("active");
};
// function when the closeBtn is clicked
const closeModal = function (e, clickedOutside) {
  // If we clicked anywhere inside the modalBox it will close and also if we click the close Btn;
  if (clickedOutside) {
    if (e.target.classList.contains("modal-box")) {
      section.classList.remove("active");
    } else section.classList.remove("active");
  }
};
// show modal
showModalBtn.addEventListener("click", openModal);
// click anywhere inside the ModalBox it will close
modalBox.addEventListener("click", (e) => closeModal(e, true));
// if clicked it will also close teh ModalBox
closebtn.addEventListener("click", closeModal);
