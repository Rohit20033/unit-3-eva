var menu = document.querySelector("#menu")
var coffeecount=document.querySelector("#coffee_count")



var coffeearr=JSON.parse(localStorage.getItem("coffee"))|| []
// console.log(coffeearr)
var count = coffeearr.map(function(ele){
     return ele.title
}).reduce(function(count,ele){
       return count=count+1
},0)
console.log(count)

coffeecount.innerText=count

async function check(){
    const url =`https://masai-mock-api.herokuapp.com/coffee/menu`
    var res = await fetch(url)
    var data = await res.json()
    // console.log(data.menu.data)
    append(data.menu.data)

}
check()

function append(coffees){
   
// console.log(coffees)
coffees.forEach(function(ele){
   
    var div = document.createElement("div")

    var img = document.createElement("img")
    img.src=ele.image

    var h1=document.createElement("h1")
    h1.innerText=ele.title

    var h3=document.createElement("h3")
    h3.innerText=ele.price
    var btn = document.createElement("button")
    btn.setAttribute("id",`add_to_bucket`)
    btn.innerText="Bucket"
    btn.addEventListener("click",function(){

        addtocart(ele)
    })

    function addtocart(ele){
        coffeearr.push(ele)
        console.log(coffeearr)
      localStorage.setItem("coffee",JSON.stringify(coffeearr))
    }


    div.append(img,h1,h3,btn)
    menu.append(div)



})
}