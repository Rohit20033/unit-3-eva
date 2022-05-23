var products =JSON.parse(localStorage.getItem("products"))|| []

displaydata(products)

function displaydata(data){
    
    data.forEach(function(ele,index){
         
        var div = document.createElement("div")
        
        var h2= document.createElement("h2")
        h2.innerText=ele.type
        var h4=document.createElement("h4")
        h4.innerText=ele.price

        var p = document.createElement("p")
        p.innerText=ele.desc

        var img = document.createElement("img")
        img.src=ele.image

        var btn = document.createElement("button")
        btn.innerText="Remove"
        btn.addEventListener("click",function(){
            delitems(ele,index)
        })
        function delitems(ele,index){
            
              products.splice(index,1)
            localStorage.setItem("products",JSON.stringify(products))
            window.location.reload()
           
        }
        

        div.append(img,h2,h4,p,btn)
        document.querySelector("#all_products").append(div)


    })
}