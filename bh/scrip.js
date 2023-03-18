function OpeningCeremony(callback) {
    console.log("Let the games begin!");
    const scores = {red: 0, blue: 0, green: 0, yellow: 0};
    setTimeout(() => {
      Race100M(scores, callback);
    }, 1000);
  }
  
  function Race100M(scores, callback) {
    console.log("Race 100M begins!");
    const minTime = 10;
    const maxTime = 15;
    const results = {
      red: Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
      blue: Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
      green: Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
      yellow: Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
    };
    console.log("Race 100M results:", results);
    const sortedColors = Object.keys(results).sort((a, b) => results[a] - results[b]);
    scores[sortedColors[0]] += 50;
    scores[sortedColors[1]] += 25;
    console.log("Race 100M scores:", scores);
    setTimeout(() => {
      callback(scores, LongJump);
    }, 1000);
  }
  
  function LongJump(scores, callback) {
    console.log("Long Jump begins!");
    const winningColor = ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)];
    scores[winningColor] += 150;
    console.log(`${winningColor} wins Long Jump!`);
    console.log("Long Jump scores:", scores);
    setTimeout(() => {
      callback(scores, HighJump);
    }, 1000);
  }
  
  function HighJump(scores, callback) {
    console.log("High Jump begins!");
    const color = prompt("Which color secured the highest jump?");
    if (color === null || color === "" || !["red", "yellow", "green", "blue"].includes(color)) {
      console.log("Event was cancelled.");
      callback(scores, AwardCeremony);
      return;
    }
    scores[color] += 100;
    console.log(`${color} wins High Jump!`);
    console.log("High Jump scores:", scores);
    setTimeout(() => {
      callback(scores, AwardCeremony);
    }, 1000);
  }
  
  function AwardCeremony(scores) {
    console.log("Award Ceremony begins!");
    const sortedColors = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    console.log(`${sortedColors[0]} came first with ${scores[sortedColors[0]]} points.`);
    console.log(`${sortedColors[1]} came second with ${scores[sortedColors[1]]} points.`);
    console.log(`${sortedColors[2]} came third with ${scores[sortedColors[2]]} points.`);
  }
  
  OpeningCeremony((scores, callback) => callback(scores, Race100M));