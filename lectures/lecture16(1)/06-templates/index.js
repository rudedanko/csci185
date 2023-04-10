//The data:
const firstName = "Noah";
const pic = "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png"; 
const score = 300;

console.log(firstName);
console.log(pic);
console.log(score);

document.querySelector('main').innerHTML = `
    <section class="card" style="border: solid 5px pink;">
        <img src="${pic}" />
        <p>Welcome, ${firstName}. Your current high score is ${score}.</p>
    </section>
`;
