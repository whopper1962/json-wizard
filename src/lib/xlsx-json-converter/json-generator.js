module.exports = class JsonGenerator {
  constructor({ parentKeys, valueIndex, contents }) {
    this.parents = parentKeys;
    this.valueIndex = valueIndex;
    this.contents = contents;
    this.orderedKeys = [];
    this.json = {};
    for (const row of this.contents) {
      const valueArr = [];
      for (const keyIndex of this.parents) {
        valueArr.push(row[keyIndex]);
      }
      // valueArr.push(row[this.valueIndex]);
      this.orderedKeys.push(valueArr);
    }
  }

  generate() {
    for (const keyIndex of this.orderedKeys) {
    }
  }

  checkDuplicates() {
    let duplicates = [];
    const frequency = this.orderedKeys.reduce(function (
      seen,
      currentItem
    ) {
      if (currentItem in seen) {
        seen[currentItem] = seen[currentItem] + 1;
      } else {
        seen[currentItem] = 1;
      }
      return seen;
    }, {});

    for (const key in frequency) {
      if (frequency[key] > 1) {
        duplicates.push(
          key.split(",").map(function (currentItem) {
            return currentItem;
          })
        );
      }
    }

    if (duplicates.length > 0) {
      const duplicatesindex = [];
      for (const duplicate of duplicates) {
        for (const [index, keys] of this.orderedKeys.entries()) {
          if (JSON.stringify(keys) !== JSON.stringify(duplicate)) continue;
          duplicatesindex.push(index);
        }
      }
      return duplicatesindex;
    } else {
      return [];
    }
  }
};
