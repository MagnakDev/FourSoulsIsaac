fetch('API/characters.json')
    .then(res => res.json())
    .then(data => {
        const btnContainer = document.getElementById('butons-cont');
        btnContainer.className = 'btnCont';
        const btnRand = document.getElementById('btn-rand');
        btnRand.className = 'btnRand';

        btnRand.addEventListener('click', function() {
            const randomChar = data.characters[Math.floor(Math.random() * data.characters.length)];
            console.log(randomChar.id);

            const BuscarCard = document.querySelector(`[data-id="${randomChar.id}"]`)
            if (BuscarCard) {
                BuscarCard.scrollIntoView({ behavior: 'smooth', block: 'center'});
                localStorage.removeItem('selectedChar')
                localStorage.setItem('randomChar', JSON.stringify(randomChar));
                setTimeout(() => {
                    window.location.href = 'card-char.html'
                }, 1000);
            }
        });
        
        

        const container = document.getElementById('cards-cont');
        container.className = 'cards-cont';

        data.characters.forEach(char => {
            // Numero de la card
            const numberContainer = document.createElement('div');
            numberContainer.className = 'numContainer';
            const numCard = document.createElement('h2');
            numCard.className = 'numCard';
            numCard.textContent = char.id 
            // Carta
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.id = char.id;
            // Imagen de la card
            const cardImg = document.createElement('img');
            cardImg.className = 'card-img';
            cardImg.src = char.image

            cardImg.addEventListener('click', function(){
                localStorage.setItem('selectedChar', JSON.stringify(char));
                window.location.href = 'card-char.html'
            })

            cardImg.addEventListener('mouseover', function() {
                cardImg.src = char.imageback;
            })
            cardImg.addEventListener('mouseout', function() {
                cardImg.src =  char.image;
            })

            // Crear hijos
            numberContainer.appendChild(numCard);
            card.appendChild(numberContainer);
            card.appendChild(cardImg)
            container.appendChild(card)
        })
    });
    