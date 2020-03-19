import shortid from 'shortid';

import changeTheme from './change-theme';

const inputEl = document.getElementById('generated-input');

const onGenerate = (event) => {
  event && event.preventDefault();

  const id = shortid.generate();
  inputEl.value = id;
};

const generateButtonEl = document.getElementById('generate-button');
generateButtonEl.addEventListener('click', onGenerate);

onGenerate();

// Theme
const themeButton = document.getElementById('theme-change');
themeButton.addEventListener('click', changeTheme);
