# 如何从先序和中序序列，构建一棵树

题目：先序ABCDEFGH，中序BDCEAFHG

## 找到根节点

* 由先序，A是根节点
* 由中序，BDCE是A的子树，FHG是A的右子树

![tree-1](https://res.cloudinary.com/digf90pwi/image/upload/v1500038033/tree-1_vrcjgr.png)

## 只看左子树

* 由先序，B是父节点，由中序，无左子树
* 由先序，C是根节点，由中序，D/E分别是左右子节点

![tree-2](https://res.cloudinary.com/digf90pwi/image/upload/v1500038033/tree-2_bfksoe.png)

## 只看右子树

* 由先序和中序，F是根节点，GH为右子树
* 由先序，G是根节点，由中序，H是左节点

![tree-3](https://res.cloudinary.com/digf90pwi/image/upload/v1500038033/tree-3_bqr8g9.png)

## 组装

* 直到把所有节点都分配完之后，组装起来就可以了

![tree-4](https://res.cloudinary.com/digf90pwi/image/upload/v1500038034/tree-4_jawebc.png)

## 总结

由先序和中序序列恢复树的过程，是一个分治递归的过程，整个过程中，只需要把当前(子)树的根节点、左右子树划分出来就好