var node = function(value){
  this.value = value;
  this.rightChild = null;
  this.leftChild = null;
}


var binarySearchTree = function(){
  this.root = null;
  this.size = 0;
}

binarySearchTree.prototype.insert = function(value) {
  if (this.root === null) {
    this.root = new node(value);
    this.size++;
  } else {
    var findAndInsert = function(currentNode) {
      if (value > currentNode.value) {
        if (currentNode.rightChild === null) {
          currentNode.rightChild = new node(value);
        } else {
          findAndInsert(currentNode.rightChild);
        }
      } else if (value < currentNode.value) {
        if (currentNode.leftChild === null) {
          currentNode.leftChild = new node(value);
        } else {
          findAndInsert(currentNode.leftChild);
        }
      }
    }
    findAndInsert(this.root);
    this.size++;
  }
}

binarySearchTree.prototype.search = function(target) {
  var check = false;

  var traverse = function(currentNode) {
    if (currentNode === null) {
      return;
    } else if (currentNode.value == target) {
      check = true;
      return;
    }

    if (target > currentNode.value) {
      traverse(currentNode.rightChild);
    } else if (target < currentNode.value) {
      traverse(currentNode.leftChild);
    }
  }

  traverse(this.root);
  return check;
}


binarySearchTree.prototype.delete = function(deleteValue) {
  var temp = [];

  var roundUp = function(currentNode) {
    if (currentNode === null) {
      return;
    }
    if (currentNode.value !== deleteValue) {
      temp.push(currentNode.value);
    }

    roundUp(currentNode.rightChild);
    roundUp(currentNode.leftChild);
  }

  roundUp(this.root);

  if (temp.length === this.size) {
    console.log('deleteValue does not exits');
    return;
  }

  this.root = null;
  this.size = 0;
  var toInsert;
  for (var i=0;i<temp.length;i++) {
    toInsert = temp[i];
    this.insert(toInsert);
  }

  console.log('deleteValue has been removed');
}





////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

var expect = require('chai').expect;

describe('binary search tree node', function(){

  describe('creation of a node', function(){
    it('should exist: ', function(){
      var test = new node();

      expect(test).to.not.equal(undefined);
    });
  });

  describe('encoding a value', function(){
    it('should store a value: ', function(){
      var test = new node();

      expect(test).to.have.property('value');
      expect(test.value).to.equal(undefined);

      test.value = 3;

      expect(test.value).to.equal(3);
    });
  });

  describe('pointing to another node', function(){
    it('should be able to point to another node: ', function(){
      var initial = new node(5);
      var rightTarget = new node(10);
      var leftTarget = new node(2);

      expect(initial).to.have.property('value');
      expect(initial).to.have.property('rightChild');
      expect(initial).to.have.property('leftChild');
      expect(initial.rightChild).to.equal(null);
      expect(initial.leftChild).to.equal(null);

      initial.rightChild = rightTarget;
      initial.leftChild = leftTarget;

      expect(initial.rightChild.value).to.equal(10);
      expect(initial.leftChild.value).to.equal(2);

    })
  })
})

describe('binary search tree class ', function(){

  describe('binarySearchTree properties', function(){
    it('should have properties root and size', function(){
      var test = new binarySearchTree();

      expect(test).to.have.property('root');
      expect(test).to.have.property('size');
      expect(test.root).to.equal(null);
      expect(test.size).to.equal(0);
    });
  });

  describe('binarySearchTree methods existence', function(){
    it('should have methods insert, search, and delete', function(){
      var test = new binarySearchTree();

      expect(test).to.respondTo('insert');
      expect(test).to.respondTo('search');
      expect(test).to.respondTo('delete');
    });
  });

  describe('binarySearchTree insert method', function(){
    it('should be able to insert a single node', function(){
      var test = new binarySearchTree();

      expect(test.root).to.equal(null);
      expect(test.size).to.equal(0);

      test.insert(5);

      expect(test.root.value).to.equal(5);
      expect(test.root.rightChild).to.equal(null);
      expect(test.root.leftChild).to.equal(null);
      expect(test.size).to.equal(1);
    });

    it('should be able to insert a second node', function(){
      var test = new binarySearchTree();

      expect(test.root).to.equal(null);
      expect(test.size).to.equal(0);

      test.insert(5);

      expect(test.root.value).to.equal(5);
      expect(test.root.rightChild).to.equal(null);
      expect(test.root.leftChild).to.equal(null);
      expect(test.size).to.equal(1);

      test.insert(10);

      expect(test.root.value).to.equal(5);
      expect(test.root.rightChild.value).to.equal(10);
      expect(test.root.leftChild).to.equal(null);
      expect(test.size).to.equal(2);
    });
  });

  describe('binarySearchTree search method', function(){
    it('should return true when the node exists', function(){
      var test = new binarySearchTree();
      test.insert(5);
      test.insert(10);

      expect(test.search(5)).to.equal(true);
    })

    it('should return false when the node does not exist', function(){
      var test = new binarySearchTree();
      test.insert(5);
      test.insert(10);

      expect(test.search(17)).to.equal(false);
    })
  })

  describe('binarySearchTree delete method', function(){
    it('should delete a node', function(){
      var test = new binarySearchTree();
      test.insert(5);
      test.insert(10);
      test.insert(2);
      test.insert(7);
      test.insert(1);

      expect(test.search(7)).to.equal(true);

      test.delete(7);

      expect(test.search(7)).to.equal(false);

    });

    it('should modify the size when deleting a node', function(){
      var test = new binarySearchTree();
      test.insert(5);
      test.insert(10);
      test.insert(2);
      test.insert(7);
      test.insert(1);

      expect(test.size).to.equal(5);

      test.delete(7);

      expect(test.size).to.equal(4);
    });

  });

})
