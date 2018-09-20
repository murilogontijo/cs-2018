/*
Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
T-58 seconds
*/

var count = 60;

while (count >= 0 ) {
	console.log("T-"+ count +" seconds");
	count--;
	switch(count){
		case 50:
			console.log("Orbiter transfers from ground to internal power");
			count--;
			break;			
		case 31:
			console.log("Ground launch sequencer is go for auto sequence start");
			count--;	
			break;		
		case 16:
			console.log("Activate launch pad sound suppression system");
			count--;			
			break;
		case 10:
			console.log("Activate main engine hydrogen burnoff system");
			count--;
			break;
		case 6:
			console.log("Main engine start");	
			count--;		
			break;
		case 0:
			console.log("Solid rocket booster ignition and liftoff!");	
			count--;		
			break;
			
	}
	
}