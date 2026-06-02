import java.util.Scanner;

public class Stringreversal {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter a string: ");
        String s1=sc.nextLine();
        String rev=new StringBuilder(s1).reverse().toString();
        System.out.println("Reversed String: "+rev);
        sc.close();
}
}