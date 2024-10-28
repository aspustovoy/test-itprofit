/* eslint-disable import/prefer-default-export */
export function ajaxFormHandler(formData) {
  const responseMessage = document.getElementById('responseMessage');
  fetch('http://localhost:9090/api/registration', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'success') {
        responseMessage.innerText = 'Форма успешно отправлена!';
        // eslint-disable-next-line no-return-assign
        document.querySelectorAll('input, textarea').forEach((e) => (e.value = ''));
      } else if (data.status === 'error') {
        responseMessage.innerText = 'Ошибка отправки формы: ' + data.message;
      }
    })
    .catch((error) => {
      responseMessage.innerText = 'Произошла ошибка: ' + error.message;
    });
}
