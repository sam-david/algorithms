
var HashTable = function() {
  this.storage = [];
  this.buckets = 8;
  this.size = 0;
}

HashTable.prototype.hash = function(str) {
  var hash = 5381;
  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    console.log('hash ', hash, 'shift ', (hash << 5))
    hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
  }
  console.log('hash',hash,'buckets', this.buckets)
  return hash % this.buckets;
}

// could implement linked list here instead of array for O(1)
HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);

  if (this.storage[index] === undefined) {
    this.storage[index] = [];
    this.storage[index].push([key, value]);
    this.size++;
    this.resize();
  } else {
    var bucket = this.storage[index];

    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;
    this.resize();
  }
}

HashTable.prototype.delete = function(key) {
  var index = this.hash(key);

  if (this.storage[index] === undefined) {
    console.log('key not found');
    return;
  } else {
    var bucket = this.storage[index]

    for (var i=0; i<bucket.length; i++) {
      if (bucket[i][0] === key) {
        var temp = bucket[i][1];
        bucket.splice(i,1);
        this.size--;
        this.resize();
        return temp;
      }
    }
    console.log('key not found');
  }
}

HashTable.prototype.retrieve = function(key) {
  var index = this.hash(key);

  if (this.storage[index] === undefined) {
    console.log('key not found');
    return;
  } else {
    var bucket = this.storage[index]

    for (var i=0; i<bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    console.log('key not found');
  }
}

HashTable.prototype.resize = function() {
  var allElements = [];

  if (this.size > (0.75 * this.buckets)) {
    this.buckets *= 2;
    this.storage.forEach(function(bucket) {
      if (bucket !== undefined) {
        bucket.forEach(function(tuple) {
          allElements.push(tuple);
        })
      }
    })
    this.storage = []
    this.size = 0;
    var that = this;
    allElements.forEach(function(tuple) {
      that.insert(tuple[0], tuple[1])
    })

    console.log('HashTable has been doubled in size');
  } else if (this.buckets > 8 && this.size < (0.25 * this.buckets)) {
    this.buckets *= 0.5;
    this.storage.forEach(function(bucket) {
      if (bucket !== undefined) {
        bucket.forEach(function(tuple) {
          allElements.push(tuple);
        })
      }
    })
    this.storage = []
    this.size = 0;
    var that = this;
    allElements.forEach(function(tuple) {
      that.insert(tuple[0], tuple[1])
    })

    console.log('HashTable has been halved in size');
  }
}

hashTable = new HashTable
console.log(hashTable.hash('test'))

////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

// var expect = require('chai').expect;

// describe('hash table class ', function(){

//   describe('HashTable properties', function(){
//     it('should have properties storage, buckets, and size', function(){
//       var test = new HashTable();

//       expect(test).to.have.property('storage');
//       expect(test).to.have.property('buckets');
//       expect(test).to.have.property('size');
//       expect(test.storage.length).to.equal(0);
//       expect(test.size).to.equal(0);
//     });
//   });

//   describe('HashTable methods existence', function(){
//     it('should have methods hash, insert, delete, and retrieve', function(){
//       var test = new HashTable();

//       expect(test).to.respondTo('hash');
//       expect(test).to.respondTo('insert');
//       expect(test).to.respondTo('delete');
//       expect(test).to.respondTo('retrieve');
//     });
//   });

//   describe('HashTable hash method', function(){
//     it('should return an index from an inputted string', function(){
//       var test = new HashTable();

//       var expected = test.hash('hello');
//       expect(expected).to.equal(1);
//     })
//   });

//   describe('HashTable insert method', function(){
//     it('should be able to insert a key-value pair', function(){
//       var test = new HashTable();

//       expect(test.storage.length).to.equal(0);
//       expect(test.size).to.equal(0);

//       test.insert('hello', 5);

//       expect(test.size).to.equal(1);
//       expect(test.storage[1][0][0]).to.equal('hello');
//       expect(test.storage[1][0][1]).to.equal(5);
//     });

//     it('should be able to insert a second key-value pair', function(){
//       var test = new HashTable();

//       expect(test.storage.length).to.equal(0);
//       expect(test.size).to.equal(0);

//       test.insert('hello', 5);

//       expect(test.size).to.equal(1);
//       expect(test.storage[1][0][0]).to.equal('hello');
//       expect(test.storage[1][0][1]).to.equal(5);

//       test.insert('good', 10);

//       expect(test.size).to.equal(2);
//       expect(test.storage[6][0][0]).to.equal('good');
//       expect(test.storage[6][0][1]).to.equal(10);
//     });

//     it('should be able to handle collisions', function(){
//       var test = new HashTable();

//       expect(test.storage.length).to.equal(0);
//       expect(test.size).to.equal(0);

//       test.insert('good', 5);

//       expect(test.size).to.equal(1);
//       expect(test.storage[6][0][0]).to.equal('good');
//       expect(test.storage[6][0][1]).to.equal(5);

//       test.insert('back', 10);

//       expect(test.size).to.equal(2);
//       expect(test.storage[6][1][0]).to.equal('back');
//       expect(test.storage[6][1][1]).to.equal(10);
//     });
//   });

//   describe('HashTable delete method', function(){
//     it('should delete a key-value pair', function(){
//       var test = new HashTable();

//       expect(test.storage.length).to.equal(0);
//       expect(test.size).to.equal(0);

//       test.insert('hello', 5);

//       expect(test.size).to.equal(1);
//       expect(test.storage[1][0][0]).to.equal('hello');
//       expect(test.storage[1][0][1]).to.equal(5);

//       test.delete('hello');

//       expect(test.size).to.equal(0);
//       expect(test.storage[1][0]).to.equal(undefined);
//       expect(test.storage[1][0]).to.equal(undefined);

//     });

//     it('should not modify the size when deleting a key-value pair that does not exist', function(){
//       var test = new HashTable();
//       test.insert('hello', 5);
//       test.insert('good', 10);

//       expect(test.size).to.equal(2);

//       test.delete('great');

//       expect(test.size).to.equal(2);
//     });
//   });

//   describe('HashTable retrieve method', function(){
//     it('should return true for a key-value pair that exists', function(){
//       var test = new HashTable();

//       test.insert('hello', 5);

//       expect(test.retrieve('hello')).to.equal(5);


//     });

//     it('should return false for a key-value pair that does not exist', function(){
//       var test = new HashTable();

//       test.insert('hello', 5);

//       expect(test.retrieve('good')).to.equal(null);
//     });
//   });

//   describe('HashTable resize method', function(){
//     it('should double the number of buckets when the size exceeds 75% of buckets capacity', function(){
//       var test = new HashTable();

//       test.insert('hello', 5);
//       test.insert('good', 7);
//       test.insert('haha', 10);
//       test.insert('blah', 2);
//       test.insert('foo', 3);
//       test.insert('bar', 8);
//       test.insert('taste', 1);

//       expect(test.buckets).to.equal(16);


//     });

//     it('should halve the number of buckets when the size drops below 25% of bucket capacity', function(){
//       var test = new HashTable();

//       test.insert('hello', 5);
//       test.insert('good', 7);
//       test.insert('haha', 10);
//       test.insert('blah', 2);
//       test.insert('foo', 3);
//       test.insert('bar', 8);
//       test.insert('taste', 1);

//       expect(test.buckets).to.equal(16);

//       test.delete('hello');
//       test.delete('good');
//       test.delete('haha');
//       test.delete('blah');

//       expect(test.buckets).to.equal(8);

//     });
//   });

// })
