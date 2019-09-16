class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    }
    class Queue {
    constructor() {
        this.top = null;
        this.size = 0;
        this.front = null;
    }
    push(data) {//if the queue is  empty the data will add as first node into the queue
        if (this.isEmpty()) {
            const node = new Node(data)
            this.top = node;//adding first data into the queue
            this.front = node;
            this.size++;
            return;
        }
        const node = new Node(data);
        this.top.next = node;//adding data at the end 
        this.top = node;
        this.size++;
    }
    pop() {//return datas which are in the queue
        if (this.isEmpty()) {
          //  console.log('no elemets found')
            return;
        }
        const dat = this.front.data
        this.front = this.front.next;//taking ref of next node into first of qeue
        this.size--;
        return dat;//return data to the user
    }
    peek() {
        return this.top.data//return the top value which is the value added inthe last
    }
    print() {//printing the datas inthe queue
        const t = this.front;
        while (t != null) {
            console.log(t.data);
            t = t.next;
        }
    }
    getData(){
        var temp = this.front;
        var str = "";
        while(temp){
            str = str + temp.data;
            if(temp.next!=null){
                str = str + " ";
            }
            temp = temp.next;
        }
        return str;
    }
    
    isEmpty() {//checking wheather the queue is is full or not
        if (this.size === 0) {
            return true;
        }
        else
            return false
    }
    getSize() {
        return this.size;//return the size value of the queue
    }
    }
    module.exports = {
    Queue
    }
    
    
    
    