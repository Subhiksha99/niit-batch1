package day3;
/*
    - aquiring properties from one class into another class.
    - another name for inheritance is IS-A relationship
    - 'extends' is the keyword need to be used to implement inheritance
    - Only one class allowed to be extended.

    - Types of inheritance
    1. single        - Java supports
       - two classes
       - Parent <- Child
    2. multiple   - ambiguity - Java won't support
       - Parent1(m1)
                    <- child (m1)
       - Parent2(m1)
    3. multilevel    - Java Supports
        - Parent <- Child <- Grandchild
    4. Hierarchical  - Java supports
       -          <- Child1
       - Parent
       -          <- Child2
    5. Hybrid     - ambiguity - Java won't support
       - combination of any two more inheritance types


// Parent
class Person {
    name;
    age;
    contactNo;
    email;

    m1();
    m2();
}

// Child
class Student extends Person {
    rollNo;

}
// Child
class Employee extends Person {
    empId;
}

*/
// Single inheritance
// Parent
class A {
    int x = 10;

    void m1() {
        System.out.println("Class A - m1() method");
    }
}
// Child
class B extends A{
    int y = 100;

    void m2() {
        System.out.println("Class B - m2() method");
    }
}

// GrandChild
class C extends A{
    int z = 1000;

    void m3() {
        System.out.println("Class C- m3() method");
    }
}

/*
// Mutlple - won't support by java
class D extends C, A {
    int z = 1000;

    void m3() {
        System.out.println("Class C- m3() method");
    }
}
*/
public class InheritanceDemo {
    public static void main(String[] args) {

        //  Hierarchical
        A a = new A();
        System.out.println(a.x);
        a.m1();

        System.out.println();
        B b = new B();
        System.out.println(b.x);
        b.m1();
        System.out.println(b.y);
        b.m2();

        System.out.println();
        C c = new C();
        System.out.println(c.z);
        c.m3();

        System.out.println(c.x);
        c.m1();



        /*
        // Multilevel
        // A - Parent class, B - Child class, C - GrancChild class

        A a = new A();
        System.out.println(a.x);
        a.m1();
        System.out.println();

        B b = new B();
        System.out.println(b.y);
        b.m2();

        // after implementing inheritance
        System.out.println(b.x);
        b.m1();

        System.out.println();
        C c = new C();
        System.out.println(c.x);
        System.out.println(c.y);
        System.out.println(c.z);

        c.m1();
        c.m2();
        c.m3();



        // Single Inheritance
        // A - Parent class, B - Child class
        A a = new A();
        a.x;
        a.m1();


        B b = new B();
        b.y;
        b.m2();

        // after implementing inheritance
        b.x;
        b.m2();

        */

    }
}
