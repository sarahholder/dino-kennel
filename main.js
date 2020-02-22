
const dinos = [
    {
      id: 'dino1',
      name: 'Rex',
      type: 'T Rex',
      age: 100,
      owner: 'Zoe',
      adventures: [],
      health: 100,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    },
    {
      id: 'dino2',
      name: 'Steve',
      type: 'Velociraptor',
      age: 100,
      owner: 'Mary',
      adventures: [],
      health: 1,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    },
    {
      id: 'dino3',
      name: 'Susan',
      type: 'Stegasaurus',
      age: 55,
      owner: 'Luke',
      adventures: [],
      health: 45,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    }
  ];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const closeSingleViewEvent = () => {
    printToDom('single-view', '');
    printDinos(dinos);
}

const viewSingleDino = () => {
    let domString = '';
    domString = `<button id="close-single-view" type="button" class="btn btn-outline-dark single-dino"><i class="far fa-times-circle"></i></button>`;
    printToDom('kennel', '' );
    printToDom('single-view', domString);
    document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent);
}

const singleDinoAddEvents = () => {
    const dinoPetButtons = document.getElementsByClassName('dino-photo');
    for (let i =0; i < dinoPetButtons.length; i++){
        dinoPetButtons[i].addEventListener('mouseleave', dinoHealth);
    }
};

const dinoHealth =(e)=>{
    const dinoId = e.target.closest('.card').id; 
    const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
 if(dinos[dinoPosition].health < 100){
 dinos[dinoPosition].health += 1;
    printDinos(dinos);
 }
}


const petEvents = () => {
    const dinoPetButtons = document.getElementsByClassName('dino-photo');
    for (let i =0; i < dinoPetButtons.length; i++){
        dinoPetButtons[i].addEventListener('mouseleave', dinoHealth);
    }
};



const printDinos = (dinoArray) => {
    let domString = '';
    for (let i =0; i < dinoArray.length; i++){
      domString += '<div class="col-4">';
      domString += `<div class="card" id="${dinoArray[i].id}">`;
      domString += `<img class="card-img-top dino-photo" src="${dinoArray[i].imageUrl}" alt="Card image cap">`;
      domString += '<div class="card-body">';
      domString += `  <h5 class="card-title">${dinoArray[i].name}</h5>`;
      domString += `  <p class="card-text">Health: ${dinoArray[i].health}</p>`;
      domString += `<button type="button" class="btn btn-outline-dark single-dino"><i class="far fa-eye"></i></button>`;
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    }
    printToDom('kennel', domString);
    singleDinoAddEvents();
    petEvents();
  };

const newDino = (e) => {
    e.preventDefault();
    const brandNewDino = {
        id: `dino${dinos.length +1}`,
        name: document.getElementById('dino-name').value,
        type: document.getElementById('dino-type').value,
        age: document.getElementById('dino-age').value,
        owner: document.getElementById('dino-owner').value,
        adventure: [],
        health: 100,
        imageUrl: document.getElementById('dino-image').value,
    };

    dinos.push(brandNewDino);
    document.getElementById('new-dino-form').reset();
    document.getElementById('collapseOne').classList.remove('show');
    printDinos(dinos);
};  

const init = () => {
    document.getElementById('submit-new-dino').addEventListener('click', newDino);
    printDinos(dinos);
};


init();
