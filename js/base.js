var gridContainers = document.getElementsByClassName("grid-container");
for (var i = 0; i < gridContainers.length; i++) {
	var gridContainer = gridContainers[i];
	var childElementCount = gridContainer.childElementCount;
	const colcnt = Math.sqrt(childElementCount);
	const columns = "repeat(" + Math.round(colcnt) + ", 1fr)";
	gridContainer.style.gridTemplateColumns = columns;
}
