function myFunction() {
  var x = document.getElementById("navbarjs");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
tab.addEventListener('click', () => {
  const target = document.querySelector(tab.dataset.tabTarget)
  tabContents.forEach(tabContent => {
    tabContent.classList.remove('active')
  })
  tabs.forEach(tab => {
    tab.classList.remove('active')
  })
  tab.classList.add('active')
  target.classList.add('active')
})
})

const postBtn=document.getElementById('post-status-btn')
postBtn.addEventListener('click',assignStatus)
function assignStatus(){
const value=document.getElementById('status').value;
document.getElementById('status-value').innerHTML=value;

console.log(value)
}
document.getElementById('BodyStats').addEventListener('click',loadChart)
//window.onload=loadChart;
function loadChart(){  
  var doughnutData = [
    {
      value: 50,
      color: "#F7464A",
    },
    {
      value: 50,
      color: "#46BFBD",
    }
  ];
  var doughnutOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: false,

    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth: 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    //animationSteps: 300,
    duration:500,

    
    //String - Animation easing effect
    animationEasing: "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    startAngle:30,
  
  }

  var doughnutCtx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(doughnutCtx).Doughnut(doughnutData, doughnutOptions);
  document.getElementById("chart-percentage").innerHTML=va;
}
