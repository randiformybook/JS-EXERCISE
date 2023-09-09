const inputs = document.querySelectorAll(".container input");

function handleUpdate() {
  const satuan = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + satuan
  );
}

inputs.forEach((input) => {
  input.addEventListener("input", handleUpdate);
  input.addEventListener("change", handleUpdate);
});

// inputs.forEach((input) => {
//   input.addEventListener("mousemove", handleUpdate);
// });
