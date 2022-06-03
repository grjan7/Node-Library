"use strict";

const countItems = (arr) => {
  let itemsObject = { words: {}, uniqueWords: 0 };
  for (let i in arr) {
    if (arr[i] in itemsObject.words) {
      itemsObject["words"][arr[i]] += 1;
    } else {
      itemsObject["words"][arr[i]] = 1;
      itemsObject["uniqueWords"] += 1
    }
  }
  return itemsObject;
}

const wordCount = (str) => {
  let replStr = str.replace(/[.,:;"'!@$%&^><*(){}\|`#]|\[|\]/g, "");
  replStrArr = replStr.split(" ");
  return countItems(replStrArr);
}

module.exports = { countItems, wordCount };

