function chartFunction() {
	var dps = [];
	var chart = new CanvasJS.Chart("chartContainer", {
		title :{
			text: "Random Data"
		},
		data: [{
			type: "bar",
			dataPoints: dps
		}]
	});
	var xVal = 0;
	var yVal = 100; 
	var dataLength = 50;

	var updateChart = function (count) {
		count = count || 1;
		for (var j = 0; j < count; j++) {
			yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
			dps.push({
				x: xVal,
				y: yVal
			});
			xVal++;
		}

		if (dps.length > dataLength) {
			dps.shift();
		}

		chart.render();
	};
	updateChart(dataLength);
	setInterval(function(){updateChart()}, 1000);
}
function clockFunction(){
    var date = new Date();
    var hours = date.getHours(); 
    var minutes = date.getMinutes(); 
    var seconds = date.getSeconds(); 
    var twelve_time_clock = "AM";
    
    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
        twelve_time_clock = "PM";
    }
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    var time = hours + ":" + minutes + ":" + seconds + " " + twelve_time_clock;
    document.getElementById("timeContrainer").innerText = time;
    document.getElementById("timeContrainer").textContent = time;
	
    setTimeout(clockFunction, 1000);
    
}
function onlineReaderFunction(){ 
	var txtFile = new XMLHttpRequest();
	var allText = "file not found";
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
            allText = txtFile.responseText;
			allText = allText.split("\n").join("<br>");
        }

        document.getElementById('online_text').innerHTML = allText;
    }
    txtFile.open("GET", 'http://$webServerUrl$/Files/Lorem%20Ipsum.txt', true);
    txtFile.send(null);
}

var addFunctionOnWindowLoad = function(callback){
      if(window.addEventListener){
          window.addEventListener('load',callback,false);
      }else{
          window.attachEvent('onload',callback);
      }
}

addFunctionOnWindowLoad(chartFunction);
addFunctionOnWindowLoad(clockFunction);
addFunctionOnWindowLoad(onlineReaderFunction);

