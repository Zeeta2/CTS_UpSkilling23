class Car{
    String make;
    String model;
    int year;
    void displayDetails(){
        System.out.println("Make : "+make);
        System.out.println("Model : "+model);
        System.out.println("Year : "+year);
    }
}
public class Classandobjcreation {
     public static void main(String[] args) {
        System.out.println("Car 1 details: ");
        Car c1=new Car();
        c1.make="Hyundai";
        c1.model="i20";
        c1.year=2022;
        c1.displayDetails();
        System.out.println();
        System.out.println("Car 2 details: ");
        Car c2=new Car();
        c2.make="Toyota";
        c2.model="Innova";
        c2.year=2021;
        c2.displayDetails();
}
}