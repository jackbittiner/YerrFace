(function(exports) {

  function Face(data) {
    this.setFaceEmotions(data.scores);
    console.log(this);
  }

  Face.prototype.setFaceEmotions = function(scores) {
    for(var key in scores) {
      this.key = scores[key];
    }
  }

 exports.Face = Face;

})(this);
