function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesTime = moment().tz("America_Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "h:mm:ss:SS [<small>]A[</small>]"
    )}`;
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    parisTimeElement = parisElement.querySelector(".time");
    parisTime = moment().tz("Europe/paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = `${parisTime.format(
      "h:mm:ss:SS[<small>]A[</small>]"
    )}`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss:SS"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        `;
}

updateTime();
setInterval(updateTime, 1);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
