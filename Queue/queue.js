/*
    queue 만들기
 */

class Queue{
    constructor(){
        this.store  = [];
    }

    enqueue(element){
        this.store.push(element);
    }

    dequeue(){
        this.store.shift();
    }

    front(){
        return this.store[0]
    }

    back(){
        return this.store[this.store.length - 1];
    }

    empty(){
        return this.store.length > 0 ? false : true;
    }
    makeString(){
        let result = '';
        for(let val of this.store){
            result = result + ' ' + val + ' ';
        }
        return result;
    }
}

// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.enqueue(4);
// console.log(q.makeString());
// console.log(q.empty());


/*
    Priority Queue
 */


class PriorityQueue{
    constructor(){
        this.store = [];
    }

    toString(){
        let result = '';
        for(let idx in this.store){
            result += this.store[idx].code + ", " + this.store[idx].name+ '\n'
        }
        return result;
    }

    enqueue(element){
        this.store.push(element);
    }

    dequeue(){
        let entry = 0;
        for(let index in this.store){
            if(this.store[index].code < this.store[entry].code){
                entry = index;
            }
        }
        return this.store.splice(entry,1);
    }

    front(){
        return this.store[0];
    }

    back(){
        return this.store[this.store.length - 1 ];
    }

    empty(){
        if(this.store.length === 0){
            return true;
        } else{
            return false;
        }
    }
}

class Patient{
    constructor(name, code){
        this.name = name;
        this.code = code;
    }
}

const pq = new PriorityQueue();
const a = new Patient('donguk', 4);
pq.enqueue(a);
const b = new Patient('inwu', 3);
pq.enqueue(b);
const c = new Patient('patient', 1)
pq.enqueue(c);

const d = new Patient('patient2', 8)
pq.enqueue(d);


console.log(pq.dequeue());


/*
    Queue 두 개로 Stack 구현하기
 */

class Stack{
    constructor(){
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push(element){
        if(this.q1.empty()){
            this.q1.enqueue(element);
        } else {
            while(!this.q1.empty()){
                this.q2.enqueue(this.q1.dequeue());
            }
            this.q1.enqueue(element);
            while(!this.q2.empty()){
                this.q1.enqueue(this.q2.dequeue())
            }
        }
    }

    pop(){
       return this.q1.dequeue();
    }
}


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());//4
console.log(stack.pop());//3
console.log(stack.pop());//2
console.log(stack.pop());//1



