/*
    트리 (tree)
    - 트리는 여러 데이터 계층 구조 안에서 서로 연결된 형태를 나타낼 때 사용.
 */

class Node {
    constructor(content, children = []){
        this.content = content;
        this.children = children;
    }
}

const tree = new Node('Hello Tree', [
    new Node('I'),
    new Node('am'),
    new Node('a Node', [
        new Node('javascript!')
    ])
]);

function traverse(node){
    console.log(node.content);
    for(let child of node.children){
        traverse(child);
    }
};

traverse(tree);
