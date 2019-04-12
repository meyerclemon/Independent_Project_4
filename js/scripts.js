function PizzaOrder(total, toppings, size) {
  this.total = total;
  this.toppings=toppings;
  this.size =size;
}


PizzaOrder.prototype.addSize = function() {
if (this.size == "small"){
  this.total += 10;
}
  else if(this.size == "medium" ){
  this.total += 15;
}
  else {
  this.total += 20;
}
};

var totalPizza = function (object) {
  $("total").val(object.total);
  $("toppings").val(object.toppings);
  $("size").val(object.size);
};
// Front
$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
alert("hi");
    event.preventDefault();
    var size =  $("input:radio[name=size]:checked").val();
    var toppings = $("input:checkbox[name=toppings]:checked").each(function() {
    toppings += 2;
  });

    var total = 0;
    var newPizza = new PizzaOrder(size,toppings,total);
    newPizza.addSize(size);
    newPizza.toppings(toppings);
    newPizza.total(total);

    $("#output").text("Your total is: $" + totalPizza);
});
});
