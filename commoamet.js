class ProjectionNameMap {
    constructor() {
        this.map = {};
    }

    // Method to add a new entry to the map
    add(name, value) {
        this.map[name] = value;
    }

    // Method to rename a key in the map
    rename(oldName, newName) {
        if (this.map.hasOwnProperty(oldName)) {
            this.map[newName] = this.map[oldName];
            delete this.map[oldName];
        } else {
            console.log(`Key "${oldName}" does not exist.`);
        }
    }

    // Method to display the current map
    display() {
        console.log(this.map);
    }
}

// Example usage
const projectionNameMap = new ProjectionNameMap();
projectionNameMap.add('oldKey', 'value1');
projectionNameMap.add('anotherKey', 'value2');

console.log('Before renaming:');
projectionNameMap.display();

projectionNameMap.rename('oldKey', 'newKey');

console.log('After renaming:');
projectionNameMap.display();
