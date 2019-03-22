import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
// import $ from 'jquery';


$(document).ready(function() {
  $('#issueSearch').click(function() {
    const symptoms = $('#symptoms').val();
    $('#symptoms').val("");

    let request = new XMLHttpRequest();
    const url = `https://developer.betterdoctor.com/2016-03-01/&appid=API-KEY-GOES-HERE,`;

    request.onreadystatechange = function() {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $('.showInfo').text(`The humidity in ${symptoms} is ${response.main.  (("What ever represents symptoms in the api code"))  }%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});
