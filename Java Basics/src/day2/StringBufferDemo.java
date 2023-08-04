package day2;

public class StringBufferDemo {

    public static void main(String[] args) {

        // Create StringBuffer objects
        StringBuffer sb1  = new StringBuffer("Hello");
        StringBuffer sb2  = new StringBuffer("World");
        StringBuffer sb3  = new StringBuffer("Hello");
        StringBuffer sb4=sb1;

        System.out.println(sb4.equals(sb1)); // true
        System.out.println(sb4==sb1); // true

        // StringBuffer objects are mutables
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
        StringBuffer sb5 = new StringBuffer(); //
        System.out.println(sb5.capacity()); // 16

        StringBuffer sb6 = new StringBuffer("Java");
        System.out.println(sb6.capacity()); // 20

        sb5.append("123456789101112123");
        System.out.println(sb5.capacity()); // 34 - (OldCapcity*2)+2

        // methods
        System.out.println(sb1.length());
        System.out.println(sb1.charAt(0));
        System.out.println(sb1.compareTo(sb2));
        System.out.println(sb1.reverse());

        // Convert String to StringBuffer
        String str = "Hello World!!";
        StringBuffer sb10 = new StringBuffer(str);
        System.out.println(sb10.reverse());






    }
}
