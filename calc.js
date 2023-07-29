
function calculate(){


	var accountsize = document.getElementById("accountsize").value;
	var percent = document.getElementById("riskpercent").value;
	var riskpercent = percent/100;

	var entryprice = document.getElementById("entryprice").value;
	var stopprice = document.getElementById("stopprice").value;
	var targetprice = document.getElementById("targetprice").value;

	var riskrange= entryprice - stopprice;
	var rewardrange= targetprice - entryprice;


	document.getElementById("shares").innerHTML = "#";
	document.getElementById("ratio").innerHTML = "#:#";

}