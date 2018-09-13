const PubSub = require('../helpers/pub_sub.js');

const MunroView = function(container, munro){
    this.container = container;
    this.munro = munro;
}

MunroView.prototype.render = function(){
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = this.munro.name;
    nameHeading.addEventListener('click', (event)=>{
        //while(true){
            nameHeading.classList.add('crazy-h3');
         //   nameHeading.classList.remove('crazy-h3');
        //}
        
    })
    this.container.appendChild(nameHeading);
    const unorderedList = document.createElement('ul');
    const meaning = document.createElement('li');
    meaning.textContent = "Meaning: "+this.munro.meaning;
    unorderedList.appendChild(meaning);
    const height = document.createElement('li');
    height.textContent = "Height: "+this.munro.height;
    unorderedList.appendChild(height);
    this.container.appendChild(unorderedList);
}

module.exports = MunroView;