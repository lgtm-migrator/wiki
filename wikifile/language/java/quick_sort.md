# 快速排序的java实现

Note:快速排序由C. A. R. Hoare在1962年提出。它的基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。

## Source

```java
package quick_sort;

import java.util.Arrays;

public class Main {

	public static void main(String[] argv) {
		int[] arr = { 143, 432, 432, 213, 324, 234, 1, 45, 3, 2 };
		quick_sort(arr);
		System.out.println(Arrays.toString(arr));
	}

	public static void swap(int[] arr, int idx1, int idx2) {
		int tmp = arr[idx1];
		arr[idx1] = arr[idx2];
		arr[idx2] = tmp;
	}

	public static int partition(int[] arr, int start, int end) {
		int store_idx = start;
		int center_value = arr[end];
		for (int i = start; i < end; i++) {
			if (arr[i] < center_value) {
				swap(arr, store_idx, i);
				store_idx++;
			}
		}
		swap(arr, end, store_idx);
		return store_idx;
	}

	public static void sort(int[] arr, int start, int end) {
		if (start > end)
			return;
		int center_idx = partition(arr, start, end);
		sort(arr, start, center_idx - 1);
		sort(arr, center_idx + 1, end);
	}

	public static void quick_sort(int[] arr) {
		sort(arr, 0, arr.length - 1);
	}

}

```

## 笔记

其中有三个方法

swap方法用于交换指定位置的数字

partition将指定开始结尾的序列，按照序列最后的数字(arr[end])分成两部分，左部分都比它小，右部分都比它大，最后将arr[end]放置在中间，并返回中间的位置

sort用于递归调用