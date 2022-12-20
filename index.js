class BinomealNode {
    children;
	key;
	
	constructor(key) {
		this.key = key;
		this.children = [];
	}
}

class BinomealHeap {
    data;

    constructor() {
        this.data = [null];
    }

    insert(key) {
        let new_node = new BinomealNode(key);
        return this.merge([new_node]);
    }

    getMin() {
        let min = Number.MAX_VALUE;
        
        for (const node of this.data) {
            if (node == null) continue;
            if (node.key < min) {
                min = node.key;
            }
        }
        return min;
    }
    
    delMin() {
        min = null;
		for (node of this.data) {
			if (node == null) continue;
			if (min == null) {
				min = node;
				continue;
			}
			if (node.key < min.key) {
				min = node;
			} 
		}
		if (min == null) return false;
		
		this.data[min.children.length] = null;

		return this.merge(array);
    }

    merge(_in) {
		while (_in.length != 0) {
			let ind = _in.shift();
			let store = ind;
			for (let i = 0; i < this.data.length; i++) {

				if (this.data[store.children.length] == null) {
					this.data.push(store)
					break;
				}
				
				else {
					let tmp = this.data[store.children.length];
					this.data[store.children.length] = null;
					store = this.merge_tree(store, tmp);
				}
			}
		}
		
		return true;
    }

    merge_tree(r1, r2) {
        if (r1.key <= r2.key) {
			r1.children.push(r2);
			return r1;
		} else {
			r2.children.push(r1);
			return r2;
		}
    }

    display() {
        let output = "";
		output += "[ ";
		for (const n of this.data) {
			if (n == null) {
				output += "null, ";
			} else {
				output += `${n.key}, `;
			}
		}
		output += " ]";
		console.log(output);
	}
}

(() => {
    let heap = new BinomealHeap()

    heap.insert(7)
    heap.insert(3)
    heap.insert(12)
    heap.insert(1)
    heap.insert(123)
    heap.display()
    console.log(heap.getMin())
})()