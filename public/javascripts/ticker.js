<<<<<<< HEAD
let d = 0;
let max = 5;
const circleEmpty = $('<span>', {text: '&#9898;'});
const circleFill = $('<span>', {text: '&#9899;'});

const ticker = () => {
  // let d = new Date();
  // $('#demo').text(d.toLocaleTimeString());
  
  $('#decimalSeconds').text(d);
  let index = d%max+1;
  
  $('#decimalSeconds').text(index);

  for (let i = 0; i < max; i++) {
  	// $('#decimalSeconds').clear();
  	if (i < d) {
			$('#decimalSeconds').append(circleFill);
		} else {
			$('#decimalSeconds').append(circleEmpty);
		}
  }
  d++;
  debugger;
=======
let d = 1;
const ticker = () => {
  // let d = new Date();
  // $('#demo').text(d.toLocaleTimeString());
  $('#demo').text(d);
  d++;
>>>>>>> e418e34e560067270fb861e8458e4b356a240c03
}
setInterval(ticker ,846);
