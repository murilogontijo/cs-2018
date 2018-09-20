var balance = -10;
var checkBalance = true;
var isActive = true;

if (checkBalance){
	if(isActive === false){
	console.log("Your account is no longer active.");
	}
	else if(balance === 0){
	console.log("Your account is empty.");
	}
	else if(balance > 0){
	console.log("Your balance is $" + balance.toFixed(2) + ".");
	}
	else{
	console.log("Your balance is negative. Please contact bank.");
	}
}

else
	console.log("Thank you. Have a nice day!");