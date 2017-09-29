
// var dropdown = document.getElementById("myTemplate").innerHTML;
// var theTemplate = Handlebars.compile(dropdown);
//
//     function uniqueBrand() { //create a built in function to create the unique brand values.
//         "use strict";
//     var brands = [];
//     var BrandMap = {};
//
//     for (var i=0; i<shoeList.length;i++){ // loop through the shoeList which is the object list
//         var newBrand = shoeList[i];
//
//         if(BrandMap[newBrand.brand] === undefined){ //if the brandMap is undefined
//             BrandMap[newBrand.brand] = newBrand.brand; // take the value of the brand in the object list
//             brands.push(newBrand.brand); // then push the new brand values to the new object list.
//         }
//     }
//     document.querySelector(".searchBrand").innerHTML = theTemplate({brand: brands});
//
// }
//
//     uniqueBrand();
//
//
// function uniqueColor(){
//     "use strict";
//     var colors = [];
//     var ColorMap = {};
//
//     for(var i=0; i<shoeList.length; i++){
//         var newColor = shoeList[i];
//
//         if(ColorMap[newColor.color]=== undefined){
//             ColorMap[newColor.color]=newColor.color;
//             colors.push(newColor.color);
//         }
//     }
//     document.querySelector(".searchColor").innerHTML = theTemplate({color: colors});
// }
//     uniqueColor();
//
// function uniqueSize(){
//     "use strict";
//     var sizes = [];
//     var SizeMap = {};
//
//     for(var i=0; i<shoeList.length; i++){
//         var newSize = shoeList[i];
//
//         if(SizeMap[newSize.size]=== undefined){
//             SizeMap[newSize.size] = newSize.size;
//             sizes.push(newSize.size);
//         }
//     }
//     document.querySelector(".searchSize").innerHTML = theTemplate({size: sizes});
// }
//     uniqueSize();
//
//
//
// function myFunction() {
//     "use strict";
//     // get the document from html in order to link them to Javascript
//     var myBrand = document.querySelector(".searchBrand");
//     var ShoeColor = document.querySelector(".searchColor");
//     var mySize = document.querySelector(".searchSize");
//    var display = document.getElementById("userDisplay");
//
//
//      function theBrand(input) { // create a built in function that will return the value that will be equal to the input
//          return myBrand.value == input.brand;
//      }
//
//        function theColor(input) {
//          return ShoeColor.value == input.color;
//      }
//
//        function theSize(input) {
//          return mySize.value == input.size;
//      }
//
//       // then filter the functions
//      if(myBrand.value !==""){ // if the brand is selected
//       var stock  = shoeList.filter(theBrand); // cfreate new variable that will filter the shoelist with the brand
//        }
//
//          if(ShoeColor.value !== ""){ // if color is selected
//             if(myBrand.value !== "") { // and if brand is selected
//             var stock  = stock.filter(theColor);
//             } else {
//             var stock  = shoeList.filter(theColor);
//             }
//         }
//
//       if(mySize.value !== ""){
//         if (myBrand.value !== "" || ShoeColor.value !== "") {
//             var stock  = stock.filter(theSize);
//      }else{
//         var stock  = shoeList.filter(theSize);
//      }
//      }
//
//
//
//      var theTemplateScript = document.getElementById("template").innerHTML;
//     //console.log(stock);
//     var theTemplate = Handlebars.compile(theTemplateScript);
//          var showMyStock = theTemplate({
//            stock: stock
//                 });
//      display.innerHTML = showMyStock;
//     // after pressing the search button the dropdown must be cleared
//      if(stock === undefined){
//         document.getElementById("userDisplay").innerHTML =  ("PLEASE SELECT ATLEAST ONE OPTION FIRST!!!!");
//     }
//      mySize.value = "";
//      myBrand.value = "";
//      ShoeColor.value = "";
//
// }
//
//
//
// function myAddStock(){
//     "use strict";
//
//     var addBrand = document.getElementById("addingBrand");
//     var addColor = document.getElementById("addingColor");
//     var addSize = document.getElementById("addingSize");
//     var addStock = document.getElementById("addingStock");
//     var addPrice = document.getElementById("addingPrice");
//     var addDisplay = document.getElementById("showInfo");
//
// var  stockAdding = {};
//     createProperty('brand', addBrand.value.toLowerCase());
//     createProperty('color', addColor.value.toLowerCase());
//     createProperty('size', addSize.value);
//     createProperty('in_stock', addStock.value);
//     createProperty('price', addPrice.value);
//
// function createProperty(propertyName,propertyValue){
//   stockAdding [propertyName] = propertyValue;
// }
//     shoeList.push(stockAdding);
//
//
// var addMoreBrands = document.querySelector(".searchBrand");
//     var moreBrand = document.createElement("option");
//     moreBrand.text = addBrand.value.toLowerCase();
//     addMoreBrands.add(moreBrand);
//     uniqueBrand();
//
//  var addMoreColors = document.querySelector(".searchColor");
//  var moreColor = document.createElement("option");
//     moreColor.text = addColor.value.toLowerCase();
//     addMoreColors.add(moreColor);
//         uniqueColor();
//
//
//     var addMoreSizes = document.querySelector(".searchSize");
//     var moreSize = document.createElement("option");
//     moreSize.text = addSize.value;
//     addMoreSizes.add(moreSize);
//     uniqueSize();
//
//
//     addBrand.value = "";
//     addColor.value = "";
//     addSize.value = "";
//     addStock.value = "";
//     addPrice.value = "";
// }





$(function() {
        var addDisplay = document.getElementById("showInfo");

        var table = document.getElementById("template").innerHTML;
        var theTemplate = Handlebars.compile(table);

        // $("#searchStock").click(function(){

        // document.getElementById("searchStock").addEventListener("onclick", showAll)
        // function showAll(){
        $.ajax({
                url: 'http://localhost:3018/api/shoes',
                type: 'GET',
                success: function(data) {
                        addDisplay.innerHTML = theTemplate({
                                stock: data
                        })
                },
                error: function(error) {
                        // addDisplay.innerHTML = error
                        console.log(error);
                        alert('Stock loading error');
                }
        });

        //ajax add a shoe to the database
        $('#addBtn').on('click', function() {
                var brand = document.getElementById('addingBrand').value;
                var color = document.getElementById('addingColor').value;
                var size = document.getElementById('addingSize').value;
                var stock = document.getElementById('addingStock').value;
                var price = document.getElementById('addingPrice').value;
                console.log(price);
                var addDisplay = document.getElementById("showInfo");

                var table = document.getElementById("template").innerHTML;
                var theTemplate = Handlebars.compile(table);

                var Addshoes = {
                        Brand: brand,
                        Color: color,
                        Size: size,
                        InStock: stock,
                        Price: price
                }
                console.log(Addshoes);
                $.ajax({
                        type: "POST",
                        url: 'http://localhost:3018/api/shoes',
                        dataType: 'application/json',
                        data: Addshoes,
                        success: function(data) {
                                console.log(Addshoes);
                                addDisplay.innerHTML = theTemplate({
                                        stock: Addshoes.newShoesData
                                })
                        },
                        error: function(error) {
                                console.log(error);
                                alert('failed while adding stock');
                        }
                })
        })

        $('#showInfo').on('click', function(e){
                        alert('welcome');

                        var addDisplay = document.getElementById("showInfo").innerHTML;

                        var table = document.getElementById("template").innerHTML;
                        var theTemplate = Handlebars.compile(table);
                        var shoeId = e.target.value;

                        alert(shoeId);

                        $.ajax({
                                url: 'http://localhost:3018/api/shoes/sold/' + shoeId,
                                type: 'POST',
                                //dataType: 'application/json',
                                success: function(data) {
                                        addDisplay.innerHTML = theTemplate({
                                                stock: shoeId.data
                                        })
                                },
                                error: function(error) {
                                        alert(JSON.stringify(error))
                                }
                        })
                });
});
