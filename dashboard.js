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
localStorage.setItem('status','value')
document.getElementById('status-value').innerHTML="cool"
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

    segmentShowStroke: false,
    // segmentStrokeColor: "#fff",
    // segmentStrokeWidth: 2,
    percentageInnerCutout: 50,
    duration:500,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    startAngle:30,

  }

  var doughnutCtx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(doughnutCtx).Doughnut(doughnutData, doughnutOptions);
  document.getElementById("chart-percentage").innerHTML=va;
}


        document.getElementById('Set__Goal').addEventListener('click',setFormData);
        function setFormData(e){
          e.prevent();
          //const arr
        }
        const arr=[1,2,3,4]
        localStorage.setItem('array',arr)
        console.log(localStorage.getItem('array'))

        document.getElementById('uploadbeforeafter').addEventListener('click',showPage)
        function showPage(){
          
        }