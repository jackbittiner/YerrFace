(function(exports) {


  function APIRequest(imageURL) {
    console.log(imageURL);
    $.ajax({
      url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?",
      beforeSend: function(xhrObj){
        xhrObj.setRequestHeader("Content-Type","application/json");
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",'e01d4e40138540cfaa19b379aeded881');
      },
      type: "POST",
      data: `{'url': '${imageURL}'}`,
    })
    .done(function(data) {
      alert("success");
    })
    .fail(function() {
      alert("error");
    });
  }


    exports.APIRequest = APIRequest;

})(this);
