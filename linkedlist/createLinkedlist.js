class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
  }
  addList(nodedata) {
    let newNode = {
      value: nodedata,
      next: null,
    };
    //last node is also our tail that's why tail is equal to node
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
let newData = new List(50);
newData.addList(100);
console.warn(newData);
