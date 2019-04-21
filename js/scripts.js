//Business End
function PizzaOrder(size, price) {
  this.size = size,
  this.toppings = [],
  this.price = 0
}
PizzaOrder.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}
PizzaOrder.prototype.addSize = function() {
  if (this.size === "small") {
    this.price += 10;
  }  else if(this.size === "medium" ) {
     this.price += 15;
  }  else if(this.size === "large") {
     this.price += 20;
  }  else {
    alert("Please select a size.");
  }
  for (var i = 0; i < this.toppings.length; i++) {
    this.price = this.price + 1;
  }
}

// Front
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var pieSize = $("#size").val();
    var toppingsArray = []; $("input:checkbox[name=topping]:checked").each(function () {
      toppingsArray.push($(this).val());
    })
    var newOrder = new PizzaOrder(pieSize);
    $('input[type=checkbox]:checked').each(function() {
      toppingsArray.push($(this).val());
    })
    for (var i = 0; i < toppingsArray.length; i++) {
      var toppingByEach = toppingsArray[i];
      newOrder.addToppings(toppingByEach)
    }
//end Toppings
    newOrder.addSize();
    newOrder.addToppings();
    $("#orderTotal").text("Excellent choice! Your total: " + "$" + newOrder.price.toFixed(2));
     });
   });
