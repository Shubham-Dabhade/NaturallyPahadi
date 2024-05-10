/* SmtpJS.com - v3.0.0 */

export const Email = {
    send: function (a) {
        return new Promise(function (resolve, reject) {
          a.nocache = Math.floor(1e6 * Math.random() + 1);
          a.Action = "Send";
          var t = JSON.stringify(a);
          Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (response) {
            resolve(response); // Use resolve to handle success
          });
        });
      },
      ajaxPost: function (e, n, t) {
        var xhr = Email.createCORSRequest("POST", e);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
          var response = xhr.responseText;
          if (t) t(response); // Call the callback function if provided
        };
        xhr.send(n);
        return xhr; // Return the XMLHttpRequest object
      },
      ajax: function (e, n) {
        var xhr = Email.createCORSRequest("GET", e);
        xhr.onload = function () {
          var response = xhr.responseText;
          if (n) n(response); // Call the callback function if provided
        };
        xhr.send();
        return xhr; // Return the XMLHttpRequest object
      },
  createCORSRequest: function (e, n) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(e, n, true);
    } 
    // else if (typeof XDomainRequest != "undefined") {
    //   // XDomainRequest for IE.
    //   xhr = new XDomainRequest();
    //   xhr.open(e, n);
    // } 
    else {
      // CORS not supported.
      xhr = null;
    }

    if (!xhr) {
      return;
    }

    return xhr;
  },
};
