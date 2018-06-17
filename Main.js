function Generatechart() {
    var altitudeArray = document.getElementById('altitudes').value.split(',');
    console.log(altitudeArray);
    var frequency = document.getElementById("frequency").value;
    console.log(frequency);
    console.log(Math.floor(altitudeArray.length/frequency));

    var filteredAltitudeArray = [];
    var secondsAxis = []
    for (let index = 0; index < Math.floor(altitudeArray.length/frequency); index++) {
        filteredAltitudeArray.push(altitudeArray[(frequency*(index+1))-1]);
        secondsAxis.push(index+1);
    }

    console.log(filteredAltitudeArray);
    console.log(secondsAxis);


    const CHART = document.getElementById("LineChart");
    let LineChart= new Chart(CHART, {
        type:'line',
        data: {
            labels: secondsAxis,
            datasets: [
                {
                    label: "Altitude",
                    Fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderCapStyle: 'butt',
                    borderdashOffser: 0.0,
                    borderJoinStyle: 'niter',
                    pointHoverRadius: 5,
                    pointRadius: 1,
                    data: filteredAltitudeArray,
                }
            ]
        },
        options:{
            scales: {
                yAxes:[{
                    scaleLabel: {
                        display: true,
                        labelString:"Altitude (Metres)",
                    },
                    ticks:{
                        beginAtZero: true,
                    }
                }],
                xAxes:[{
                    scaleLabel: {
                        display:true,
                        labelString:"Time (Seconds)"
                    }

                }],
            }
        }
    })
}


// When the user clicks on div, open the popup
function OnlineHelp1() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function OnlineHelp2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}

function GuestIndex() {
    console.log("I am Gay");
}