console.log('script sourced.');

$(document).ready(readyNow);

function readyNow() {
  console.log('document ready.');
  $('#submit').on('click', onClick);
}

var annualSpending = 0;

function onClick() {
//
  var $firstName = $('#first-name').val();
  var $lastName = $('#last-name').val();
  var $idNumber = $('#id-number').val();
  var $jobTitle = $('#job-title').val();
  var $annualSalary = $('#annual-salary').val();

//Appending the DOM
  var $tbody = $('tbody');
  $tbody.append('<tr><td>' + $firstName + '</td><td>' + $lastName + '</td><td>' + $idNumber + '</td><td>' + $jobTitle + '</td><td>' + $annualSalary + '</td></tr>');


//Clearing input fields
  $('#first-name').val('');
  $('#last-name').val('');
  $('#id-number').val('');
  $('#job-title').val('');
  $('#annual-salary').val('');

//Calculate monthly spending
  annualSpending += parseInt($annualSalary);
  var monthlySpending = annualSpending/12;
  console.log(monthlySpending);

//Append monthly spending to DOM
  $('#monthly-spending').text(monthlySpending);

}





/*
What I need to do:
- Make an object constructor Employee that will store the data for each employee
  - Should have properties firstName, lastName, idNumber, jobTitle, annualSalary
  - Store this in an array? Or maybe store each entrant in an array labeled 'employees' so we have all the data
  - What does the object do?
- Create function that will calculate monthly costs
  - = the sum of each Employee.annualSalary, /12
- Append to the DOM
  -




*/
