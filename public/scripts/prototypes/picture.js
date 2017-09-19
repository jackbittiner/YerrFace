(function(exports) {

  function Picture(blob) {
    this.blob = blob;
    this.results = null;
    this.faces = [];
  }

  Picture.prototype.generateFaces = function() {
    var something = this.faces
    this.results.forEach(function(result) {
      something.push(new Face(result))
    })
  }

  exports.Picture = Picture;

})(this);
