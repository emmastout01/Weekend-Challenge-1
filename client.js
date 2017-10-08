console.log('script sourced.');

$(document).ready(readyNow);

function readyNow() {
  console.log('document ready.');
  $('#submit').on('click', onClick);
  removeEmployee();
}

function onClick() {
  var $firstName = $('#first-name').val();
  var $lastName = $('#last-name').val();
  var $idNumber = $('#id-number').val();
  var $jobTitle = $('#job-title').val();
  var $annualSalary = $('#annual-salary').val();

//Appending the DOM
  var $tbody = $('tbody');
  $tbody.prepend('<tr><td>' + $firstName + '</td><td>' + $lastName +
  '</td><td>' +  $idNumber + '</td><td>' + $jobTitle + '</td><td>' +
  $annualSalary +'</td><td><button id ="delete-employee">Delete Employee</button></td></tr>');

//Clearing input fields
  $('#first-name').val('');
  $('#last-name').val('');
  $('#id-number').val('');
  $('#job-title').val('');
  $('#annual-salary').val('');

//Calculate monthly spending
  var annualSpending = 0;
  annualSpending += parseInt($annualSalary);
  var monthlySpending = annualSpending/12;

//Append monthly spending to DOM
  $('#monthly-spending').text(monthlySpending.toFixed(2));

}

//Removing employee in hard mode
function removeEmployee() {
  $('tbody').on('click', '#delete-employee', function() {
    console.log('delete employee' + $('#first-name').val());
    $(this).parent().parent().remove();
  });
}



/*
What I need to do:





*/
