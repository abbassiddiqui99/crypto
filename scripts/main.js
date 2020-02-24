function encrypt() {
	var str = document.getElementById("inputtext").value;
	var amount = document.getElementById("key").value;
	console.log(str);

	if (document.getElementById("ctype").value == "0") {
		alert("please select cipher type");
	}

	if (document.getElementById("ctype").value == "1") {
		myCipher();
	} else if (document.getElementById("ctype").value == "2") {
		vencrypt();
	} else if (document.getElementById("ctype").value == "3") {
		enplay();
	} else if (document.getElementById("ctype").value == "4") {
		Scrypt();
	}
}

function decrypt() {
	if (document.getElementById("ctype").value == "1") {
		console.log("Caesars");
		Cdecrypt();
	} else if (document.getElementById("ctype").value == "2") {
		Vdecrypt();
	} else if (document.getElementById("ctype").value == "3") {
		deplay();
	} else if (document.getElementById("ctype").value == "4") {
		Sdecrypt();
	}
}
