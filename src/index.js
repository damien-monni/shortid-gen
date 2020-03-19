import shortid from 'shortid';

const inputEl = document.getElementById('generated-input');

const onGenerate = (event) => {
  event && event.preventDefault();

  const id = shortid.generate();
  inputEl.value = id;
};

const generateButtonEl = document.getElementById('generate-button');
generateButtonEl.addEventListener('click', onGenerate);
document.addEventListener('keydown', onGenerate);

onGenerate();
