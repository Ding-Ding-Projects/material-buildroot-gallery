const filter = document.querySelector("#filter");
const cards = [...document.querySelectorAll(".capture")];
const count = document.querySelector("#count");
const language = document.querySelector("#language");
function updateGallery() {
  let visible = 0;
  for (const card of cards) {
    const show = filter.value === "all" || card.dataset.kind === filter.value;
    card.hidden = !show;
    if (show) visible++;
  }
  count.value = `${visible} of ${cards.length} captures`;
}
function updateLanguage() {
  const key = language.value === "zh-HK" ? "zh" : "en";
  document.documentElement.lang = language.value;
  for (const node of document.querySelectorAll("[data-en][data-zh]")) node.textContent = node.dataset[key];
}
filter.addEventListener("change", updateGallery);
language.addEventListener("change", updateLanguage);
updateGallery();
