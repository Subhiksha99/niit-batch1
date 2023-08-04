package day3;
/*
    - types of polymorphism
    1. Compile time polymorphism
       - 1. Operator Overloading
        - + - numbers - add numbers - 2+3 = 5
            - string values - concat strings - "Hello"+"World" = "HelloWorld"
        -2.  Constructor Overloading
          defining more than one constructor in a class with same name
          class Employee {
              int empId;
              String name;
              int age;

              // constructors
              // Constructor Overloading
              Employee() {};
              Employee(int empId) {this.empId=empId}
              Employee(int empId, String name) {this.empId=empId; this.name=name}
              Employee(String name, int empId) {this.empId=empId; this.name=name}
              Employee(int empId, String name, int age) {
                this.empId=empId;
                this.name=name;
                this.age=age;
          }

          - 3. Method Overloading
               int add(int x, int y) {return x+y;}
               int add(int x, float f) {return x+f};
               int add(float f, int x) {return f+x};
               int add(int x, int y, int z) {return x+y+z;}
               int add(int x, int y, int z, int j) {return x+y+z+j;}

               add(10, 20);
               add(10, 20, 30);
               add(10, 20, 30, 40);
    2. runtime polymorphism
        - Method overriding
          - Object - equals() - reference comparision
              String - equals() method overrides Object class equals() method for content comparision
          - two classes required
          - rules:
             - method name should be same
             - return type same as parent method /covariant type
             - input arguments should be same
             - private , final, static - method overriding not possible
             - higher access modifiers allowed
                -  default -> protected -> public
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


    // this & super keywords

 */
class Employee {
    int empId;
    String name;
    int age;

    // constructors
    // Constructor Overloading
    Employee() {
    }

    Employee(int empId) {
        this.empId = empId;
    }

    Employee(int id, String name) {
        // calling another constructor using 'this' constructor
        this(id);
        //this.empId = empId;
        this.name = name;
    }

    Employee(String name, int empId) {
        this.empId = empId;
        this.name = name;
    }

    Employee(int empId, String name, int age) {
        // calling another constructor using 'this' constructor
        this(empId,name);
        //this.empId = empId;
        //this.name = name;
        this.age = age;
    }
}
// 'super' keyword
class Person {
    // Fields
    String name;
    int age;

    // Constructors
    Person(){}
    Person(String name, int age) {
        this.name=name;
        this.age=age;
    }

    void m1() {
        System.out.println("Person class - m1() method");
    }
}
class Student extends Person{
    int rollNo;

    // Constructors
    Student() {}
    Student(int rollNo, String name, int age) {
        // calling parent class constructor to initialize values of person obj
        super(name, age);
        this.rollNo = rollNo;
    }

    void m2() {
        // referring/calling parent class method
        super.m1();
    }

}
public class PolymorphismDemo {

    // note : before main method static block will be executed
    public static void main(String[] args) {

       Student std1 = new Student(101, "Raj", 12);
        System.out.println(std1.rollNo);
        System.out.println(std1.name);
        System.out.println(std1.age);
        std1.m2();






        System.out.println(add(10, 15.5f));
        PolymorphismDemo pd = new PolymorphismDemo(); // non-static block executed at the time of object creation
        PolymorphismDemo pd2 = new PolymorphismDemo();
        System.out.println(pd.add(10.23f, 10));
    }

    // Block
    // non-static block
    {
        System.out.println("Non-static block");
    }
    // static block
    static {
        System.out.println("Static block");
    }

    // static method
    static float add(int x, float f) {
        return x+f;
    }

    // non-static method
    int add(float f, int x) {
        // type casting
        return (int)(f+x);
    }

    // Typecasting
    // byte -> short -> int -> long -> float -> double - type conversion not required
    // byte <- short <- int <- long <- float <- double - type conversion required
}

