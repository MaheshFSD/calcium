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
            div.innerHTML=html
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