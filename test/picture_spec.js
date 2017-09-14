const apiRequest = require('../public/scripts/helpers/emotionRequest.js')
const picture = require('../public/scripts/prototypes/picture.js')
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('picture', function() {

  describe('construct', function() {

    it('initializes with a stored image data', function() {
      var pic = new picture.Picture('Pretend Data');
      expect(pic.imageData).to.equal('Pretend Data');
    });

  });

});
