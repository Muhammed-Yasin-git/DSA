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

    DFS(start){
        let result = []
        let visited = {}
        let adjacencyList = this.adjacencyList
        function DFSHealper(vertex){
            if(!vertex)return null
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    DFSHealper(neighbour)
                }
            });
        }
        DFSHealper(start);
        return result
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

console.log(graph.DFS('A'));