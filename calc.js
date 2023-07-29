
function calculate(){


	var accountsize = document.getElementById("accountsize").value;
	var percent = document.getElementById("riskpercent").value;
	var riskpercent = percent/100;

	var maxloss = accountsize * riskpercent;

	var entryprice = document.getElementById("entryprice").value;
	var stopprice = document.getElementById("stopprice").value;
	var targetprice = document.getElementById("targetprice").value;

	var riskrange= Math.abs(entryprice - stopprice);
	var rewardrange= Math.abs(targetprice - entryprice);

	

	var ratio = rewardrange/riskrange;
	
	//riskamt = (entryprice - stopprice)*sharestotrade
	//riskamt = riskrange*sharestotrade
	//100 = 1*100
	var sharestotrade = maxloss/riskrange;
	var rewardamt = sharestotrade*rewardrange;

	//This is for debugging
	//var string = "Entry: " + entryprice + "<br>";
	//    string += "Target:" + targetprice + "<br>";
	//	string += "Reward:" + rewardrange + "<br>";

	document.getElementById("shares").innerHTML = sharestotrade.toFixed(2);
	document.getElementById("rewardamt").innerHTML = rewardamt.toFixed(2);
	document.getElementById("reward").innerHTML = rewardrange.toFixed(2);
	document.getElementById("risk").innerHTML = riskrange.toFixed(2);
	document.getElementById("riskamt").innerHTML = maxloss.toFixed(2);
	document.getElementById("ratio").innerHTML = ratio.toFixed(2);

	//document.getElementById("debugging").innerHTML = string;

}