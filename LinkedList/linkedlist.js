class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;  
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first node
    insertFirstNode(data) {
        this.head = new Node(data, this.head);
    }

    //insert last node

    //insert at an index 


    //get at index

    //remove at index

    //clear lisst

    //print list data
     
}