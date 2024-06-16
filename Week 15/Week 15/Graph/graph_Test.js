class Graph{
    constructor(){
        this.adjesentList = {}
    }

    insert(vertex){
        if(!this.adjesentList[vertex])this.adjesentList[vertex] = []
    }

    addEdge(vertex1,vertex2){
        if(!this.adjesentList[vertex1] || !this.adjesentList[vertex2])return false
        this.adjesentList[vertex1].push(vertex2)
        this.adjesentList[vertex2].push(vertex1)
    }

    removeEdge(vertex1,vertex2){
        if(!this.adjesentList[vertex1] || !this.adjesentList[vertex2])return false
        this.adjesentList[vertex1] = this.adjesentList[vertex1].filter((item)=> item != vertex2)
        this.adjesentList[vertex2] = this.adjesentList[vertex2].filter((item)=> item != vertex1)
    }

    deleteVertex(vertex){
        
    }
}

const graph = new Graph()

graph.insert('A')
graph.insert('B')
graph.insert('C')
graph.insert('D')
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.addEdge('C','D')
graph.addEdge('D','A')

console.log(graph);

graph.removeEdge('A','D')

console.log(graph);