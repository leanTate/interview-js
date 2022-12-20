export const MainCard= (NameCard) => {
const card = document.createElement("div");
card.innerHTML = `
  <div class="MainCard">
    <h1>${NameCard }</h1>
  </div>
`
return card;
}
