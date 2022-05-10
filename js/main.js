/*window.alert("welcome from first session js");
document.getElementById("dimo").innerHTML="web devolobment";
console.log("hallo from console");*/

var productNameInput = document.getElementById('productName')
var productPriceInput = document.getElementById('productPrice')
var productCategoryInput = document.getElementById('productCategory')
var productDescInput = document.getElementById('productdDesc')
var addBtn = document.getElementById('addBtn')
var products = [];

addBtn.onclick = function () {
    addProduct();
    displayData()
}


function addProduct(){

    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    products.push(product)
}

function displayData(){
    var cartona = '';

    for (var i = 0; i < products.length; i++) {
        cartona += '<tr><td>'+products[i].name+'</td><td>'+products[i].price+'</td><td>'+products[i].category+'</td><td>'+products[i].desc+'</td></tr>'
    }
   document.getElementById('tableBody').innerHTML=cartona
}