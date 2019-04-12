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
if (this.size == small){
  this.total = 10;
  return this.total;
}else if(this.size == medium){
  var price = 15;
  return price;
}else if(this.size == large) {
  var price = 20;
}

}

PizzaOrder.prototype.addToppings = function() {

}


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
