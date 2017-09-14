const apiRequest = require('../src/emotionRequest.js')
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('Emotion API request', function() {

  describe('the APIRequest function', function() {

    after(function() {
      jQuery.ajax.restore();
    })

    it('should l;aksdnfkandsf', function() {
      sinon.stub(jQuery, 'ajax');
      APIRequest(blob, picture);
      expect();
    });
  });
})
