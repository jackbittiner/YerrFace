/* Prototypes */
const APIRequest = require('../public/scripts/helpers/emotionRequest.js')

/* Test Libraries */
const chai = require('chai');
var expect = chai.expect;
const sinon = require('sinon');

describe('Emotion API request', function() {

  describe('the APIRequest function', function() {

    after(function() {
      jQuery.ajax.restore();
    });

    it('gives a picture attributes', function() {
      var picture = new Picture();
      sinon.stub(jQuery, 'ajax');
      APIRequest(blob, picture);
    });
  });
})
