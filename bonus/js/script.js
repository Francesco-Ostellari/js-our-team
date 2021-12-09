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

const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputImage = document.getElementById('image');
const button = document.getElementById('addMemberButton');

button.addEventListener('click', function () {

  //prendiamo dati inseriti dall'utente
  const name = inputName.value;
  const role = inputRole.value;
  const image = inputImage.value;

  if (name.length > 0 && role.length > 0 && image.length > 0) {
    //se ha inserito effettivamente qualcosa
    const obj = {
      name: name,
      role: role,
      image: image
    };
    //pusho object nuovo
    team.push(obj);

    //aggiungo la card nel DOM
    printCards(team, container);
  } else {
    console.log('non hai inserito dei dati');
  }
});

