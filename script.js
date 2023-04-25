const menuBtn = document.getElementById('menu-btn-open');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

function navToggle() {
  menuBtn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

menuBtn.addEventListener('click', navToggle);

document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('.menu-item')) {
    menu.classList.remove('show-menu');
    menuBtn.classList.remove('open');
    overlay.classList.remove('overlay-show');
    document.body.classList.remove('stop-scrolling');
  }
});

// Speaker Data
const speakers = [
  {
    image: 'asset/pokimane.jpg',
    name: 'Imane Anys "Pokimane"',
    work: 'Twitch Streamer',
    about: 'Best known for her live streams on Twitch, broadcasting video game content, most notably in League of Legends and Fortnite, Martha is currently the most-followed female streamer on the platform.',
  },
  {
    image: 'asset/tekkz.jpg',
    name: 'Donovan Hunt "Tekkz"',
    work: 'FIFA Esport Player',
    about: 'Donovan Hunt aka Tekkz is the most winning FIFA player in the history of the esport. He has 11 titles in his 3 season career, more than any player. He has been with Fnatic for 2 years and has won 4 championships for the organization.',
  },
  {
    image: 'asset/pew.jpg',
    name: 'Felix Arvid "PewDiePie" ',
    work: 'Swedish Youtuber',
    about: 'Known for his Let\'s Play videos and comedic formatted videos, PewDiePie\'s popularity on Youtube and extensive media coverage have made him one of the most noted online personalities and content creators',
  },
  {
    image: 'asset/sasha.jpg',
    name: 'Sasha Hostyn',
    work: 'Professional Video Game Player',
    about: 'Also known by her username Scarlett, she is most well known for playing StarCraft II, and is the first woman to win a major StarCraft II tournament. She has also played Dota 2.',
  },
  {
    image: 'asset/tylers.jpg',
    name: 'Richard Tyler Blevins',
    work: 'American Twitch Gamer',
    about: 'Tyler is a twitch streamer, Youtuber and professional gamer. Blevins began streaming through participating in several esports teams in competitve play for Halo 3, and gradually picked up fame playing Fortnite Battle Royal in late 2017.',
  },
  {
    image: 'asset/li.jpg',
    name: 'Li, Xiao Meng "Liooon"',
    work: 'Professional Hearthstone Player',
    about: 'Better known by her in-game name Liooon, she is a Chinese professional Hearthstone player. She is the first woman to win the Hearthstone Grandmasters Global Finals and to win a BlizzCon Esports Tournament.',
  },
];

// Render Speakers Dynamically
const card = document.getElementById('speaker-card-container');

function displayCard(id) {
  card.innerHTML += `
    <div id="cards" class="speaker-info">
      <div class="speaker-img-container">
        <img src='${speakers[id].image}' />
      </div>
      <div>
        <h3>${speakers[id].name}</h3>
        <span>${speakers[id].work}</span>
        <hr class="dash" />
        <p>${speakers[id].about}</p>
      </div>
    </div>
  `;
}

for (let i = 0; i < speakers.length; i += 1) {
  displayCard(i);
}