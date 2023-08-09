package day7;
import java.util.function.Function;
import java.util.function.BiPredicate;

/*
    // Example for object Oriented programming
    - add two numbers
    class Calculator {
        public int add(int x, int y) {
            return (x+y);
        }
    }
    class App {
        public static void main(String[] args) {
            Calculator c = new Calculator();
            c.add(10,20);
        }
    }

    // Functional programming

    // Functional Interface - interface with single abstract method is called functional interface
    interface Intf1 {
        int add(int x, int y);
    }
    
    // Rules for writing lambda expressions
       1. method return type not required
       2. method name not required
       3. {} & 'return' keyword not required if method
          body is having only one statement.
       4. input args data type not required
       5. insert '->' between input args & method body
       6. {} & 'return' keyword required when method body having more than one statement.
*/



/*
    // Predefined functional interfaces in java
    java.util.function - pkg
    1. Consumer - takes one input value - it won't return any value
       public abstract void accept(T);
       ex:
       void greet(String name) {
          System.out.println("Hello "+name);
       }
    2. Supplier  - it won't take any input, but it will return some value
       public abstract T get();
       ex:
       - generate 6 digit random number
       int generate() {
          return Math.round(Math.random()*1000000)); // 0-1 - 0.23456788812313
       }
    3. Function - takes one input value and returns some value
       public abstract R apply(T);

       ex: square numbers present in an array
       int[] squareArr(int[] intArr)

    4. Predicator - it will take input and returns boolean value
       public abstract boolean test(T);

       ex: boolean isEven(int num);
 */

// functional interfaces

@FunctionalInterface
interface Intf1 {
    int add(int x,  int y);
}
// Square given number
@FunctionalInterface
interface Intf2 {
    int square(int num);
}

// HelloWorld!
@FunctionalInterface
interface Intf3 {
     int x =10;
     // Allowed only one abstract method
     void greet();

     // static and default methods - allowed
    static void m1() {
        System.out.println("m1 method");
    }
    default void m2() {
        System.out.println("m2 method");
    }
}

// square array numbers
@FunctionalInterface
interface Intf4 {
    boolean search(int[] intArr, int val);

}

public class LambdaExpressionsDemo {
    public static void main(String[] args) {
        // Lambda expression - to add two numbers
        Intf1 a = (x, y) -> x+y;

        System.out.println(a.add(10,20));

        // Lambda expression - to square given number
        Intf2 sq = num -> num*num;
        System.out.println(sq.square(10)); //100

        System.out.println("###Functional Interface");
        Function<Integer,Integer> sqa = num -> num*num;
        System.out.println(sqa.apply(100));

        // lambda expression - to print 'Hello world'
        Intf3 gr = () -> System.out.println("Hello World!");
        gr.greet();
        // accessing static members
        System.out.println(Intf3.x);
        Intf3.m1();

        // accessing default method and static variable
        System.out.println(gr.x);
        gr.m2();




        // lambda express - to search given value in an array
        Intf4 s = (intArr, searchVal) -> {
            for(int val :intArr) {
                if(val==searchVal) {
                    return true;
                }
            }
            return false;
        };

        int[] intArr = {10, 15, 20, 25, 30};
        System.out.println(s.search(intArr, 150)); // false

        Integer[] intArr3 = {10, 15, 20, 25, 30};
        BiPredicate<Integer[], Integer> bp = (intArr4, searchVal) -> {
            for(int val :intArr4) {
                if(val==searchVal) {
                    return true;
                }
            }
            return false;
        };
        System.out.println("###BiPredicate");
        System.out.println(bp.test(intArr3, 10));
    }

    // write lambda expression to verify given number is even or not
    // program to search value in an array
    boolean search(int[] intArr, int searchVal) {
        for(int val :intArr) {
            if(val==searchVal) {
                return true;
            }
        }
        return false;
    }

  // write a program to square all numbers present in an array
  //  int[] sqArr(int[] intArr) {}






}
