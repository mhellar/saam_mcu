//import wmata api
var WmataApi = require("wmata-api-node");

// Instantiate the api with your api key
var wmataApi = new WmataApi("e13626d03d8e4c03ac07f95541b3091b");

//create new johnny-five object and board
// var five = require("johnny-five"),
//   board,
//   lcd;
// board = new five.Board();

// board.on("ready", function() {
//   //create a new LCD object
//   lcd = new five.LCD({
//     // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
//     // Arduino pin # 12  11   5   4   3   2
//     pins: [12, 11, 5, 4, 3, 2],
//     backlight: 6,
//     rows: 2,
//     cols: 16
//   });

//poll the wmata api and write data to LCD. Station list: https://developer.wmata.com/docs/services/5476364f031f590f38092507/operations/5476364f031f5909e4fe3311
wmataApi
  .getTrainPredictions("all")
  .then(data => {
    console.log("Train positions", data.TrainPredictions);
    // lcd.clear().print(data.TrainPredictions);
  })
  .catch(err => {
    console.error(err);
  });
//   wmataApi
//     .getBusPositions("D2")
//     .then(data => {
//       console.log("Bus positions", data.BusPositions);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// });
