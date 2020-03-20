import shortid from 'shortid';

const inputEl = document.getElementById('generated-input');

// ID copy to clipboard
let snackbarTimeoutId = null;
const handleCopy = (event) => {
  event && event.preventDefault();

  const el = document.createElement('textarea');
  el.value = inputEl.value;

  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';

  document.body.appendChild(el);
  el.select();
  const copied = document.execCommand('copy');

  document.body.removeChild(el);

  if (copied) {
    const snackbar = document.querySelector('#home-page #copy-container');

    if (snackbarTimeoutId) {
      window.clearTimeout(snackbarTimeoutId);
      snackbar.classList.remove('visible-snackbar');
      setTimeout(() => {
        snackbar.classList.add('visible-snackbar');
      }, 300);
    } else {
      snackbar.classList.add('visible-snackbar');
    }
    snackbarTimeoutId = window.setTimeout(() => {
      snackbar.classList.remove('visible-snackbar');
    }, 3000);
  }
};

const copyButtonEl = document.querySelector(
  '#home-page #generated-input-container button',
);
copyButtonEl.addEventListener('click', handleCopy);

// ID generation
const onGenerate = (event) => {
  event && event.preventDefault();

  const id = shortid.generate();
  inputEl.value = id;
  handleCopy();
};

const generateButtonEl = document.getElementById('generate-button');
generateButtonEl.addEventListener('click', onGenerate);

onGenerate();
