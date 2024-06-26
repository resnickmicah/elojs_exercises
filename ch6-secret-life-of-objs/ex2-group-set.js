
class Group {
    // Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods.

    //  Its constructor creates an empty group
    constructor() {
        this.values = [];
    }

    // add adds a value to the group (but only if it isn’t already a member)
    add(val) {
        if (this.values.indexOf(val) == -1) {
            this.values.push(val);
        }
    }

    // delete removes its argument from the group (if it was a member)
    delete(val) {
        let idx = this.values.indexOf(val);
        if (idx != -1) {
            this.values.splice(idx, 1);
        }
    }

    // has returns a Boolean value indicating whether its argument is a member of the group.
    has(val) {
        return this.values.indexOf(val) != -1;
    }

    toString() {
        return this.values.toString();
    }

    // Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
    static from(other) {
        let newObj = new this();
        for (const val of other) {
            newObj.add(val);
        }
        return newObj;
    }


}

let group = Group.from([10, 20]);
console.log(`Initialized group with 10, 20: ${group}`);
console.log(`Group has 10 (should return true): ${group.has(10)}`);
// → true
console.log();
console.log(`Group has 30 (should return false): ${group.has(30)}`);
// → false
group.add(10);
console.log(`Group still has 10, 20 after adding 10: ${group}`);
group.delete(10);
console.log(`Group only has 20 after deleting 10: ${group}`);
console.log(`Group no longer has 10 (should return false): ${group.has(10)}`);
// → false