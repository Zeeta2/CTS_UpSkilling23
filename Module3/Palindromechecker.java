import java.util.Scanner;

public class Palindromechecker {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter a string: ");
        String s1=sc.nextLine();
        String str=s1.replaceAll("[^a-zA-Z0-9]","").toLowerCase();
        String rev=new StringBuilder(str).reverse().toString();
        if(str.equals(rev)){
        System.out.println("Palindrome");
        }else{
            System.out.println("Not a Palindrome");
        }
        sc.close();
}
}