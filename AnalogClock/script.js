const handHour = document.querySelector(".hand-hour");
const handMinute = document.querySelector(".hand-minute");
const handSecond = document.querySelector(".hand-second");

const setData = () => {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegrees = (second / 60) * 360 + 90;
  handSecond.style.transform = `rotate(${secondDegrees}deg)`;

  const minute = now.getMinutes();
  const minuteDegrees = (minute / 60) * 360 + (second / 60) * 6 + 90;
  handMinute.style.transform = `rotate(${minuteDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (minute / 60) * 30 + 90;
  handHour.style.transform = `rotate(${hourDegrees}deg)`;
  // console.log(second, minute, hour);
};

setInterval(setData, 1000);
setData();
