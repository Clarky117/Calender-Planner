
// plan

// when i visit the page
// put clock in header

function startClock() {
  setInterval(function () {

    let currentTime = moment().format("DD-MM-YYYY HH:mm:ss");

    $("#current-time").text(currentTime);

  }, 1000);
};

function createTimeBlock(hour) {

  let row = $("<div>");

  let currentHour = Number(moment().format("H"));

  // if timeblock is past, it has past class from css
  let isPast = hour < currentHour;

  // if timeblock is present, it has present class from css
  let isPresent = hour === currentHour;

  // if timeblock is future, it has future class from css
  let isFuture = hour > currentHour;

  let rowClass = 'row';

  if (isPast) {
    rowClass = rowClass + ' past';
  };

  if (isPresent) {
    rowClass = rowClass + ' present';
  };

  if (isFuture) {
    rowClass = rowClass + ' future';
  };

  row.attr('class', rowClass);

  let timeCol = $("<div>");
  timeCol.attr('class', 'time-col col-2');

  timeCol.text(hour + ":00");

  let textareaCol = $("<div >");

  textareaCol.attr('class', 'textarea-col col-8');
  let textarea = $('<textarea rows="3" cols="24">');
  textareaCol.append(textarea);

  // existing details from local storage
  let existingNotes = localStorage.getItem(hour);
  textarea.val(existingNotes);

  let buttonCol = $("<div>");
  buttonCol.attr('class', 'button-col col-2');

  let saveButton = $('<button class="btn btn-primary save-button">');
  saveButton.text('Save');

  buttonCol.append(saveButton);

  row.append(timeCol, textareaCol, buttonCol);

  return row;
};


// header clock
$(function () {

  startClock();

  let timeBlockContainer = $(".container");

  // see timeblock 9am to 5pm
  for (let hour = 9; hour < 18; hour++) {

    let timeBlock = createTimeBlock(hour);

    timeBlockContainer.append(timeBlock);
  };
});

$(document).on('click', '.save-button', function (event) {

  // should see what i already have in local storage
  let buttonClicked = $(event.target);

  let textarea = buttonClicked.parent().prev().children();

  let timeCol = buttonClicked.parent().prev().prev();

  let time = timeCol.text();

  let hour = time.slice(0, -3);

  // user input
  let userInput = textarea.val();

  // save to local storage with key being hour of timeblock
  localStorage.setItem(hour, userInput);
});