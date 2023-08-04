package day3;
/*
    - hide complexity of program
    - Ways to achieve abstraction
      1. interface  - 100% abstraction - recommended
         - 'interface' is the keyword for creating interface
         - variable - public, static & final
         - methods - public & abstract
      2. Abstract class - 0-100% abstraction

      // WebDriver - set of methods - openBrowser(), enterUrl(), getTi
 */

interface Shape {
     double pi = 3.14;
    void draw();
}

class Rectangle  implements Shape {
    //@Override
    public void draw() {
        System.out.println("Rectangle");
    }
    public void m5() {
        System.out.println("Rectangle class - m5 method");
    }
    public void m6() {
        System.out.println("Rectangle class - m6 method");
    }
}
class Circle implements  Shape{

    //@Override
    public void draw() {
        System.out.println("Circle");
    }
}

abstract class Triangle implements Shape {}
class Tr extends Triangle{

    @Override
    public void draw() {
        System.out.println("Tr draw() method");
    }
}
abstract class Cube {

    void m1() {
        System.out.println("m1 method");
    }
    void m2() {
        System.out.println("m2 method");
    }

    //abstract void m3();
}

class Test extends Cube { }

public class AbstractionDemo {


    public static void main(String[] args) {
        Rectangle r = new Rectangle(); // tight coupling
        r.draw();// Rectangle
        r.m5();
        r.m6();


        Circle c = new Circle();
        c.draw();

        // Loose coupling
        Shape s = new Rectangle();
        //Shape s = new Circle();
        s.draw(); // Rectangle
        //s.m5();
        // s.m6();
        System.out.println();
        System.out.println(Shape.pi);
        //Shape.pi=1001; // invalid, pi - final variable

        // Triangle t = new Triagle(); Objects can't be created for abstract classes

        Shape s1 = new Tr(); // ref type - interface - recommended
        Triangle t1 = new Tr(); // ref type - abstract class
        Tr t2 = new Tr(); // ref type - class

        s1.draw();

        Test t = new Test();
        t.m1();
        t.m2();

    }
}
