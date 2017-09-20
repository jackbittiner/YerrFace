(function(exports){

  function setEmotionResults(face) {
    $('#Happiness1').text("Happiness score: " + (face.happiness.toFixed(2) * 100) + "%");
    // $('#sad').text("Sadness score: " + (face.sadness.toFixed(2) * 100) + "%");
    // $('#disgusted').text("Disgust score: " + (face.disgust.toFixed(2) * 100) + "%");
    // $('#surprised').text("Surprise score: " + (face.surprise.toFixed(2) * 100) + "%");
    // $('#angry').text("Anger score: " + (face.anger.toFixed(2) * 100) + "%");
    // $('#contempt').text("Contempt score: " + (face.contempt.toFixed(2) * 100) + "%");
    // $('#fear').text("Fear score: " + (face.fear.toFixed(2) * 100) + "%");
    // $('#neutral').text("Neutral score: " + (face.neutral.toFixed(2) * 100) + "%");
  }


exports.setEmotionResults = setEmotionResults;

})(this)
