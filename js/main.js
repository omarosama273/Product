/*window.alert("welcome from first session js");
document.getElementById("dimo").innerHTML="web devolobment";
console.log("hallo from console");*/

var productNameInput = document.getElementById('productName')
var productPriceInput = document.getElementById('productPrice')
var productCategoryInput = document.getElementById('productCategory')
var productDescInput = document.getElementById('productdDesc')
var addBtn = document.getElementById('addBtn')
var inputs = document.getElementsByClassName('form-control')

var products = [];
if(  JSON.parse( localStorage.getItem('productList'))){
    products=  JSON.parse( localStorage.getItem('productList'))
}
displayData()

addBtn.onclick = function () {
    addProduct();
    displayData();
    resetForm()
   
}


function addProduct() {

    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    products.push(product)
    localStorage.setItem('productList',JSON.stringify(products))
}

function displayData() {
    var cartona = '';

    for (var i = 0; i < products.length; i++) {
        cartona += `<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button class='btn btn-outline-warning'>update</button></td>
        <td><button onclick="delateProduct(${i})" class='btn btn-outline-danger'>delate</button></td>
        </tr>`;
    }

    
    document.getElementById('tableBody').innerHTML = cartona
    
}
function delateProduct(index){
   products.splice(index,1);
   localStorage.setItem('productList',JSON.stringify(products))
   displayData()
}

function resetForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }

}
