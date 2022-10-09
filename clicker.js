// step1 grab html element

let buttonEle=document.getElementById("clickbutton")

 let paragraphEle=document.getElementById("clicks")
    console.log(paragraphEle.textContent)


 // step2 writing callback function 
 let clickcounter= 0
 function clickIncrease(){
    clickcounter=clickcounter+1
    console.log(paragraphEle)
    paragraphEle.textContent="Total Number Of Clicks/Second"+clickcounter

 }

 //step3 add an event listener - parameter;fill in later argument; what youre writing in 
//-1 type of event it is //2 type of callback function needed to run 
 buttonEle.addEventListener("click",clickIncrease)

// per sec counter 
var button= document.getElementById("clickbutton");
setInterval(function(){
clickbutton.click()
   },10)

 




let buttonElem=document.getElementById("raygunbutton")
let rayclickspersec=document.getElementById ("Clicks-per-second")
let rayclicker=document.getElementById("raygun")
   console.log(paragraphEle.textContent)

   let numofclickspersec=0

   function raybuyer(){
      if(clickcounter>=15){
         clickcounter=clickcounter-15
         paragraphEle.textContent="total Number Of clicks"+clickcounter
         numofclickspersec+=15;
         rayclickspersec.textContent="Clicks-per-second"+numofclickspersec
         console.log(rayclickspersec.textContent)
      }else {
         alert("❗️Low On $$ From King Alien❗️")



    }
      }
          buttonElem.addEventListener("click",raybuyer)
             console.log(buttonElem.textContent)

             


             




   let boostElem=document.getElementById("boostclicker")
   let boostclickspersec=document.getElementById("Boost-Clicks-Per-Second")
   let boostclicker=document.getElementById("boost")
         console.log(paragraphEle.textContent)
         let numofboostspersec=0

   function boostbuyer(){
      if(clickcounter>=45){
         clickcounter=clickcounter-45
         paragraphEle.textContent="total Number Of clicks"+clickcounter

         numofclickspersec+=45;

            
         boostclickspersec.textContent="Boost-Clicks-Per-Second"+numofclickspersec
            console.log(boostclickspersec.textContent)
         } else {
            alert("❗️Low on $$ From King Alien❗️")
   
 }
    }
       boostElem.addEventListener("click",boostbuyer)
           console.log(boostElem.textContent)





   let armyElem=document.getElementById("armybutton")
   let armyclickspersec=document.getElementById("alien-army")
   let armyclicker=document.getElementById("army")
   console.log(paragraphEle.textContent)

   let numofarmypersec=0

   function alienarmybuyer(){
   if(clickcounter>=75){
      clickcounter=clickcounter-75
      paragraphEle.textContent="total Number Of clicks"+clickcounter
      numofclickspersec+=75;
      armyclickspersec.textContent="alien-army"+numofclickspersec
   console.log(armyclickspersec.textContent)
}else{
   alert("❗️Low On $$ From King Alien❗️")

 }
   }
      armyElem.addEventListener("click",alienarmybuyer)
         console.log(armyElem.textContent)




   let pinkplanetElem=document.getElementById("pinkplanetbutton")
   let pinkpclickspersec=document.getElementById("pink planet")
   let pinkplanetclicker=document.getElementById("pink-planet")
      console.log(paragraphEle.textContent)

   let numofpinkplanetpersec=0

   function pinkplanetbuyer(){
      if(clickcounter>=95){
         clickcounter=clickcounter-95
         paragraphEle.textContent="Total Number Of Clicks"+clickcounter
         numofclickspersec+=95;
         pinkpclickspersec.textContent="pink-planet"+numofclickspersec
         console.log(pinkpclickspersec.textContent)
      }else{
         alert("❗️Need More $$ From King Alien")

 }
     }
         pinkplanetElem.addEventListener("click",pinkplanetbuyer)
            console.log(pinkplanetElem.textContent)




   let purpleplanetElem=document.getElementById("purpleplanetbutton")
   let purpleclickspersec=document.getElementById("purple planet")
   let purpleplanetclicker=document.getElementById("purple-planet")
         console.log(paragraphEle.textContent)
             let numofpurpleplanetspersec=0

      function purpleplanetbuyer(){
          if(clickcounter>=1500){
            clickcounter=clickcounter-1500
            paragraphEle.textContent="purple planet"+clickcounter
            numofclickspersec+=1500;
            update()
            purpleclickspersec.textContent="purple-planet"+numofclickspersec
            console.log(purpleclickspersec.textContent)
         }else{
            alert("❗️Need More $$ From King Alien❗️")

 }
   }
     purpleplanetElem.addEventListener("click",purpleplanetbuyer)
      console.log(purpleplanetElem.textContent)



