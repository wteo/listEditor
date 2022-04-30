class List {

    constructor(listedItems) {
        this.listedItems = listedItems ?? [];
    }

    async addLast(newItem) {
        this.listedItems = [...this.listedItems, newItem];
        return await this.listedItems;
    }

    async removeLast() {
        let num = 0;
        let copy = [];
        while(num < this.numOfItems - 1) {
            copy = [...copy, this.listedItems[num]];
            num++;            
        }
        this.listedItems = copy;
        return await this.listedItems;
    }

    async addFirst(newItem) {
        this.listedItems = [newItem, ...this.listedItems];
        return await this.listedItems;
    }

    async removeFirst() {
        let num = 1;
        let copy = [];
        while(num < this.numOfItems) {
            copy = [...copy, this.listedItems[num]];
            num++;            
        }
        this.listedItems = copy;
        return await this.listedItems;
    }

    get numOfItems() {
        let num = 0;
        while (this.listedItems[num] !== undefined) {
            num++;
        }
        return num;
    }

    async reverseList() {
        let num = this.numOfItems;
        let copy = [];
        for (let i = 0; num > i; num--) {
            copy = [...copy, this.listedItems[num - 1]];
        }
        this.listedItems = copy;
        return await this.listedItems;
    }

    find(searchedItem) {
        for (let listedItem of this.listedItems) {
            if (listedItem === searchedItem) return searchedItem;
            return "Item not found!";
        }
    }

    async reset() {
        this.listedItems = [];
        return await this.listedItems;
    }

}

export default List;