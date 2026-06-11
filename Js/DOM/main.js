let div = document.createElement("div")
div.setAttribute("class","container")
div.style.height="100vh";

document.body.append(div)


let images = ["./Images/one.jpg","/Images/two.jpg","/Images/three.jpg"]
let index = 0
div.style.backgroundImage = `url(${images[index]})`;
index++
setInterval(()=>{   
    div.style.backgroundImage = `url(${images[index]})`;
     index++;
    
    if(index>= images.length){
        index = 0
    }
    
        
  
},2000)

// let title = document.getElementsByClassName("tit")[0]
// title.innerText = "Hello Kausi"
// let title = document.getElementsByTagName("tit")[0]
// title.innerText = "Hello Kausi"
// let title = document.getElementById("title")
// title.innerText = "Hello Kausi"

// query selector
// let ele = document.querySelector(".tit")
// ele.textContent = "Welcome Kausi"

let ele = document.querySelector("#title")
// ele.textContent = "Welcome Kausi"

// const getValue = (e)=>{
//     ele.textContent = e.target.value
// }

let userName = document.getElementById("userName")

userName.addEventListener("change",()=>{
    ele.innerHTML = userName.value
})


let but = document.getElementsByTagName("button")[0]

but.addEventListener("click",()=>{
    but.innerHTML === "Click"?but.innerHTML="Clicked":but.innerHTML ="Click"
})

// console.log(userName);
