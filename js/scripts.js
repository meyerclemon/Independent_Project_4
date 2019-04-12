function PizzaOrder(total, options, size) {
  this.total = total;
  this.options=option;
  this.size =size;
}

PizzaOrder.prototype.calculateTotal = function(total) {
  size = sizePrice;
  toppings = [];
}

PizzaOrder.prototype.addSize = function(size) {



}
};
// Front
$(document).ready(function(){
  $("form#send-order").click(function(event){
    var size=$("#size");
    var topping=$("#option");
    var pizza = new PizzaOrder(size,topping);
    pizza.addSize(size);



var toppingsPrice = 0;
  $("input:checkbox[name=toppings]:checked").each(function() {
    toppingsCounter += 2;
  })
var sizePrice =  $("input:radio[name=size]:checked").val();

var sauce = $("#sauce").val();
}

};
});
