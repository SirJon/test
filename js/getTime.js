(function(){
  `use strict`;

  const writeTime = (hourItem, minutesItem, secondsItem) => {  
    const Data = new Date();
    let hour = Data.getHours();
    let minutes = Data.getMinutes();
    let seconds = Data.getSeconds();    

    hourItem.textContent = hour;
    minutesItem.textContent = minutes;
    secondsItem.textContent = seconds;
  }

  const creatTime = () => {
    return (
      `<div class="time">
        <ul class="time__list">
          <li id="hour" class="time__item">00</li>
          <li class="time__item time__item--delimiter">:</li>
          <li id="minutes" class="time__item">00</li>
          <li class="time__item time__item--delimiter">:</li>
          <li id="seconds" class="time__item">00</li>
        </ul>
       </div>
      `
    );
  };

  const render = (container, position, text) => {
    container.insertAdjacentHTML(position, text);
  };
  const headerBlock = document.querySelector(".page-main");
  render(headerBlock, "beforeend", creatTime());  

  const hourItem = document.getElementById("hour");
  const minutesItem = document.getElementById("minutes");
  const secondsItem = document.getElementById("seconds");  

  setInterval(function(){
    writeTime(hourItem, minutesItem, secondsItem)
  }, 1000);
})();