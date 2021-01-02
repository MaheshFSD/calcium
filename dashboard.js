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
localStorage.setItem('status','value').
document.getElementById('status-value').innerHTML=localStorage.getItem('status')
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
var btn=document.getElementById("add")        
        
        function clickit(){
            var div=document.createElement("div")
            var body=document.querySelector("#Bodystats_middlecontainer")
            div.setAttribute("id","do_it")
            var html=""
            html=`
                <div>
                    <button id="how">${"How To Measure"}</button>
                </div>
                <div class="right"></div>
                <div class="makeit">
                    <p>${"Weight :"}<input type="number" placeholder="0"> ${"lbs"}</p>
                    <p>${"Body Fat :"}<input type="number" placeholder="0"> ${"%"}</p>
                    <p>${"Height :"}<input type="number" placeholder="0"> ${"inches"}</p>
                </div>
                <div class="makeit">
                    <p>${"chest :"}<input type="number" placeholder="0"> ${"inches"}</p>
                    <p>${"Waist :"}<input type="number" placeholder="0"> ${"inches"}</p>
                    <p>${"Arms :"}<input type="number" placeholder="0"> ${"inches"}</p>
                </div>
                <div class="makeit">
                    <p>${"Shoulders :"}<input type="number" placeholder="0"> ${"inches"}</p>
                    <p>${"Forearms :"}<input type="number" placeholder="0"> ${"inches"}</p>
                    <p>${"Neck :"}<input type="number" placeholder="0"> ${"inches"}</p>
                </div>
                <div class="makeit">
                    <p>${"Hips :"}<input type="number" placeholder="0"> ${"inches"}</p>
                    <p>${"Thighs :"}<input type="number" placeholder="0"> ${"inches"}</p>
                    <p>${"Calves :"}<input type="number" placeholder="0"> ${"inches"}</p>
                </div>
                <button class="done" id="done">${"Done"}</button>
                `    
            document.getElementById('addbodystats').innerHTML=html
            body.appendChild(div)
        }
        btn.addEventListener("click",clickit)

        function click_again(){
            var div=document.createElement("div")
            var body=document.querySelector("#Bodystats_middlecontainer")
            div.setAttribute("id","add_again")
            var inside=""
            inside = `
                    <div class="makeit">
                        <p>${"Start From : "}<input type="number" placeholder="00"> ${": "}<input type="number" placeholder="00"></p>
                        <p>${"End At : "}<input type="number" placeholder="00"> ${": "}<input type="number" placeholder="00"></p>
                    </div>
                    <button>${"Create Summary"}</button>
                     `
            div.innerHTML=inside
            body.appendChild(div)
        }
        document.getElementById("add_2").addEventListener("click",click_again)

        function lasttime(){
            var div=document.createElement("div")
            var body=document.querySelector("#Bodystats_middlecontainer")
            div.setAttribute("id","last_time")
            var html=""
            html=`
                <textarea name="notes" id="notes" cols="60" rows="6"></textarea>
                <button>${"Create Note"}</button>
                 `
            div.innerHTML=html
            body.appendChild(div)
        }
        document.getElementById("add_3").addEventListener("click",lasttime)

        document.getElementById('Set__Goal').addEventListener('click',setFormData);
        function setFormData(e){
          e.prevent();
          //const arr
        }
        const arr=[1,2,3,4]
        localStorage.setItem('array',arr)
        console.log(localStorage.getItem('array'))