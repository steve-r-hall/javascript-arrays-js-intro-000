var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(bars, element) {
  var newarray = [element, ...bars];
  return newarray
}

function destructivelyAddElementToBeginningOfArray(bars, element) {
  bars.unshift(element);
  return bars
}


function addElementToEndOfArray(bars, element) {
  var newbars = [...bars, element];
  return newbars
}

function destructivelyAddElementToEndOfArray(bars, element) {
  bars.push(element);
  return bars
}

function accessElementInArray(bars,occurrence) {
  return bars(occurrence)
}

function destructivelyRemoveElementFromBeginningOfArray(bars) {
  bars.shift;
  return bars
}

function removeElementFromBeginningOfArray(bars) {
  var newbars = bars.slice(1)
  return newbars
}
