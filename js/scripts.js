//Business End
function PizzaOrder(size, toppings, price) {
  this.size = size,
  this.toppings = toppings,
  this.price = 0
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
}

PizzaOrder.prototype.addToppings = function () {
   if (this.toppings.length === 5) {
    this.price += 10;
  } else if (this.toppings.length === 4) {
    this.price += 8;
  } else if (this.toppings.length === 3) {
    this.price += 6;
  } else if (this.toppings.length === 2) {
    this.price += 4;
  } else if (this.toppings.length === 1) {
    this.price += 2;
  } else {
    this.price = this.price;
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
    var newPizza = new PizzaOrder(pieSize, toppingsArray);
    newPizza.addSize();
    newPizza.addToppings();
    $("#orderTotal").text("Excellent choice! Your total: " + "$" + newPizza.price.toFixed(2));
     });
   });
