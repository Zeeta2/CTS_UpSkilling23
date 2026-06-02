import java.util.Scanner;

public class Trycatch {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        
        try{
            System.out.print("Enter First Number: ");
            int n=sc.nextInt();
            System.out.print("Enter Second Number: ");
            int m=sc.nextInt();
            System.out.println("Result: "+(n/m));
        }catch(ArithmeticException e){
            System.out.println("Cannot divide by zero.");        }
        sc.close();
}}
