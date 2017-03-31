module.exports = (dartThrows) => {
  var score = 0;
  var bonusCount = 0;

  if(dartThrows.length === 0){
      score = -1;
    }

  for(var i = 0; i < dartThrows.length; i++){
    if(typeof(dartThrows[i]) !== 'number'){
      throw 'Whatcha smokin?!';
    }
    if(dartThrows[i] < 5){
      score += 10;
      bonusCount += 1;
    }
    if(dartThrows[i] >= 5 && dartThrows[i] <= 10){
      score += 5;
    }
    if(dartThrows[i] > 10){
      score += 0;
    }
    if(dartThrows.length === bonusCount){
      score += 100;
    }

  }
  return score;
};