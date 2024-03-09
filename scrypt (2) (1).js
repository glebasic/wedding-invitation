const countdown = document.getElementById('countdown');
const weddingDate = new Date('2024-11-15').getTime();

const updateCountdown = () => {
const currentDate = new Date().getTime();
const difference = weddingDate - currentDate;

const days = Math.floor(difference / (1000 * 60 * 60 * 24));
const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((difference % (1000 * 60)) / 1000);

countdown.innerHTML = `
<p>Свадьба через: ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд</p>
`;
}

setInterval(updateCountdown, 1000);
