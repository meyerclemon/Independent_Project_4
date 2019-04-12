function PizzaOrder(total, options, size) {
  this.total = total;
  this.options=option;
  this.size =size;
}

PizzaOrder.prototype.addSize = function(size) {
if (this.size == small){
  this.total = 10;
  return this.total;
}else if(this.size == medium){
  var total = 15;
  return total;
}else if(this.size == large) {
  var total = 20;
}
};
// Front
$(document).ready(function(){
  $("form#send-order").click(function(event){
    var size=$("#size");
    var topping=$("#toppings");
    var pizza = new PizzaOrder(size,topping);
    pizza.addSize(size);

  $("input:checkbox[name=toppings]:checked").each(function() {
    toppings += 2;
    toppings.push($(this).val());
  });
var sizePrice =  $("input:radio[name=size]:checked").val();
}
var totalPizza=0;
    var totalPizza = new PizzaOrder (size,toppings,total);
    thePizza.sizeCheck();
    thePizza.priceCheck();
    $("#outPut").text("Your total is"+" $"+PizzaOrder);
});
});
