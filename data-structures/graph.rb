class Vertex
  attr_accessor :edges
  attr_reader :value

  def initialize(id)
    @value = id
    @edges = Hash.new
  end
end

class Graph
  def initialize
    @vertices = Hash.new
    @total_verticies = 0
    @total_edges = 0
  end

  def add_vertex(id)
    if @vertices[id] === nil
      new_vertex = Vertex.new(id)
      @vertices[id] = new_vertex
      @total_verticies += 1
    end
  end

  def get_vertex(id)
    if @vertices[id] != nil
      @vertices[id]
    else
      p 'ID does not exist in graph'
    end
  end

  def add_edge(id1, id2)
    # binding.pry
    if @vertices[id1] != nil && @vertices[id2] != nil
      if @vertices[id1].edges[id2].nil? && @vertices[id2].edges[id1].nil?
        @vertices[id1].edges[id2] = id2
        @vertices[id2].edges[id1] = id1
        @total_edges += 1
      else
        p 'Edge already exists'
      end
    else
      p 'A vertex is nil'
    end
  end

  def remove_edge(id1, id2)
    if @vertices[id1] != nil && @vertices[id2] != nil
      if @vertices[id1].edges[id2] != nil && @vertices[id2].edges[id1] != nil
        @vertices[id1].edges.delete(id2)
        @vertices[id2].edges.delete(id1)
        @total_edges -= 1
      else
        p 'Edge does not exist'
      end
    else
      p 'Vertex is nil'
    end
  end

  def remove_vertex(id)
    if @vertices[id] != nil
      to_delete = @vertices[id]
      to_delete.edges.each do |edge, _v|
        remove_edge(id, edge)
      end
      @vertices.delete(id)
      @total_verticies -= 1
    else
      p 'ID does not exist'
    end
  end

  def find_neighbors(id)
    neighbors = Array.new
    if @vertices[id] != nil
      @vertices[id].edges.each do |edge, _v|
        neighbors.push(@vertices[edge])
      end
      neighbors
    else
      p 'ID does not exist'
    end
  end

  def for_each_vertex(proc)
    @vertices.each do |vertex_key, vertex|
      proc.call(vertex)
    end
  end

  def for_each_edge(proc)
    @vertices.each do |vertex_key, vertex|
      vertex.edges.each do |edge, _v|
        proc.call(edge, vertex.value)
      end
    end
  end
end


graph = Graph.new
graph.add_vertex(4)
graph.add_vertex(5)
graph.add_vertex(6)
# p graph.get_vertex(5)
# p graph.get_vertex(4)
graph.add_edge(4,5)
graph.add_edge(5,6)
# graph.remove_edge(4,5)
# graph.remove_vertex(5)
p graph.find_neighbors(5)
p graph

cool_proc = Proc.new do |vertex|
  p vertex.value
end

cooler_proc = Proc.new do |edge, val|
  p "edge#{edge}"
  p "val#{val}"
end


# graph.for_each_vertex(cool_proc)
graph.for_each_edge(cooler_proc)



# //////////////////////////////////////////////////////////
# ///////////////  DO NOT TOUCH TEST BELOW!!!  /////////////
# //////////////////////////////////////////////////////////

# require 'test/unit'

# class GraphClassTest < Test::Unit::TestCase
#   def test_Graph_properties_existence
#     test = Graph.new()

#     assert_respond_to(test, :vertices)
#     assert_respond_to(test, :totalVertices)
#     assert_respond_to(test, :totalEdges)
#     assert_equal(0, test.totalVertices)
#     assert_equal(0, test.totalEdges)
#   end

#   def test_Graph_methods_existence
#     test = Graph.new()

#     assert_respond_to(test, :addVertex)
#     assert_respond_to(test, :getVertex)
#     assert_respond_to(test, :removeVertex)
#     assert_respond_to(test, :addEdge)
#     assert_respond_to(test, :removeEdge)
#     assert_respond_to(test, :findNeighbors)
#     assert_respond_to(test, :forEachNode)
#   end

#   def test_Graph_addVertex_add_single_vertex
#     test = Graph.new()

#     assert_equal(undef, test.vertices['hello'])

#     test.addVertex('hello')
#     assert_equal('hello', test.vertices['hello'].value)
#     assert_equal(1, test.totalVertices)
#   end

#   def test_Graph_addVertex_add_two_vertices
#     test = Graph.new()

#     assert_equal(undef, test.vertices['hello'])

#     test.addVertex('hello')
#     assert_equal('hello', test.vertices['hello'].value)
#     assert_equal(1, test.totalVertices)

#     test.addVertex('good')
#     assert_equal('good', test.vertices['good'].value)
#     assert_equal(2, test.totalVertices)
#   end

#   def test_Graph_addVertex_should_not_increase_the_totalVertices_count_when_vertex_already_exists
#     test = Graph.new()

#     assert_equal(undef, test.vertices['hello'])

#     test.addVertex('hello')
#     assert_equal('hello', test.vertices['hello'].value)
#     assert_equal(1, test.totalVertices)

#     test.addVertex('hello')
#     assert_equal('hello', test.vertices['hello'].value)
#     assert_equal(1, test.totalVertices)
#   end

#   def test_Graph_getVertex_should_return_entire_vertex_of_queried_ID
#     test = Graph.new()

#     test.addVertex('hello')
#     result = test.getVertex('hello')

#     assert_equal('hello', result.value)
#     assert_respond_to(result, :value)
#     assert_respond_to(result, :edges)
#   end

#   def test_Graph_getVertex_should_return_undef_when_vertex_ID_does_not_exist
#     test = Graph.new()

#     result = test.getVertex('notHere')

#     assert_equal(undef, result)
#   end

#   def test_Graph_removeVertex_should_remove_vertex_when_deleted
#     test = Graph.new()

#     test.addVertex('hello')

#     assert_equal('hello', test.vertices['hello'].value)
#     assert_equal(1, test.totalVertices)

#     test.removeVertex('hello')
#     expect(undef, test.vertices['hello'])
#   end

#   def test_Graph_addEdge_should_create_edge_between_vertices
#     test = Graph.new()

#     test.addVertex('hello')
#     test.addVertex('goodbye')

#     test.addEdge('hello', 'goodbye')

#     assert_equal('goodbye', test.vertices['hello'].edges['goodbye'])
#     assert_equal('hello', test.vertices['goodbye'].edges['hello'])
#   end

#   def test_Graph_addEdge_should_increase_edge_counter
#     test = Graph.new()

#     test.addVertex('hello')
#     test.addVertex('goodbye')

#     test.addEdge('hello', 'goodbye')
#     assert_equal(1, test.totalEdges)
#   end

#   def test_Graph_removeEdge_should_remove_edge_between_vertices
#     test = Graph.new()

#     test.addVertex('hello')
#     test.addVertex('goodbye')
#     test.addEdge('hello', 'goodbye')

#     assert_equal('goodbye', test.vertices['hello'].edges['goodbye'])
#     assert_equal('hello', test.vertices['goodbye'].edges['hello'])

#     test.removeEdge('hello', 'goodbye')

#     assert_equal(undef, test.vertices['hello'].edges['goodbye'])
#     assert_equal(undef, test.vertices['goodbye'].edges['hello'])
#     assert_equal(0, test.totalEdges)
#   end

#   def test_Graph_removeEdge_should_not_decrease_totalEdges_counter_when_edge_does_not_exist
#     test = Graph.new()

#     test.addVertex('hello')
#     test.addVertex('goodbye')
#     test.addVertex('blah')

#     test.addEdge('hello', 'goodbye')

#     assert_equal('goodbye', test.vertices['hello'].edges['goodbye'])
#     assert_equal('goodbye', test.vertices['goodbye'].edges['hello'])

#     test.removeEdge('hello', 'blah')
#     assert_equal(1, test.totalEdges)
#   end

#   def test_Graph_findNeighbors_should_return_array_of_neighbor_IDs
#     test = Graph.new()

#     test.addVertex('hello');
#     test.addVertex('goodbye');
#     test.addVertex('blah');
#     test.addVertex('haha');

#     test.addEdge('hello', 'goodbye');
#     test.addEdge('hello', 'blah');

#     assert_equal('goodbye', test.vertices['hello'].edges['goodbye'])
#     assert_equal('hello', test.vertices['goodbye'].edges['hello'])
#     assert_equal('blah', test.vertices['hello'].edges['blah'])
#     assert_equal('hello', test.vertices['blah'].edges['hello'])

#     result = test.findNeighbors('hello')
#     assert_includes(result, 'goodbye')
#     assert_includes(result, 'blah')
#   end

#   def test_Graph_findNeighbors_should_return_empty_array_when_no_edges
#     test = Graph.new()

#     test.addVertex('hello');
#     test.addVertex('goodbye');
#     test.addVertex('blah');
#     test.addVertex('haha');

#     test.addEdge('hello', 'goodbye');
#     test.addEdge('hello', 'blah');

#     result = test.findNeighbors('haha')
#     assert_equal(0, result.length)
#   end

#   def test_Graph_forEachNode_method_should_perform_callback_on_all_nodes
#     # insert test here
#   end

# end
