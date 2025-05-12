const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  const trimValue = inputEl.value.trim();
  outputEl.textContent = trimValue === '' ? 'Anonymous' : trimValue;
});
