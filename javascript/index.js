function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTime = moment().tz("America_Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  )}`;

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  parisTimeElement = parisElement.querySelector(".time");
  parisTime = moment().tz("Europe/paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss:SS[<small>]A[</small>]"
  )}`;
}

updateTime();
setInterval(updateTime, 1);
