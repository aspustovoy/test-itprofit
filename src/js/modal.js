/* eslint-disable no-return-assign */
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal ');

const openModal = () => {
  modal.classList.add('modal--visible');
  modalOverlay.classList.add('modal-overlay--visible');
  document.body.classList.toggle('stop-scroll');
};

const closeModal = () => {
  document.querySelectorAll('input, textarea').forEach((e) => {
    e.value = '';
    e.style.borderColor = '';
  });
  document.querySelectorAll('.error').forEach((e) => (e.textContent = ''));
  modal.classList.remove('modal--visible');
  modalOverlay.classList.remove('modal-overlay--visible');
  document.body.classList.toggle('stop-scroll');
};

openModalBtn.onclick = () => openModal();
closeModalBtn.onclick = () => closeModal();

window.onclick = (event) => {
  if (event.target === modalOverlay) closeModal();
};
