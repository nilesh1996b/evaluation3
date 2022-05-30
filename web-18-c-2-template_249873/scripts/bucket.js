var cartArr = JSON.parse(localStorage.getItem("bucket"));
console.log(cartArr);
var priceCount = []
cartArr.map(function(el){
    var box = document.createElement('div');
    var image = document.createElement('img');
       image.src = el.image;
    var p = document.createElement("p");
    p.innerText = el.title
   
    var price = document.createElement("p");
    price.innerText = +el.price
    priceCount.push(price.innerText);
    box.append(image,p,price);
    document.getElementById("bucket").append(box);

 })

 var sum = 0;
 for(var i = 0; i<priceCount.length; i++)
 {
    sum +=(+priceCount[i])
 }

var total = document.getElementById("total_amount");
total.innerText = sum;

