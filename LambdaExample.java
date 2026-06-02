import java.util.*;

public class LambdaExample {
    public static void main(String[] args) {

        List<String> list = new ArrayList<>();

        list.add("Zebra");
        list.add("Apple");
        list.add("Monkey");

        Collections.sort(list, (a, b) -> a.compareTo(b));

        System.out.println(list);
    }
}