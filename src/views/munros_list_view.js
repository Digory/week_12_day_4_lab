const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('../views/munro_view.js');

const MunrosListView = function(container){
    this.container = container;
}

MunrosListView.prototype.bindEvents = function(){
    PubSub.subscribe('Munros:selected-munro-region-ready', (event)=>{
        this.render(event.detail);
    })
    // PubSub.subscribe('Munros:all-munros-ready', (event)=>{
    //     const munrosData = event.detail;
    //     this.render(munrosData);
    // });
}

MunrosListView.prototype.render = function(munrosData){
    document.innerHTML = '';
    munrosData.forEach((munro)=>{
        const munroView = new MunroView(this.container, munro);
        munroView.render();
    });
}

module.exports = MunrosListView;