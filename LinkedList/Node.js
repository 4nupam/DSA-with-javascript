class node {
    constructor(value){
        this.value = value; // The value of the node
        this.next = null; // Pointer to the next node in the list
    }
}

class LinkedList {
    constructor() {
        this.head = null; // The first node in the list
        this.tail = null; // The last node in the list
        this.length = 0; // The number of nodes in the list
    }

    // Add methods for LinkedList here (e.g., add, remove, find, etc.)
    append(value){
const newNode  = new node(value);
if(!this.head){
this.head = newNode;
  
}else{
    let current = this.head;
   while(current.next){
    current = current.next;
   }
    current.next = newNode;
}
this.length++;
    }
}