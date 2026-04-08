alert("Welcome to Smart Campus!");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

searchInput.addEventListener("input", filterItems);
categoryFilter.addEventListener("change", filterItems);

function filterItems() {
  const searchValue = searchInput.value.toLowerCase();
  const categoryValue = categoryFilter.value;
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    const name = item.dataset.name;
    const category = item.dataset.category;

    const matchSearch = name.includes(searchValue);
    const matchCategory = categoryValue === "all" || category === categoryValue;

    if (matchSearch && matchCategory) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
