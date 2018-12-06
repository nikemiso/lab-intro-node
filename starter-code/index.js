class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
   this.length++;
   this.items.push(item);
   this.items.sort((a,b) => a-b)

  }
  get(pos) {
    return this.items[pos-1];

  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else { return this.items[this.length-1]}
    
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else { return this.items[0]}

  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {return this.sum()/this.length} 
    
  }

  sum() {
    return this.items.reduce(function(acc, curr) {
    return acc + curr;},0)
};
}

module.exports = SortedList;

