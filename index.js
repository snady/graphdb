var slide1 = "A database model where data is stored in vertices (nodes) and edges as opposed to tables. The equivalent of a field in a table would be a vertex in a graph, and data descriptors are edges. Individual nodes in the database store data, and the edges define the relationship between different nodes. Since nodes are all connected by edges and each node knows its connected nodes, there is no need for indices. Accessing data in graph databases is done through traversal, much like trees.";
var slide2 = "Ironically, relational databases aren't good at representing relationships between multiple data items (complex queries that may span across multiple tables). Relational Databases also have rigid schema, and query execution time increases with larger datasets and more joins. This problem has become apparent as data is growing and becoming more interconnected. To cope with this, many companies have switched to Graph Databases as an alternative.";
var slides = [slide1,slide2];
d3.select('slides')
.selectAll(".pure-g")
.data(slides)
.enter().append('div')
.text(function(d){
	return d; });