function removeExtraSpaces(strArr) {
  let slowIndex = 0;
  let fastIndex = 0;

  while(fastIndex < strArr.length) {
    // 移除开始位置和重复的空格
    if (strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
      fastIndex++;
    } else {
      strArr[slowIndex++] = strArr[fastIndex++];
    }
  }

  // 移除末尾空格
  strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex;
}

const s = "the sky is blue"
const arr  = Array.from(s);
removeExtraSpaces(arr)
console.log(arr);