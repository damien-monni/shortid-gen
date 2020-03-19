const changeTheme = async () => {
  const rawResponse = await fetch('http://colormind.io/api/', {
    body: JSON.stringify({ model: 'default' }),
    method: 'POST',
    mode: 'cors',
  });

  const {
    result: [primary, _, action, actionVariant, text],
  } = await rawResponse.json();

  const root = document.documentElement;

  const setStyle = (style, color) => {
    root.style.setProperty(
      `--${style}`,
      `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
    );
  };

  setStyle('primary', primary);
  setStyle('text', text);
  setStyle('action', action);
  setStyle('action-variant', actionVariant);
};

export default changeTheme;
