const waktuDetik = document.getElementById("waktu-detik");
const waktuMenit = document.getElementById("waktu-menit");
const waktuJam = document.getElementById("waktu-jam");

function getTime() {
  const now = new Date();
  const detik = now.getSeconds();
  const menit = now.getMinutes();
  const jam = now.getHours();
  const timeInterval = 6;

  console.log(detik);

  waktuDetik.style.transform = `rotate(${detik * timeInterval}deg)`;
  waktuMenit.style.transform = `rotate(${
    menit * timeInterval + detik / 10
  }deg)`;
  waktuJam.style.transform = `rotate(${jam * 30 + menit / 2}deg)`;
}

setInterval(getTime, 100);
