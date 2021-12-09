const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

//funzione che stampa le card
function printCards(arrayList, container) {
  container.innerHTML = '';
  for (let index = 0; index < arrayList.length; index++) {
    const object = arrayList[index];

    const layoutDiv = `
      <div class = "team-card">
        <div class= "card-image">
          <img src="img/${object.image}" alt="">
        </div>
        <div class = "card-text">
          <h3>${object.name}</h3>
          <p>${object.role}</p>
        </div>
      </div>`;

    container.innerHTML += layoutDiv;
  }
}

const container = document.querySelector('.team-container');
printCards(team, container);

