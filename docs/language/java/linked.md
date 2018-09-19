# java的链式调用

受到js的启发，其实有些java库已经用过了。

常被用在Builder模式中。

## Source

```java
public class Apple {

	public static Apple newApple() {
		return new Apple();
	}

	String id;
	float weight;

	public String getId() {
		return id;
	}

	public Apple setId(String id) {
		this.id = id;
		return this;
	}

	public float getWeight() {
		return weight;
	}

	public Apple setWeight(float weight) {
		this.weight = weight;
		return this;
	}

	public static void main(String[] args) {
		Apple.newApple().setId("213").setWeight(99.99f);
	}
	
}
```

## Benefit

本来需要三四行的代码，用一行就可以解决了

除了语法上的简化，更多的在于使程序的可读性更高
