export const pre = () => {
  const options = { method: 'GET' };
  const pre = document.createElement('pre');
  fetch('https://svct.cartasur.com.ar:8081/api/dummy', options)
    .then(response => response.text())
    .then(text => {
      pre.innerHTML = `<pre class="res-container">{ response from server => ${text} }</pre>`;
      return pre;
    })
    .catch(error => console.error(error));
    return pre;
};