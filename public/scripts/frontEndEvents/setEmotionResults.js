(function(exports){

  function setEmotionResults(picture) {
    $('#happy').text("Happiness score: " + picture.happiness);
    $('#sad').text("Sadness score: " + picture.sadness);
    $('#disgusted').text("Disgust score: " + picture.disgust);
    $('#surprised').text("Surprise score: " + picture.surprise);
    $('#angry').text("Anger score: " + picture.anger);
    $('#contempt').text("Contempt score: " + picture.contempt);
    $('#fear').text("Fear score: " + picture.fear);
    $('#neutral').text("Neutral score: " + picture.neutral);
  }


exports.setEmotionResults = setEmotionResults;

})(this)
