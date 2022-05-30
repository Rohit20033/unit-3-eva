document.querySelector("#confirm").addEventListener("click",alertme)

function alertme(){
    event.preventDefault()
    var name = document.querySelector("#name").value
    var num =document.querySelector("#number").value
    var add = document.querySelector("#address").value
      var i=0
      alert(" Your order is accepted ")

     var id= setInterval(function(){
         if(i==13){
             clearInterval(id)
         }
       else if(i==3){
        alert("Your order is being Prepared ")
       }
       else if(i==8){
              alert("Your order is being packed")
       }
       else if(i==10){
        alert("Your order is out for delivery ")
        }

        else if(i==12){
            alert("Order delivered ")
            }
        
       console.log(i)
        i++
      },1000)

    //   setTimeout(function(){
           
    //     alert("Your order is out for delivery   ")

    //   },10000)

      
    //   setTimeout(function(){
           
    //     alert(" Order delivered")

    //   },12000)

}