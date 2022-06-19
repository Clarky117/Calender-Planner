// plan

// when i visit the page
// put clock in header

function startClock() {
  setInterval(function () {
    // https://momentjs.com/docs/#/displaying/format/
    let currentTime = moment().format("DD-MM-YYYY HH:mm:ss");
    $("#current-time").text(currentTime);
  }, 1000);
};

function createTimeBlock(hour) {
  // create the container to return at the end of function
  let row = $("<div>");

  let currentHour = Number(moment().format("H"));

  // if timeblock is past 
  let isPast = hour < currentHour;
  // if timeblock is present
  let isPresent = hour === currentHour;
  // if timeblock is future
  let isFuture = hour > currentHour;

  // row from CSS
  let rowClass = 'row';

  // it has past class from css
  if (isPast) {
    rowClass = rowClass + ' past';
  };
  // it has present class from css
  if (isPresent) {
    rowClass = rowClass + ' present';
  };
  // it has future class from css
  if (isFuture) {
    rowClass = rowClass + ' future';
  };

  row.attr('class', rowClass);
  // row.attr('class', rowClass);

  // first column of row
  let timeColumn = $("<div>");
  timeColumn.attr('class', 'time-col col-2');

  timeColumn.text(hour + ":00");

  // second column of row
  let textareaColumn = $("<div >");
  textareaColumn.attr('class', 'textarea-col col-8 rowClass');
  
  let textarea = $('<textarea rows="3" cols="24">');
  textareaColumn.append(textarea);

  // existing details from local storage
  let existingSave = localStorage.getItem(hour);
  textarea.val(existingSave);

  // end column of row
  let buttonColumn = $("<div>");
  buttonColumn.attr('class', 'button-col col-2');

  let saveButton = $('<button class="btn btn-primary saveBtn">');  
  saveButton.text('Save');
  buttonColumn.append(saveButton);

  // adding 3 columns to each row
  row.append(timeColumn, textareaColumn, buttonColumn);

  // returns class of row from the function
  return row;
};

// header clock
$(function () {

  startClock();

  // creating the container to add content to
  let timeBlockContainer = $(".container");

  // see timeblock 9am to 5pm
  for (let hour = 9; hour < 18; hour++) {
    // for loop creates 8 hours
    let timeBlock = createTimeBlock(hour);
    // createTimeBlock returns a row, appending to container creates the 8
    timeBlockContainer.append(timeBlock);
  };
});

$(document).on('click', '.saveBtn', function (event) {

  // should see what i already have in local storage
  let buttonClicked = $(event.target);

  // traverse
  let textarea = buttonClicked.parent().prev().children();
  let timeColumn = buttonClicked.parent().prev().prev();
  
  let time = timeColumn.text();

  let hour = time.slice(0, -3);

  // user input
  let userInput = textarea.val();

  // save to local storage with key being hour of timeblock
  localStorage.setItem(hour, userInput);
});

