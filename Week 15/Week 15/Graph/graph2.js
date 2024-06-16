class Graph{
    constructor(){
        this.adjacencyList  = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])return false
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])return false
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((item)=>item != vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((item)=>item != vertex1)
    }

    deleteVertex(vertex){
        this.adjacencyList[vertex].forEach(element => {
            this.removeEdge(vertex, element)
        });
    }
}

const graph = new Graph();

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.addEdge('C', 'D')
graph.addEdge('D', 'A')

console.log(graph);

graph.deleteVertex('D')

console.log(graph);