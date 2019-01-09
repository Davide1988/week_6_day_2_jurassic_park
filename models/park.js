const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];

}


Park.prototype.add = function (dino) {
  this.dinosaurs.push(dino)
};

Park.prototype.remove = function (dino) {
    var index = this.dinosaurs.indexOf(dino);
    this.dinosaurs.splice(index,index)
};

Park.prototype.findFamousDino = function () {
  // for (var dinosaur of this.dinosaurs){
  var num =  Math.max(this.dinosaurs.guestsAttractedPerDay)
  console.log(num)
  }

  // var array = []
  // for (dinosaurs of this.dinosaurs){
  //   array.push(dinosaurs.guestsAttractedPerDay)
  // }
  // console.log(Math.max(...this.dinosaurs['guestsAttractedPerDay']));

Park.prototype.removeBySpecies = function (species) {

};

module.exports = Park;
