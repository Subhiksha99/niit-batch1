package day3;

interface Intf {
    // Fields
    int x = 199;

    // Abstract methods
    void m3();
    void m4();

   /* - concrete methods not allowed inside interface - invalid
   void m5() {
 	System.out.println("intf m5() method")
   }
   */

    // Default & static methods
    static void m1() {
        System.out.println("intf m1() method");
    }

    default void m2() {
        System.out.println("intf m2() method");
    }
}

class IntfImplClass implements Intf {
    void m13() {
        System.out.println("m13() method");
    }
    void m14() {
        System.out.println("m14() method");
    }

    @Override
    public void m3() {
        System.out.println("m3() method");
    }

    @Override
    public void m4() {
        System.out.println("m4() method");
    }
}
public class InterfaceDemo {
    public static  void main(String[] args) {
        // accessing interface static methods
        Intf.m1();

        // accessing interface default methods
        IntfImplClass impl = new IntfImplClass();
        impl.m2();

        // accessing interface variables
        System.out.println(Intf.x);

        impl.m3();
        impl.m4();
    }
}
