    var ShoeColor = document.querySelector('#searchColor');
     var mySize = document.querySelector('#searchSize');
     var myBrand = document.querySelector('#searchBrand');
     var userDisplay = document.getElementById('displayInfo');
console.log(mySize.value);
     console.log(myBrand.value);
     console.log(ShoeColor.value);

    var theTemplateScript = document.getElementById("template").innerHTML;
    var theTemplate = Handlebars.compile(theTemplateScript);
      

 function myFunction() {
    "use strict";
     
     

     
     var shoeList = [
        {brand: 'Adidas', color : 'black', price : 2500, in_stock : 13, size: 3},
        {brand: 'Adidas', color : 'white', price : 2500, in_stock : 20, size: 5},
        {brand: 'Adidas', color : 'peach', price : 2500, in_stock : 50, size: 6},
        {brand: 'Adidas', color : 'red', price : 2500, in_stock : 5, size: 2},
        {brand: 'Puma', color : 'black', price : 1900, in_stock : 30, size: 5},
        {brand: 'Puma', color : 'white', price : 1900, in_stock : 10, size: 3},
        {brand: 'Puma', color : 'red', price : 1900, in_stock : 20, size: 6},
        {brand: 'Puma', color : 'peach', price : 1900, in_stock : 8, size: 2},
        {brand: 'Nike', color : 'black', price : 2100, in_stock : 60, size: 2},
        {brand: 'Nike', color : 'red', price : 2100, in_stock : 20, size: 6},
        {brand: 'Nike', color : 'peach', price : 2100, in_stock : 5, size: 5},
        {brand: 'Nike', color : 'white', price : 2100, in_stock : 22, size: 3}];
        

     
      var stock = [];
   
    for (var i = 0; i < shoeList.length; i++){

        if(shoeList[i].brand === myBrand.value || shoeList[i].color === ShoeColor.value || shoeList[i].size === Number(mySize.value)){
            stock.push(shoeList[i]);
        }
    }
     console.log(stock)
     var showMyStock = theTemplate({
            stock
                });
     userDisplay.innerHTML = showMyStock;
}; 



;