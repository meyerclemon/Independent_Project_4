function PizzaOrder(toTotal, toppings, pieSize) {
  this.toTotal = toTotal;
  this.toppings=option;
  this.pieSize =pieSize;
}

PizzaOrder.prototype.addPieSize = function(pieSize) {
if (this.pieSize === "small"){
  this.toTotal += 10;

}
if(this.pieSize === "medium" ){
   this.toTotal += 15;

}
if(this.pieSize === "large") {
   this.toTotal += 20;
}
};

var totalPizza = function (pie) {
  $("toTotal").val(pie.toTotal);
  $("toppings").val(pie.toppings);
  $("pieSize").val(pie.pieSize);
}
// Front
$(document).ready(function(){
  $("form#pizza-order").click(function(event){
    event.preventDefault();
    var pieSize =  $("input:radio[name=pieSize]:checked").val();
    var toppings = $("input:checkbox[name=toppings]:checked").each(function() {
      toppings += 2;
      toppings.push($(this).val());
    });
    var toTotal = 0;
    var newPizza = new PizzaOrder(pieSize,topping,toTotal);
    newPizza.addPieSize(pieSize);
    newPizza.toppings
    newPizza.toTotal

    $("#output").text("Your total is: $" + newPizza.totalPizza);
});
});
