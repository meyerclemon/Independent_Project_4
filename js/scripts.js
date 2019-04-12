function PizzaOrder(total, toppings, size) {
  this.total = total;
  this.toppings=toppings;
  this.size =size;
}

PizzaOrder.prototype.addSize = function() {
if (this.size === "small"){
  this.total += 10;
}
  else if(this.size === "medium" ){
  this.total += 15;
}
  else {
  this.total += 20;
}
};
function Tops() {
  if(toppings === 1) {
    total = 2;
  // } else {
  //   total =+ toppings;
  // }
}
var toppings = $("input:checkbox[name=toppings]:checked").each(function() {
});
var totalPizza = function (object) {
  $("total").val(object.total);
  $("toppings").val(object.toppings);
  $("size").val(object.size);

};
// Front
$(document).ready(function(){
  $("form#pizza-order").click(function(event){
    event.preventDefault();
    var size =  $("input:radio[name=size]:checked").val();
    Tops();
    var total = 0;
    var newPizza = new PizzaOrder(size,toppings,total);
    newPizza.addSize();
    this.toppings();
alert("almost there");
    $("#output").text("Your total is: $" + totalPizza.total);
});
});
