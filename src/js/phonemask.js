// eslint-disable-next-line import/no-extraneous-dependencies
import Inputmask from 'inputmask';

const phoneInput = document.querySelector('#phone');
Inputmask({ mask: '+375 (99) 999-99-99' }).mask(phoneInput);
