let d = 1;
const ticker = () => {
  // let d = new Date();
  // $('#demo').text(d.toLocaleTimeString());
  $('#demo').text(d);
  d++;
}
setInterval(ticker ,846);
