(function(exports) {


  function APIRequest(blob, picture) {
    $.ajax({
        url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?",
        beforeSend: function(xhrObj){
          xhrObj.setRequestHeader("Content-Type",'application/octet-stream');
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",'e01d4e40138540cfaa19b379aeded881');
        },
        type: 'POST',
        processData: false,
        contentType: 'application/octet-stream',
        data: blob,
     })
    .done(function(data) {picture.apiData = data})
    // this data is the info we need!!!
    .fail(function() {alert("error");});
  }


          function makeBlob (dataURL) {
              var BASE64_MARKER = ';base64,';
              if (dataURL.indexOf(BASE64_MARKER) == -1) {
                  var parts = dataURL.split(',');
                  var contentType = parts[0].split(':')[1];
                  var raw = decodeURIComponent(parts[1]);
                  return new Blob([raw], { type: contentType });
              }
              var parts = dataURL.split(BASE64_MARKER);
              var contentType = parts[0].split(':')[1];
              var raw = window.atob(parts[1]);
              var rawLength = raw.length;

              var uInt8Array = new Uint8Array(rawLength);

              for (var i = 0; i < rawLength; ++i) {
                  uInt8Array[i] = raw.charCodeAt(i);
              }

              return new Blob([uInt8Array], { type: contentType });
          }


    exports.APIRequest = APIRequest;
    exports.makeBlob = makeBlob;

})(this);
