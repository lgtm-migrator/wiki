# Java Application Coverage

This doc will introduce some approaches to estimate project coverage

* [Eclipse](#for-eclipse)
* [IDEA](#for-idea)
* [Maven](#for-maven)

## For Eclipse

for eclipse, use [EclEmma](http://www.eclemma.org/installation.html) code coverage tool to analyse code coverage

* install `EclEmma` from `Eclipse MarketPlace`

* restart Eclipse and right click a project, select `Coverage As -> JUnit Test`

* after test, coverage percentage will show in coverage tab, meanwhile, some lines will be marked as red.

## For IDEA

for IDEA(2017.1 Ultimate), it's easy to analyse coverage

* right click project name and click **run all tests with coverage**

* and the result is rich

## For Maven

introduce `jacoco` to maven project, build coverage anaylyse html page with maven.

you need to update your pom.xml

* add jacoco plugin

```xml
...
<build>
  <plugins>
    ...
    <plugin>
      <groupId>org.jacoco</groupId>
      <artifactId>jacoco-maven-plugin</artifactId>
      <version>0.7.9</version>
      <executions>
        <execution>
          <id>default-prepare-agent</id>
          <goals>
            <goal>prepare-agent</goal>
          </goals>
        </execution>
        <execution>
          <id>default-report</id>
          <phase>prepare-package</phase>
          <goals>
            <goal>report</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build>
...
```

* then, run mvn command

```bash
mvn clean test jacoco:report
```

* open `proj/target/site/jacoco/index.html` file

in addition, jenkins also have [jacoco plugin](https://wiki.jenkins.io/display/JENKINS/JaCoCo+Plugin), if need CI, `jacoco` will be a nice choice.
