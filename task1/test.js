function test() {
  console.log("test");
}
var element = document.getElementById("test");
element.addEventListener("click", (e) => {
  console.log(e);
});
