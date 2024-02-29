//Function for Search List
var search = document.getElementById("search");
var container = document.getElementById("collections");
var ProductItems = container.querySelectorAll("div")
search.addEventListener("keyup", function () {
    var enteredValue = this.value.toUpperCase();
    for (var i = 0; i < ProductItems.length; i++) {
        var productname = ProductItems[i].querySelector("h1").textContent.toUpperCase();
        if (productname.indexOf(enteredValue) < 0) {
            ProductItems[i].style.display = "none";
        } else {
            ProductItems[i].style.display = "block";
            console.log(ProductItems)
        }
    }
});

//Function for Ad
var Ad = document.getElementById("Ad")
var close = document.getElementById("close")
close.addEventListener("click", function () {
    Ad.style.display = "none"
})
