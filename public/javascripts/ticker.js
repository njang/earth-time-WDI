let ds = 0;

// Define two types of tickers: empty circle and filled circle
const circleEmpty = () => {	$('#decimalSeconds').append($('<ticker>', {html: '&#9898;&nbsp;'})) }
const circleFill =  () => {	$('#decimalSeconds').append($('<ticker>', {html: '&#9899;&nbsp;'})) }

const ticker = () => {
  let index = ds % 10 + 1;
  $('#decimalSeconds').html('&nbsp;');
  // construct sequence of 5 circles
  for (let i = 0; i < 5; i++) {
  	((i < index && index < 5) || !((i >= index && index < 5) || (i < index - 5 && index >= 5))) ? circleEmpty() :circleFill();
  }

  // count up to 10 and reset
  ds < 9 ? ds++ : ds = 0
}

// Update every beat, which equals 846 milliseconds
setInterval(ticker, 846);
