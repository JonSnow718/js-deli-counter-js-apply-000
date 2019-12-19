KatzDeliLine = []; 

function takeANumber(KatzDeliLine, name) {
  var position = KatzDeliLine.length+1
  KatzDeliLine.push(name)
  return "Welcome, " + name + "." + " You are number " + position +" in line."
}
var orderCount = 0;
function takeANumber2() {
  orderCount = orderCount + 1;
  return "Welcome your order number is" + orderCount 
}
console.log(takeANumber2())
console.log(takeANumber2())

function nowServing(KatzDeliLine) {
  var name;
  if(KatzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + KatzDeliLine.shift() + "."
  }
}

function currentLine(KatzDeliLine) {
  var nameArray = []
  if (KatzDeliLine.length === 0) {
    return "The line is currently empty."
  } 
   
   var myString = "The line is currently: "  
     for (let i = 0; i < KatzDeliLine.length; i++) {
       nameArray.push(`${i+1}. ${KatzDeliLine[i]}`)
     }
     
     return myString += nameArray.join(", ")
   }

