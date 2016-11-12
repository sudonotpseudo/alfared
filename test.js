function placeOrder(tableNumber, isHappy){
	(isHappy)?orderSoylent(tableNumber):orderRedBull(tableNumber);
}

$(document).ready(function() {
  for(i = 1; i <=10; i++) {
     $('<button/>', {
        text: i, //set text 1 to 10
        id: 'btn_'+i,
        click: function () { alert("Order Placed"); placeOrder(1, true) }
    }).appendTo("body");
  }
});
