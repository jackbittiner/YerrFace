(function(exports){

  function setEmotionResults(picture) {
    $('#happy').text("Happiness score: " + (picture.happiness.toFixed(2) * 100) + "%");
    $('#sad').text("Sadness score: " + (picture.sadness.toFixed(2) * 100) + "%");
    $('#disgusted').text("Disgust score: " + (picture.disgust.toFixed(2) * 100) + "%");
    $('#surprised').text("Surprise score: " + (picture.surprise.toFixed(2) * 100) + "%");
    $('#angry').text("Anger score: " + (picture.anger.toFixed(2) * 100) + "%");
    $('#contempt').text("Contempt score: " + (picture.contempt.toFixed(2) * 100) + "%");
    $('#fear').text("Fear score: " + (picture.fear.toFixed(2) * 100) + "%");
    $('#neutral').text("Neutral score: " + (picture.neutral.toFixed(2) * 100) + "%");
  }


exports.setEmotionResults = setEmotionResults;

})(this)
