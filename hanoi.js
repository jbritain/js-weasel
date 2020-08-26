rods = [[4, 3, 2, 1], [], []] //initial structure of disks in ascending order on middle tower
output = document.getElementById("output");
function moveDisk(start, end){
	
	startrod = rods[start];
	endrod = rods[end];
	
	disk = startrod.pop();
	
	if(disk < endrod[endrod.length - 1] || endrod.length == 0){
		endrod.push(disk);
		document.body.innerHTML = rods;
		return true;
	} else {
		startrod.push(disk)
		return false;
	}
}