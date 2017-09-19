(function(exports) {

  function Face(data) {
    this.setFaceEmotions(data.scores);
  }

  Face.prototype.setFaceEmotions = function(scores) {
    this.happiness = scores.happiness;
    this.contempt = scores.contempt;
    this.anger = scores.anger;
    this.fear = scores.fear;
    this.disgust = scores.disgust;
    this.surprise = scores.surprise;
    this.neutral = scores.neutral;
    this.sadness = scores.sadness;
  }

 exports.Face = Face;

})(this);
