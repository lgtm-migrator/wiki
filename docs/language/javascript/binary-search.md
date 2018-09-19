# 二分查找的js实现

Note:二分查找又称折半查找，优点是比较次数少，查找速度快，平均性能好；其缺点是要求待查表为有序表，且插入删除困难。因此，折半查找方法适用于不经常变动而查找频繁的有序列表。首先，假设表中元素是按升序排列，将表中间位置记录的关键字与查找关键字比较，如果两者相等，则查找成功；否则利用中间位置记录将表分成前、后两个子表，如果中间位置记录的关键字大于查找关键字，则进一步查找前一子表，否则进一步查找后一子表。重复以上过程，直到找到满足条件的记录，使查找成功，或直到子表不存在为止，此时查找不成功。

## Source

```javascript
const arr = [1, 4, 5, 10, 33, 244, 9999];

const binary_search = (arr = [], des) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let middle = (high + low) >> 1;
    // if middle value equal to destination
    if (des == arr[middle]) return middle;
    else if (des < arr[middle]) high = middle - 1;
    else low = middle + 1;
  }

  return -1;
}

console.log(binary_search(arr, arr[3]))

// result is 3
```

## Ideas

由于给定的序列已经排好序，所以折半查找才可以放心的去"折半"，否则这个算法是无效的

折半查找每轮查找都会舍去一般序列，最终定位到查找点