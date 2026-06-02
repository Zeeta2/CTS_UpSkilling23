import java.util.List;

record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {

        List<Person> list = List.of(
                new Person("John", 20),
                new Person("Sam", 15)
        );

        list.stream()
            .filter(p -> p.age() >= 18)
            .forEach(System.out::println);
    }
}