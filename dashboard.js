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
