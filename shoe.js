    var ShoeColor = document.getElementById('colory');
     var mySize = document.getElementById('sizey');
     var myBrand = document.getElementById('brandy');
     var userDisplay = document.getElementById('displayInfo');
console.log(mySize.value);
     console.log(myBrand.value);
     console.log(ShoeColor.value);

  var shoeList = [
        {brand: 'Adidas', color : 'black', price : 2500, in_stock : 15, size: 1},
        {brand: 'Adidas', color : 'black', price : 2500, in_stock : 13, size: 3},
        {brand: 'Adidas', color : 'white', price : 2500, in_stock : 20, size: 5},
        {brand: 'Adidas', color : 'peach', price : 2500, in_stock : 50, size: 6},
        {brand: 'Adidas', color : 'red', price : 2500, in_stock : 5, size: 2},
        {brand: 'Adidas', color : 'red', price : 2500, in_stock : 5, size: 10},
        {brand: 'Adidas', color : 'white', price : 2500, in_stock : 5, size: 7},
        {brand: 'Adidas', color : 'peach', price : 2500, in_stock : 5, size: 4},
        {brand: 'Adidas', color : 'green', price : 2500, in_stock : 5, size: 9},
        {brand: 'Adidas', color : 'green', price : 2500, in_stock : 5, size: 8},

        {brand: 'Puma', color : 'black', price : 1900, in_stock : 65, size: 1},
        {brand: 'Puma', color : 'black', price : 1900, in_stock : 30, size: 5},
        {brand: 'Puma', color : 'white', price : 1900, in_stock : 10, size: 3},
        {brand: 'Puma', color : 'red',   price : 1900, in_stock : 20, size: 6},
        {brand: 'Puma', color : 'peach', price : 1900, in_stock : 8, size: 2},
        {brand: 'Puma', color : 'white', price : 1900, in_stock : 8, size: 4},
        {brand: 'Puma', color : 'peach', price : 1900, in_stock : 8, size: 8},
        {brand: 'Puma', color : 'green', price : 1900, in_stock : 8, size: 10},
        {brand: 'Puma', color : 'peach', price : 1900, in_stock : 8, size: 7},
        {brand: 'Puma', color : 'green', price : 1900, in_stock : 8, size: 9},

        {brand: 'Nike', color : 'black', price : 2100, in_stock : 33, size: 1},
        {brand: 'Nike', color : 'black', price : 2100, in_stock : 60, size: 2},
        {brand: 'Nike', color : 'red',   price : 2100,   in_stock : 20, size: 6},
        {brand: 'Nike', color : 'peach', price : 2100, in_stock : 5, size: 5},
        {brand: 'Nike', color : 'white', price : 2100, in_stock : 22, size: 10},
        {brand: 'Nike', color : 'red', price : 2100, in_stock : 22, size: 4},
        {brand: 'Nike', color : 'white', price : 2100, in_stock : 22, size: 8},
        {brand: 'Nike', color : 'green', price : 2100, in_stock : 22, size: 7},
        {brand: 'Nike', color : 'peach', price : 2100, in_stock : 22, size: 9},
        {brand: 'Nike', color : 'green', price : 2100, in_stock : 22, size: 3}];

    

 function myFunction() {
    "use strict";
   
     function theBrand(input) {
         return myBrand.value == input.brand;
     }
     
       function theColor(input) {
         return ShoeColor.value == input.color;
     }
     
       function theSize(input) {
         return mySize.value == input.size;
     }
     
     
     if(myBrand.value !==""){
      var list = shoeList.filter(theBrand);
       }
     
         if(ShoeColor.value !== ""){
            if(myBrand.value !== "") {
            var list = list.filter(theColor);
            } else {
            var list = shoeList.filter(theColor);
            }
        }
     
      if(mySize.value !== ""){
        if(myBrand.value !== "" || ShoeColor.value !== ""){
         var list = list.filter(theSize);
     }else{
        var list = shoeList.filter(theSize); 
     }
     }
     
     
     var theTemplateScript = document.getElementById("template").innerHTML;
    var theTemplate = Handlebars.compile(theTemplateScript);
         var showMyStock = theTemplate({
           list
                });
     userDisplay.innerHTML = showMyStock;
     mySize.value = "";
     myBrand.value = "";
     ShoeColor.value = "";

}

//function myAdd(){
//    var addBrand = document.getElementById("addingBrand");
//    var addColor = document.getElementById("addingColor");
//    var addSize = document.getElementById("addingSize");
//    var addStock = document.getElementById("addingStock");
//    var addPrice = document.getElementById("addingPrice");
//    var addDisplay = document.getElementById("showInfo");
//    var stock = [];
//
//    document.getElementById("addBtn").addEventListener("onclick",myAdd()
//
//
//
//      if(addBrand.value !=="" && addColor.value !=="" && addSize.value !=="" && addStock.value !==""){
//          {brand: addBrand.value, color: addColor.value, size: addSize.value, in_stock: addStock.value}
//          shoeList.push(stock);
//      } else{
//          alert("Enter a valid stock items");
//      }
//
//        var showTemplate = document.getElementById("mytemplate").innerHTML;
//        var templateScript = Handlebars.compile(showTemplate);
//    //    var showStock = templateScript({
//    //        
//    //    })
//
//        addDisplay.innerHTML = showStock;
//        if(addDisplay.style.display === "inline-block"){
//            addDisplay.style.display = "none";
//        }
//
//    }