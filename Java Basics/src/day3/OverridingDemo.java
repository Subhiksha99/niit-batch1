package day3;

class Parent {

    Object m1() {
        return new Object();
    }
    int m2() {
        return 0;
    }


}
class Child extends Parent {

     Employee m1() {
        return new Employee();
    }

    int m2() {
        return 10;
    }

}
 public class OverridingDemo {
    public static void main(String[] args) {
        Child child = new Child();
        System.out.println(child.m1());
        System.out.println(child.m2());
    }
}
