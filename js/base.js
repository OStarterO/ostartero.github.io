var gridContainers = document.getElementsByClassName("grid-container");
for (var i = 0; i < gridContainers.length; i++) {
	var gridContainer = gridContainers[i];
	var childElementCount = gridContainer.childElementCount;
	var columns = "";
	const colcnt = Math.sqrt(childElementCount);
	for (var j = 0; j < colcnt; j++) columns += 100 / colcnt + "% ";
	gridContainer.style.gridTemplateColumns = columns;
}
