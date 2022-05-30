const url = "https://masai-mock-api.herokuapp.com/coffee/menu"; // Destination
var data1;
fetch(url)
  .then(function (res) {
    // Readable + Stream( data in chunks )
    // Collect the stream
    return res.json(); // res.collect()
  })
  .then(function (res) {
    var data1 = res.menu.data;
    localStorage.setItem("coffee",JSON.stringify(data1))

  })
  .catch(function (err) {
    console.log(err);
  });



  var data = JSON.parse(localStorage.getItem("coffee"));

  console.log(data);

  var cartArr = JSON.parse(localStorage.getItem("bucket"))||[]
  data.map(function(el){
     var box = document.createElement('div');
     var image = document.createElement('img');
        image.src = el.image;
     var p = document.createElement("p");
     p.innerText = el.title
    
     var price = document.createElement("p");
     price.innerText = +el.price

     var addButton = document.createElement('button');
     addButton.innerText = "add to bucket";
     addButton.style.marginBottom = "20px";
     addButton.setAttribute("id","add_to_bucket");


     addButton.addEventListener("click",submitIt);
     
     
     function submitIt(){
        
        var cartCoffe = {}
         cartCoffe.image = image.src;
         cartCoffe.title = p.innerText;
         cartCoffe.price = price.innerText;

         cartArr.push(cartCoffe);
         localStorage.setItem("bucket",JSON.stringify(cartArr));
     }

     box.append(image,p,price, addButton);
     document.getElementById("menu").append(box);
  })


  var count = document.getElementById('coffee_count');
  count.innerText = cartArr.length






  



