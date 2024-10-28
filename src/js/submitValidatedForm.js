import { ajaxFormHandler } from './ajaxFormHandler.js';

const form = document.getElementById('modalForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isValid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');
  const responseMessage = document.getElementById('responseMessage');

  name.style.borderColor = '';
  name.nextElementSibling.textContent = '';
  email.style.borderColor = '';
  email.nextElementSibling.textContent = '';
  phone.style.borderColor = '';
  phone.nextElementSibling.textContent = '';
  message.style.borderColor = '';
  message.nextElementSibling.textContent = '';
  responseMessage.textContent = '';

  if (!/^[a-zA-Zа-яА-Я\s]+$/.test(name.value) || name.value.length < 2) {
    name.style.borderColor = 'red';
    name.nextElementSibling.textContent = 'Введите корректное имя (минимум 2 буквы).';
    isValid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.style.borderColor = 'red';
    email.nextElementSibling.textContent = 'Введите корректный email.';
    isValid = false;
  }

  if (phone.value.replace(/[^\d]/gi, '').length !== 12) {
    phone.style.borderColor = 'red';
    phone.nextElementSibling.textContent = 'Введите телефон в формате +375 (__) ___-__-__.';
    isValid = false;
  }

  if (!message.value) {
    message.style.borderColor = 'red';
    message.nextElementSibling.textContent = 'Поле обязательно для заполнения.';
    isValid = false;
  }

  if (isValid) {
    const formData = new FormData(form);
    ajaxFormHandler(formData);
  }
});
