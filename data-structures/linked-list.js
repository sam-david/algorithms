// listNode
var listNode = function(value){
  this.value = value;
  this.next = null;
}

// linkedList
var linkedList = function(){
  this.head = null;
  this.tail = null;
  this.listLength = 0;
}

// append
linkedList.prototype.append = function(value) {
  if (this.listLength === 0) {
    this.head = new listNode(value);
    this.tail = this.head;
  } else {
    this.tail.next = new listNode(value);
    this.tail = this.tail.next;
  }
  this.listLength++;
}

linkedList.prototype.insert = function(insertValue, searchValue) {
  var work = this.head;
  while (work !== null) {
    if (work.value === searchValue) {
      var reference = work.next;
      work.next = new listNode(insertValue);
      work.next.next = reference;
      if (reference === null) {
        // when searchValue is tail
        this.tail = work.next;
      }
      this.listLength++;
      return;
    }

    work = work.next;
  }
  console.log('searchValue ' + searchValue + 'not found');
}

// when linkedList contains 1 element, when linkedList has more than 1 but removing 0th element, when removing last element of list, when removing nodes that are not head or tail

linkedList.prototype.delete = function(location) {
  if (location === 0 && this.listLength === 0) {
    this.head = null;
    this.tail = null;
    this.listLength--;
    return;
  } else {
    this.head = this.head.next;
    this.listLength--;
    return;
  }

  var work = this.head;
  var counter = 0;

  while (work !== null) {
    if (counter === (location - 1) && work.next !== null && work.next == this.tail) {
      work.next = work.next.next;
      this.tail = work;
      this.listLength--;
      return;
    } else if (counter == (location - 1) && work.next !== null) {
      work.next = work.next.next;
      this.listLength--;
      return;
    }
    counter++;
    work = work.next;
  }
  console.log('Error: index ' + location + 'outside of range');
}

linkedList.prototype.delete = function (location) {

 // 1. linkedlist consists of single element, length === 0
 if (location === 0) {
   if (this.listLength === 0) {
     this.head = null;
     this.tail = null;
     this.listLength -= 1;
     return;
   } else {

     // 2. linkedlist has more than one element length 2+
     //    but still trying to remove 0th element
     this.head = this.head.next;
     this.listLength -= 1;
     return;
   }

 }

 var work = this.head;
 var counter = 0;
 while (work !== null) {
   if (counter === (location - 1) && work.next !== null && work.next === this.tail) {
     // 3. linked list removing last element of a linked list
     //    need to grab last reference
     work.next = work.next.next;
     this.tail = work;
     this.listLength -= 1;
     return;
   }

   if (counter === (location - 1) && work.next !== null) {
     // 4. neither head nor tail, list length > 1
     work.next = work.next.next;
     this.listLength -= 1;
   }

   counter++;
   work = work.next;
 }
 console.log("error index not found ", location);
}

linkedList.prototype.contains = function(value) {
  var work = this.head;
  while (work !== null) {
    if (work.value == value) {
      return true;
    }
    work = work.next;
  }
  return false;
}


////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

var expect = require('chai').expect;

describe('linked list node', function(){

  describe('creation of a node', function(){
    it('should exist: ', function(){
      var test = new listNode();

      expect(test).to.not.equal(undefined);
    });
  });

  describe('encoding a value', function(){
    it('should store a value: ', function(){
      var test = new listNode();

      expect(test).to.have.property('value');
      expect(test.value).to.equal(undefined);

      test.value = 3;

      expect(test.value).to.equal(3);
    });
  });

  describe('pointing to another node', function(){
    it('should be able to point to another node: ', function(){
      var initial = new listNode(5);
      var target = new listNode(10);

      expect(initial).to.have.property('value');
      expect(initial).to.have.property('next');
      expect(initial.next).to.equal(null);

      initial.next = target;

      expect(initial.next.value).to.equal(10);

    })
  })
})

describe('linkedList class ', function(){

  describe('linkedList properties', function(){
    it('should have properties head, tail, and listLength', function(){
      var test = new linkedList();

      expect(test).to.have.property('head');
      expect(test).to.have.property('tail');
      expect(test).to.have.property('listLength');
      expect(test.head).to.equal(null);
      expect(test.tail).to.equal(null);
      expect(test.listLength).to.equal(0);
    });
  });

  describe('linkedList methods existence', function(){
    it('should have methods append, insert, delete, contains', function(){
      var test = new linkedList();

      expect(test).to.respondTo('append');
      expect(test).to.respondTo('insert');
      expect(test).to.respondTo('delete');
      expect(test).to.respondTo('contains');
    });
  });

  describe('linkedList append method', function(){
    it('should be able to append a single node', function(){
      var test = new linkedList();

      expect(test.head).to.equal(null);
      expect(test.tail).to.equal(null);
      expect(test.listLength).to.equal(0);

      test.append(5);

      expect(test.head.value).to.equal(5);
      expect(test.tail.value).to.equal(5);
      expect(test.listLength).to.equal(1);
    });

    it('should be able to append a second node', function(){
      var test = new linkedList();

      expect(test.head).to.equal(null);
      expect(test.tail).to.equal(null);
      expect(test.listLength).to.equal(0);

      test.append(5);

      expect(test.head.value).to.equal(5);
      expect(test.tail.value).to.equal(5);
      expect(test.listLength).to.equal(1);

      test.append(10);

      expect(test.head.value).to.equal(5);
      expect(test.tail.value).to.equal(10);
      expect(test.listLength).to.equal(2);
    });
  });

  describe('linkedList insert method', function(){
    it('should be able to insert a node between two nodes', function(){
      var test = new linkedList();
      test.append(5);
      test.append(10);
      test.insert(13, 5);

      expect(test.head.value).to.equal(5);
      expect(test.head.next.value).to.equal(13);
      expect(test.head.next.next.value).to.equal(10);
      expect(test.tail.value).to.equal(10);
    })

    it('should modify the linkedList tail if the search value is the tail value', function(){
      var test = new linkedList();
      test.append(5);
      test.append(10);
      test.insert(17, 10);

      expect(test.head.value).to.equal(5);
      expect(test.head.next.value).to.equal(10);
      expect(test.head.next.next.value).to.equal(17);
      expect(test.tail.value).to.equal(17);
    })

    it('should not insert the value if the search value is not found', function(){
      var test = new linkedList();
      test.append(5);
      test.append(10);
      test.insert(12, 4);

      expect(test.head.value).to.equal(5);
      expect(test.head.next.value).to.equal(10);
      expect(test.tail.value).to.equal(10);
      expect(test.listLength).to.equal(2);
    })
  })

  describe('linkedList delete method', function(){
    it('should delete a node in the middle of the linked list', function(){
      var test = new linkedList();
      test.append(5);
      test.append(10);
      test.append(15);
      test.delete(1);

      expect(test.head.value).to.equal(5);
      expect(test.tail.value).to.equal(15);
      expect(test.head.next.value).to.equal(15);
      expect(test.listLength).to.equal(2);
    });

    it('should handle deleting the head value of the linked list', function(){
      var test = new linkedList();
      test.append(5);
      test.append(10);
      test.append(15);
      test.delete(0);

      expect(test.head.value).to.equal(10);
      expect(test.tail.value).to.equal(15);
      expect(test.head.next.value).to.equal(15);
      expect(test.listLength).to.equal(2);
    });

    it('should handle deleting the tail value of the linked list', function(){
      var test = new linkedList();
      test.append(5);
      test.append(10);
      test.append(15);
      test.delete(2);

      expect(test.head.value).to.equal(5);
      expect(test.tail.value).to.equal(10);
      expect(test.head.next.value).to.equal(10);
      expect(test.listLength).to.equal(2);
    });

    it('should not modify the linked list when attempting to delete a nonexistant node', function(){
      var test = new linkedList();
      test.append(5);
      test.append(10);
      test.append(15);
      test.delete(3);

      expect(test.head.value).to.equal(5);
      expect(test.tail.value).to.equal(15);
      expect(test.head.next.value).to.equal(10);
      expect(test.listLength).to.equal(3);
    });
  });

  describe('linkedList contains method', function(){
    it('should return true when the target value exists in the linked list', function(){
      var test = new linkedList();
      test.append(5);
      test.append(109);

      expect(test.contains(5)).to.equal(true);
    })

    it('should return false when the target value does not exist in the linked list', function(){
      var test = new linkedList();
      test.append(5);
      test.append(109);

      expect(test.contains(13)).to.equal(false);
    })
  })

})
