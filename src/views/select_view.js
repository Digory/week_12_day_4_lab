const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(selectContainer){
    this.selectContainer = selectContainer;
}

SelectView.prototype.bindEvents = function(){
    PubSub.subscribe('Munros:all-munros-ready', (event)=>{
        this.munrosData = event.detail;
        this.populateMenu();
    });
    this.selectContainer.addEventListener('change', (event)=>{
        const munroIndex = event.target.value;
        PubSub.publish('SelectView:munro-region-selected', munroIndex);
    });
}

SelectView.prototype.populateMenu = function(){
    const regionArray = []
    for(let munro of this.munrosData){
        if(!regionArray.includes(munro.region)){
            regionArray.push(munro.region)
        }
    }
    regionArray.forEach((region)=>{
        const option = document.createElement('option');
        option.textContent = region;
        option.value = region;
        this.selectContainer.appendChild(option);
    })

}

module.exports = SelectView;