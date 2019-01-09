const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinoland
  let dinosaur
  let dinosaur2

  beforeEach(function () {
    dinoland = new Park ("Dinoland", 10)

    dinosaur = new Dinosaur('t-rex', 'carnivore', 60)
    dinosaur2 = new Dinosaur('sterodaptil', 'onnivore', 30)
    dinosaur3 = new Dinosaur('sterodaptil', 'onnivore', 20)


  })

  it('should have a name', function(){
    assert.strictEqual(dinoland.name, 'Dinoland')
  });

  it('should have a ticket price', function(){
    assert.strictEqual(dinoland.price, 10)
  });

  it('should have a collection of dinosaurs', function(){
    assert.strictEqual(dinoland.dinosaurs.length, 0)
  });

  it('should be able to add a dinosaur to its collection', function(){
    dinoland.add(dinosaur)
    dinoland.add(dinosaur2)

    assert.strictEqual(dinoland.dinosaurs.length, 2)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    dinoland.add(dinosaur)
    dinoland.add(dinosaur2)
    dinoland.remove(dinosaur2)
    assert.strictEqual(dinoland.dinosaurs.length, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    dinoland.add(dinosaur)
    dinoland.add(dinosaur2)
    assert.strictEqual(dinoland.findFamousDino(), dinosaur)
  });

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to remove all dinosaurs of a particular species', function(){
    dinoland.add(dinosaur)
    dinoland.add(dinosaur2)
    dinoland.add(dinosaur3)
    dinoland.removeBySpecies('sterodaptil')
    assert.strictEqual(dinoland.dinosaurs.length, 1)
  });

});
