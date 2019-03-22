import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
// import $ from 'jquery';


$(document).ready(function() {
  $('#issueSearch').click(function() {
    const symptoms = $('#symptoms').val();
    $('#symptoms').val("");

  

   const getElements = function(response) {
      $('.showInfo').text(`The humidity in ${symptoms} is ${response.main.  (("What ever represents symptoms in the api code"))  }%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});
