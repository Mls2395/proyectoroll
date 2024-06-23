document.addEventListener('DOMContentLoaded', function() {
    const createCharacterButton = document.getElementById('create-character-button');
    const viewCharactersButton = document.getElementById('view-characters-button');
    const joinGameButton = document.getElementById('join-game-button');
    const createGameButton = document.getElementById('create-game-button');

    const createCharacterModal = document.getElementById('create-character-modal');
    const viewCharactersModal = document.getElementById('view-characters-modal');
    const joinGameModal = document.getElementById('join-game-modal');
    const createGameModal = document.getElementById('create-game-modal');

    const closeCreateCharacter = document.getElementById('close-create-character');
    const closeViewCharacters = document.getElementById('close-view-characters');
    const closeJoinGame = document.getElementById('close-join-game');
    const closeCreateGame = document.getElementById('close-create-game');

    createCharacterButton.addEventListener('click', () => {
        createCharacterModal.style.display = 'block';
    });

    viewCharactersButton.addEventListener('click', () => {
        viewCharactersModal.style.display = 'block';
    });

    joinGameButton.addEventListener('click', () => {
        joinGameModal.style.display = 'block';
    });

    createGameButton.addEventListener('click', () => {
        createGameModal.style.display = 'block';
    });

    closeCreateCharacter.addEventListener('click', () => {
        createCharacterModal.style.display = 'none';
    });

    closeViewCharacters.addEventListener('click', () => {
        viewCharactersModal.style.display = 'none';
    });

    closeJoinGame.addEventListener('click', () => {
        joinGameModal.style.display = 'none';
    });

    closeCreateGame.addEventListener('click', () => {
        createGameModal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target === createCharacterModal) {
            createCharacterModal.style.display = 'none';
        }
        if (event.target === viewCharactersModal) {
            viewCharactersModal.style.display = 'none';
        }
        if (event.target === joinGameModal) {
            joinGameModal.style.display = 'none';
        }
        if (event.target === createGameModal) {
            createGameModal.style.display = 'none';
        }
    };

    // Funcionalidad para crear personaje
    const createCharacterForm = document.getElementById('create-character-form');
    createCharacterForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const character = {
            name: document.getElementById('character-name').value,
            race: document.getElementById('character-race').value,
            class: document.getElementById('character-class').value,
            gender: document.getElementById('character-gender').value,
            strength: parseInt(document.getElementById('character-strength').value),
            intelligence: parseInt(document.getElementById('character-intelligence').value),
            dexterity: parseInt(document.getElementById('character-dexterity').value),
            level: 1,
            experience: 0,
            abilities: [],
            equipment: [],
        };

        console.log('Personaje creado:', character);
        // Aquí puedes agregar la lógica para guardar el personaje en tu backend

        createCharacterModal.style.display = 'none';
    });

    // Funcionalidad para crear partida
    const createGameForm = document.getElementById('create-game-form');
    createGameForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const gameName = document.getElementById('game-name').value;
        console.log('Creando partida:', gameName);
        // Aquí puedes agregar la lógica para crear la partida en tu backend

        createGameModal.style.display = 'none';
    });
});


function addExperience(character, exp) {
    character.experience += exp;
    while (character.experience >= 500) {
        character.experience -= 500;
        character.level += 1;
        character.strength += 4;  // Ejemplo: incrementar la fuerza al subir de nivel
    }
    console.log('Personaje actualizado:', character);
}

// Ejemplo de uso
let myCharacter = {
    name: 'John',
    race: 'humano',
    class: 'guerrero',
    gender: 'masculino',
    strength: 10,
    intelligence: 5,
    dexterity: 7,
    level: 1,
    experience: 0,
    abilities: [],
    equipment: [],
};

addExperience(myCharacter, 600); // Añadir experiencia y verificar nivelación
