
var Vertex = function(id){
  this.value = id;
  this.edges = {};
}

// { value: 5, edges: {10: true}}

var Graph = function(){
  this.vertices = {};
  this.totalVertices = 0;
  this.totalEdges = 0;
}

Graph.prototype.addVertex = function(id) {
  if (this.vertices[id] === undefined) {
    var newVertex = new Vertex(id);
    this.vertices[id] = newVertex;
    this.totalVertices++;
  }
}

Graph.prototype.getVertex = function(id) {
  if (this.vertices[id] !== undefined){
    return this.vertices[id];
  } else {
    console.log('ID does not exist in graph');
  }
}

Graph.prototype.addEdge = function(id1, id2) {
  if (this.vertices[id1] !== undefined && this.vertices[id2] !== undefined) {
    if (this.vertices[id1].edges[id2] === undefined && this.vertices[id2].edges[id1] === undefined) {
      this.vertices[id1].edges[id2] = id2;
      this.vertices[id2].edges[id1] = id1;
      this.totalEdges++;
    } else {
      console.log('Edge already exists');
    }
  } else {
    console.log('A vertex is undefined')
  }
}

Graph.prototype.removeEdge = function(id1, id2) {
  if (this.vertices[id1] !== undefined && this.vertices[id2] !== undefined) {
    if (this.vertices[id1].edges[id2] !== undefined && this.vertices[id2].edges[id1] !== undefined) {
      delete this.vertices[id1].edges[id2];
      delete this.vertices[id2].edges[id1];
      this.totalEdges--;
    } else {
      console.log('Edge does not exist');
    }
  } else {
    console.log('A vertex is undefined')
  }
}

Graph.prototype.removeVertex = function(id) {
  if (this.vertices[id] !== undefined) {
    var toDelete = this.vertices[id];
    for (var edge in toDelete.edges) {
      this.removeEdge(id, edge);
    }
    delete this.vertices[id];
    this.totalVertices--;
  } else {
    console.log('ID does not exist')
  }
}

Graph.prototype.findNeighbors = function(id) {
  var neighbors = []
  if (this.vertices[id] !== undefined) {
    for (var edge in this.vertices[id].edges) {
      neighbors.push(this.vertices[edge])
    }
    return neighbors;
  } else {
    console.log('ID does not exist')
  }
}

Graph.prototype.forEachVertex = function(cb) {
  for (vertexKey in this.vertices) {
    cb(this.vertices[vertexKey]);
  }
}

Graph.prototype.forEachEdge = function(cb) {
  for (vertexKey in this.vertices) {
    var vertex = this.vertices[vertexKey];
    for (var edge in vertex.edges) {
      cb(edge, vertex.value);
    }
  }
}


////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

var expect = require('chai').expect;

describe('graph class', function(){

  describe('graph properties', function(){
    it('should have properties vertices, totalVertices, and totalEdges', function(){
      var test = new Graph();

      expect(test).to.have.property('vertices');
      expect(test).to.have.property('totalVertices');
      expect(test).to.have.property('totalEdges');
      expect(test.totalVertices).to.equal(0);
      expect(test.totalEdges).to.equal(0);
    })
  })

  describe('graph methods existence', function(){
    it('should have methods addVertex, getVertex, removeVertex, addEdge, removeEdge, findNeighbors, and forEachNode', function(){
      var test = new Graph();

      expect(test).to.respondTo('addVertex');
      expect(test).to.respondTo('getVertex');
      expect(test).to.respondTo('removeVertex');
      expect(test).to.respondTo('addEdge');
      expect(test).to.respondTo('removeEdge');
      expect(test).to.respondTo('findNeighbors');
      expect(test).to.respondTo('forEachNode');
    })
  })

  describe('graph addVertex method', function(){
    it('should add a single vertex', function(){
      var test = new Graph();
      expect(test.vertices['hello']).to.equal(undefined);

      test.addVertex('hello');
      expect(test.vertices['hello'].value).to.equal('hello');
      expect(test.totalVertices).to.equal(1);
    })

    it('should add two vertices', function(){
      var test = new Graph();
      expect(test.vertices['hello']).to.equal(undefined);

      test.addVertex('hello');
      expect(test.vertices['hello'].value).to.equal('hello');
      expect(test.totalVertices).to.equal(1);

      test.addVertex('good');
      expect(test.vertices['good'].value).to.equal('good');
      expect(test.totalVertices).to.equal(2);
    })

    it('should not increase the totalVertices count when the vertex already exists', function(){
      var test = new Graph();
      expect(test.vertices['hello']).to.equal(undefined);

      test.addVertex('hello');
      expect(test.vertices['hello'].value).to.equal('hello');
      expect(test.totalVertices).to.equal(1);

      test.addVertex('hello');
      expect(test.totalVertices).to.equal(1);
    })
  })

  describe('graph getVertex method', function(){
    it('should return the entire vertex of the queried ID', function(){
      var test = new Graph();

      test.addVertex('hello');
      var result = test.getVertex('hello');

      expect(result.value).to.equal('hello');
      expect(result).to.have.property('value');
      expect(result).to.have.property('edges');
    })

    it('should return undefined when the vertex ID doesn not exist', function(){
      var test = new Graph();

      var result = test.getVertex('notHere');

      expect(result).to.equal(undefined);
    })
  })

  describe('graph removeVertex method', function(){
    it('should remove a vertex when deleted', function(){
      var test = new Graph();

      test.addVertex('hello');
      expect(test.vertices['hello'].value).to.equal('hello');
      expect(test.totalVertices).to.equal(1);

      test.removeVertex('hello');
      expect(test.vertices['hello']).to.equal(undefined);
    })
  })

  describe('graph addEdge method', function(){
    it('should create an edge between two vertices', function(){
      var test = new Graph();

      test.addVertex('hello');
      test.addVertex('goodbye');

      test.addEdge('hello', 'goodbye');

      expect(test.vertices['hello'].edges['goodbye']).to.equal('goodbye');
      expect(test.vertices['goodbye'].edges['hello']).to.equal('hello');
    })

    it('should increase the edge counter', function(){
      var test = new Graph();

      test.addVertex('hello');
      test.addVertex('goodbye');

      test.addEdge('hello', 'goodbye');
      expect(test.totalEdges).to.equal(1);
    })
  })

  describe('graph removeEdge method', function(){
    it('should remove an edge between two vertices', function(){
      var test = new Graph();

      test.addVertex('hello');
      test.addVertex('goodbye');

      test.addEdge('hello', 'goodbye');

      expect(test.vertices['hello'].edges['goodbye']).to.equal('goodbye');
      expect(test.vertices['goodbye'].edges['hello']).to.equal('hello');

      test.removeEdge('hello', 'goodbye');
      expect(test.vertices['hello'].edges['goodbye']).to.equal(undefined);
      expect(test.vertices['goodbye'].edges['hello']).to.equal(undefined);
      expect(test.totalEdges).to.equal(0);
    })
    it('should not decrease the totalEdges counter when an edge does not exist between two vertices', function(){
      var test = new Graph();

      test.addVertex('hello');
      test.addVertex('goodbye');
      test.addVertex('blah');

      test.addEdge('hello', 'goodbye');

      expect(test.vertices['hello'].edges['goodbye']).to.equal('goodbye');
      expect(test.vertices['goodbye'].edges['hello']).to.equal('hello');

      test.removeEdge('hello', 'blah');
      expect(test.totalEdges).to.equal(1);
    })
  })

  describe('graph findNeighbors method', function(){
    it("should return an array of the neighbors' IDs", function(){
      var test = new Graph();

      test.addVertex('hello');
      test.addVertex('goodbye');
      test.addVertex('blah');
      test.addVertex('haha');

      test.addEdge('hello', 'goodbye');
      test.addEdge('hello', 'blah');

      expect(test.vertices['hello'].edges['goodbye']).to.equal('goodbye');
      expect(test.vertices['goodbye'].edges['hello']).to.equal('hello');
      expect(test.vertices['hello'].edges['blah']).to.equal('blah');
      expect(test.vertices['blah'].edges['hello']).to.equal('hello');

      var result = test.findNeighbors('hello');
      expect(result).to.include('goodbye');
      expect(result).to.include('blah');
    })

    it("should return an empty array when there's no edges", function(){
      var test = new Graph();

      test.addVertex('hello');
      test.addVertex('goodbye');
      test.addVertex('blah');
      test.addVertex('haha');

      test.addEdge('hello', 'goodbye');
      test.addEdge('hello', 'blah');

      var result = test.findNeighbors('haha');
      expect(result.length).to.equal(0);
    })
  })

  describe('graph forEachNode method', function(){
    it('should perform the callback on all of the nodes', function(){
      // insert test here
    })
  })

})
