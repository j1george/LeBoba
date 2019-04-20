class DataStore {
    constructor() {
        this.data = {};
        this.id = 0;
    }

    add(order) {
        this.data[this.id] = order;
        this.id++;
    }

    remove(id) {
        delete this.data[id];
    }

    get(id) {
        return this.data[id];
    }

    getAll() {
        return this.data;
    }
}

module.exports = DataStore;