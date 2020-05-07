// Tax Calculator - Asks the user to enter a cost and either a country or state tax. It then returns the tax plus the total cost with tax.

// Saskatchewan - 5% GST 6% PST

let GST = 0.05;

function provincialTax (province) {
	if (province === "AB") {
		PST = 0;
		return 0
	}
	else if (province === "BC") {
		PST = 0.07;
		return 0.07;
	}
	else if (province === "MB") {
		PST = 0.07;
		return 0.07
	}
	else if (province === "NB") {
		PST = 0.10;
		return 0.10
	}
	else if (province === "NL") {
		PST = 0.10;
		return 0.10
	}
	else if (province === "NWT") {
		PST = 0;
		return 0
	}
	else if (province === "NS") {
		PST = 0.10;
		return 0.10
	}
	else if (province === "NU") {
		PST = 0;
		return 0
	}
	else if (province === "ON") {
		PST = 0.08;
		return 0.08
	}
	else if (province === "PEI") {
		PST = 0.1;
		return 0.1
	}
	else if (province === "QC") {
		PST = 0.09975;
		return 0.09975	
	}
	else if (province === "SK") {
		PST = 0.06;
		return 0.06	
	}
	else if (province === "YK") {
		PST = 0;
		return 0	
	}
}

function priceAfterTax (price) {
	price = price * (1 + GST + PST);
	price = Math.ceil(price * 100) / 100;
	console.log("Final Price: $" + price)
	return price.toFixed(2);
}


let button = document.getElementById('submit');

button.addEventListener("click", function() {
	let provincee = document.getElementById("inputGroupSelect01").value;
	provincialTax(provincee);
	let priceFinal = document.getElementById("inputEmail3").value;
	let dog = priceAfterTax(priceFinal);
	document.getElementById("final").textContent = "Price After Tax: $" + dog;
	console.log("button is working")
})