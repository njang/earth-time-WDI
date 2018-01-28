let ds = 0;
let max = 10;

const circleEmpty = () => {
	$('#decimalSeconds').append($('<ticker>', {html: '&#9898;&nbsp;'}));
}

const circleFill = () => {
	$('#decimalSeconds').append($('<ticker>', {html: '&#9899;&nbsp;'}));
}

const ticker = () => {
  let index = ds%max + 1;
  $('#decimalSeconds').html('&nbsp;');
  switch (index) {
  	case 1:
  		circleEmpty();circleFill();circleFill();circleFill();circleFill();
  		break;
  	case 2:
  		circleEmpty();circleEmpty();circleFill();circleFill();circleFill();
  		break;
  	case 3:
  		circleEmpty();circleEmpty();circleEmpty();circleFill();circleFill();
  		break;
  	case 4:
  		circleEmpty();circleEmpty();circleEmpty();circleEmpty();circleFill();
  		break;
  	case 5:
  		circleEmpty();circleEmpty();circleEmpty();circleEmpty();circleEmpty();
  		break;
  	case 6:
  		circleFill();circleEmpty();circleEmpty();circleEmpty();circleEmpty();
  		break;
  	case 7:
  		circleFill();circleFill();circleEmpty();circleEmpty();circleEmpty();
  		break;
  	case 8:
  		circleFill();circleFill();circleFill();circleEmpty();circleEmpty();
  		break;
  	case 9:
  		circleFill();circleFill();circleFill();circleFill();circleEmpty();
  		break;
  	case 10:
  		circleFill();circleFill();circleFill();circleFill();circleFill();
  		break;  		
  }

  // count up to 10 and reset
  ds < 9 ? ds++ : ds = 0
}
setInterval(ticker, 846);

