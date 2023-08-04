package day2;

public class StringBuilderDemo {

    public static void main(String[] args) {
        // Create StringBuilder objects
        StringBuilder sb1  = new StringBuilder("Hello");
        StringBuilder sb2  = new StringBuilder("World");
        StringBuilder sb3  = new StringBuilder("Hello");
        StringBuilder sb4=sb1;

        System.out.println(sb4.equals(sb1)); // true
        System.out.println(sb4==sb1); // true

        // StringBuilder objects are mutables
        System.out.println(sb1); // Hello
        //sb1.append(sb2);
        //System.out.println(sb1); // HelloWorld

        // equals & ==
        // Hello
        System.out.println(sb1.equals(sb3)); //false - ref comparision
        System.out.println(sb1==sb3); //  false - ref comparision

        //
        // Object class - Parent class all classes
        // equals() - compare reference

        // String class
        // equals() overridden to compare content

        // String Buffer - 1.0 , thread safety /String Builder - 1.5 - no thread safety, better performance
        // equals()

        // Capacity
        StringBuilder sb5 = new StringBuilder(); //
        System.out.println(sb5.capacity()); // 16

        StringBuilder sb6 = new StringBuilder("Java Programming");
        System.out.println(sb6.capacity()); // 32
        System.out.println("+++++++++");
        sb5.append("Programming");
        System.out.println(sb5.capacity()); // 16
        System.out.println(sb5);
        sb5.append("123456789101112123");
        System.out.println(sb5.capacity()); // 34 - (OldCapcity*2)+2
        System.out.println(sb5);
        System.out.println("+++++++++++++++");


        // methods
        System.out.println(sb1.length());
        System.out.println(sb1.charAt(0));
        System.out.println(sb1.compareTo(sb2));
        System.out.println(sb1.reverse());

        // Convert String to StringBuilder
        String str = "Hello World!!";
        StringBuilder sb10 = new StringBuilder(str);
        System.out.println(sb10.reverse());


    }
}
