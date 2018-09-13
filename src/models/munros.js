const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function(){
    this.munrosData = [];
}

Munros.prototype.bindEvents = function(){
    this.getData();
    PubSub.subscribe('SelectView:munro-region-selected', (event)=>{
        const munroRegion = event.detail;
        const allMunrosWithThatRegion = this.findMunrosByRegion(munroRegion);
        console.log(allMunrosWithThatRegion);
        PubSub.publish('Munros:selected-munro-region-ready', allMunrosWithThatRegion);
    });
}

Munros.prototype.findMunrosByRegion = function(munroRegion){
    const munrosToReturn = [];
    for(let munro of this.munrosData){
        if(munro.region === munroRegion){
            munrosToReturn.push(munro);
        }
    }
    return munrosToReturn;
}

Munros.prototype.getData = function(){
    const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
    requestHelper.get()
    .then((data) =>{
      this.munrosData = data;
      PubSub.publish('Munros:all-munros-ready', this.munrosData);
    }) 
    .catch((err)=>{
      console.log(err);
    });
}



module.exports = Munros;