import java.io.FileWriter;
import java.util.Scanner;

public class Filewriting {
    public static void main(String[] args) {
        try {
            Scanner sc = new Scanner(System.in);
            System.out.print("Enter a string: ");
            String text = sc.nextLine();
            FileWriter fw = new FileWriter("output.txt");
            fw.write(text);
            fw.close();
            System.out.println("Data written successfully.");
        } catch (Exception e) {
            System.out.println(e);
        }
        
    }
}