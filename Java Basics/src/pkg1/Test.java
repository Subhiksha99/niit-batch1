package pkg1;

public class Test {
    int x = 10;
    static int y = 100;

    // non static method
    void m2() {
        System.out.println("#####non-static method");
        System.out.println(x);
        System.out.println(y);
        m3();
        System.out.println("###############");

    }
    static void m3() {
        System.out.println("static method");
    }
    // main method
    public static void main(String[] args) {
        //non-static-  create obj for non-static, using obj ref we can access
        // static - directly we can access

        // non-static
        Test test = new Test();
        System.out.println(test.x);
        test.m2();

        test.m2();

        System.out.println(y);
        System.out.println(Test.y);
        System.out.println(test.y);
        m3();

        System.out.println();
        System.out.println();

        /*
        //System.out.println("Hello World!!!");
        // Create object
        Employee emp1  = new Employee();
        Employee emp2  = new Employee();

        // read
        // String - null, byte,short, int, long - 0
        // float, double = 0.0, boolean - false
        System.out.println(emp1.firstName); // null
        System.out.println(emp1.lastName); // null
        System.out.println(emp1.age); // 0

        System.out.println(emp2.firstName); // null
        System.out.println(emp2.lastName); // null
        System.out.println(emp2.age); // 0

        // initialize/ update
        // constructor/methods/variables
        emp1.firstName="Raj";
        emp1.lastName="K";
        emp1.age=21;
        */

        // Operators
        // conditional/loop statements
    }
}
