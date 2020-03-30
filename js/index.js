const pages = ["developing.html", "gaming.html", "intp.html", "etc.html"];
const buttons = document.getElementsByClassName("grid-item");

function loadPage(index) {
	location.href = pages[index];
}
