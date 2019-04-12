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
}
  else if(this.size == medium ){
  var total = 15;
  return total;
}
  else if(this.size == large) {
  var total = 20;
}
};

var totalPizza = function (object) {
  $("total").val(object.total);
  $("toppings").val(object.toppings);
  $("size").val(object.size);
}
// Front
$(document).ready(function(){
  $("form#pizza-order").click(function(event){
    event.preventDefault();
    var size =  $("input:radio[name=size]:checked").val();
    var toppings = $("input:checkbox[name=toppings]:checked").each(function() {
      toppings += 2;
      toppings.push($(this).val());
    });
    var total = 0;
    var newPizza = new PizzaOrder(size,topping,total);
    newPizza.addSize(size);
    newPizza.toppings
    newPizza.total


    $("#output").text("Your total is: $" + newPizza.totalPizza);
});
});
