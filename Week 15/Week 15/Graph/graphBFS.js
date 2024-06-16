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

    BFS(start){
        let queue = []
        let result = []
        let visited = {}
        queue.push(start)
        while(queue.length){
            let vertex = queue.shift()
            if(!visited[vertex]){
                visited[vertex] = true
                result.push(vertex)
                this.adjacencyList[vertex].forEach(neighbour =>{
                if(!visited[neighbour]){
                    queue.push(neighbour)
                }
            })
            }
            
        }
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

console.log(graph.BFS('A'));