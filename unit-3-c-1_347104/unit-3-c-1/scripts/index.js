//store the products array in localstorage as "products"
 

document.querySelector("#products").addEventListener("submit",Pumadata)
var arr=JSON.parse(localStorage.getItem("products"))|| []
function Pumadata(){
    
    event.preventDefault()
    var obj={

        type : products.type.value,
        desc : products.desc.value,
        image : products.image.value,
        price : products.price.value
    }
  
    // console.log(proobj)
    arr.push(obj)
    console.log(arr)
     localStorage.setItem("products",JSON.stringify(arr))
     document.querySelector("#input").innerText=""



    

}