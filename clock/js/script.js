import $ from "jquery"

const colon = $(".colon"),
      hourNumber = $(".first"),
      minuteNumber = $(".second");
      
function clock(){
    const date = new Date(),
          hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
          minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    hourNumber[0].innerHTML = hours;
    minuteNumber[0].innerHTML = minutes;
}

setInterval(clock, 1000);
clock();

setInterval(() => {
    if(colon.animate({opacity: "show"}, 100)) {
        colon.animate({opacity: "hide"}, 100);
    } else {
        colon.animate({opacity: "show"}, 100);
    }
}, 1000)