var coffeearr =JSON.parse(localStorage.getItem("coffee"))|| []
// console.log(cartitem)

var bucket = document.querySelector("#bucket")

coffeearr.forEach(function(ele,index){
    // console.log(ele)

    var div = document.createElement("div")

    var img = document.createElement("img")
    img.src=ele.image

    var h1=document.createElement("h1")
    h1.innerText=ele.title

    var h3=document.createElement("h3")
    h3.innerText=ele.price
    var btn = document.createElement("button")
    btn.setAttribute("id",`remove_coffee`)
    btn.innerText="Remove"
    btn.addEventListener("click",function(){

        deleitem(ele,index)
    })

    function deleitem(ele,index){
        coffeearr.splice(index,1)
            localStorage.setItem("coffee",JSON.stringify(coffeearr))
            window.location.reload()
    }

    div.append(img,h1,h3,btn)
    bucket.append(div)

})
var price = coffeearr.map(function(ele){
      return ele.price
}).reduce(function(sum,ele){
     return sum=sum+ele
},0)
console.log(price)

document.querySelector("#total_amount").innerText=price