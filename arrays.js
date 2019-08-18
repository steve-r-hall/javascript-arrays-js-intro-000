var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(bars, element) {
  var newarray = element, ...bars;
  return newarray
}

function destructivelyAddElementToBeginningOfArray(bars, element) {
  bars = element, ...bars;
  return bars
}


function addElementToEndOfArray(bars, element) {
  var newbars = ...bars, element;
  return newbars
}

function destructivelyAddElementToEndOfArray(bars, element) {
  bars = ...bars, element;
  return bars
}
