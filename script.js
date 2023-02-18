const validateForm = () => {
  var eventName = document.myForm.event.value;
  var locationEvent = document.myForm.location.value;
  if (allLetter(locationEvent)) {
    var dateOfEvent = document.myForm.date.value;
    if (dateValidation(dateOfEvent)) {
      alert("all data updated successfully");
      var desc = document.myForm.desc.value;
    }
  }
};

const allLetter = (inputtxt) => {
  var letters = /^[A-Za-z]+$/;
  if (inputtxt.match(letters)) {
    return true;
  } else {
    alert("Please Enter valid location");
    return false;
  }
};

const dateValidation = (date) => {
  // Matching the date through regular expression
  let operator = date.split("-");

  // Extract the string into month, date and year
  let datepart = [];
  if (operator.length > 1) {
    datepart = date.split("-");
  }
  let year = parseInt(datepart[0]);
  let month = parseInt(datepart[1]);
  let day = parseInt(datepart[2]);

  today = new Date();
  let dd = parseInt(today.getDate());
  let mm = parseInt(today.getMonth()) + 1;
  let yyyy = parseInt(today.getFullYear());

  if (yyyy < year) {
    return true;
  } else if (yyyy === year) {
    if (mm < month) {
      return true;
    } else if (mm === month) {
      if (dd < day) {
        return true;
      } else {
        alert("Wrong date input! Enter valid date");
        return false;
      }
    } else {
      alert("Wrong date input! Enter valid date");
      return false;
    }
  } else {
    alert("Wrong date input! Enter valid date");
    return false;
  }
};
