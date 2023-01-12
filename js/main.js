  var list = document.querySelector('.list');
  // var img = document.querySelector('img');
 var x = ''

  var cars = [
    {
         id: 1,
         name: 'Damas',
         marka: 'SHEVROLET',
         img: './img/damaswhite.jpg',
         sum: '75 928 000 UZS'
    },
    {
        id: 2,
        name: 'Matiz',
        marka: 'SHEVROLET',
        img: './img/matiz1.jpeg',
        sum: '40 000 000 UZS'
    },
    {
        id: 3,
        name: 'Spark',
        marka: 'SHEVROLET',
        img: './img/sparkwhite.jpg' ,
        sum: '75 706 000 UZS'

    },
    {
        id: 4,
        name: 'Cobalt',
        marka: 'SHEVROLET',
        img: './img/cobaltwhite.jpg',
        sum: '97 083 000 UZS'

    },
    {
        id: 5,
        name: 'Lacetti',
        marka: 'SHEVROLET',
        img: './img/lacettiwhite.jpg',
        sum: '115 607 000 UZS'
    },
    {
        id: 6,
        name: 'Malibu 2 Turbo',
        marka: 'SHEVROLET',
        img: './img/malibuwhite2.jpg', 
        sum: '311 124 067 UZS'
      }
    ];
    
  for(var i of cars){
    var newLi = document.createElement('li')
    var newImg = document.createElement('img')
    var newH4 = document.createElement('h4')
    var newB = document.createElement('b')
    var newI = document.createElement('i')
    var newSpan = document.createElement('span')
    newImg.setAttribute('src', i.img)
    newH4.textContent = i.name;
    newB.textContent = i.marka;
    newI.textContent = i.sum;
    newSpan.textContent = i.id;
    newLi.appendChild(newImg);
    newLi.appendChild(newH4);
    newLi.appendChild(newB);
    newLi.appendChild(newI);
    newLi.appendChild(newSpan);
    newLi.classList.add('items')
    list.appendChild(newLi)
    // list.appendChild(newH4)
    // list.appendChild(newB)
    
  }





