
function PizzaOrder(totalPrice, toppings, pieSize) {
  this.totalPrice = totalPrice;
  this.toppings=toppings;
  this.pieSize =pieSize;
}

PizzaOrder.prototype.addPieSize = function() {
  document.chooseSize.totalPrice.value = "";
  var totalPrice = 0;
  for (i=0;i<document.chooseSize.size.length;i++) {
    if (document.chooseSize.size[i].checked) {
      totalPrice = totalPrice + parseInt(document.chooseSize.size[i].value);
    }
  }
  document.chooseSize.totalPrice.value = totalPrice;
};

PizzaOrder.prototype.addToppings = function() {
  document.chooseToppings.totalPrice.value = "";
  var totalPrice = 0;
  for (i=0;i<document.chooseToppings.toppings.length;i++) {
    if (document.chooseToppings.choice[i].checked) {
      totalPrice = totalPrice + parseInt(document.chooseToppings.toppings[i].value);
    }
  }
  document.chooseToppings.totalPrice.value = totalPrice;
}



var totalPricePizza = function (pie) {
  $("totalPrice").val(pie.totalPrice);
  $("toppings").val(pie.toppings);
  $("pieSize").val(pie.pieSize);
}
// Front
$(document).ready(function(){
  $("form#pizza-order").click(function(event){
    event.preventDefault();
    var pieSize =  $("input:radio[name=pieSize]:checked").val();
    var toppings = $("input:checkbox[name=toppings]:checked").each(function() {
    //   toppings += 2;

    });
    var totalPrice = 0;
    var newPizza = new PizzaOrder(pieSize,toppings ,totalPrice);
    newPizza.addPieSize();
    newPizza.addToppings();
//
    $("#output").text("Your totalPrice is: $" + newPizza.totalPrice);
});
});
