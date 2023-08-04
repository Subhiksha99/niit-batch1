package pkg1;

public class Employee {
    // Fields
    private  String firstName;
    private String lastName;
    private int age;

    // default constructor
    /*
    Employee() {}
     */

    // Constructor
    // Constructor overloading
    // Default Constructor
    public Employee() {}
    // Parameterized Constructor
    public Employee(String fName, String lName, int age) {
        this.firstName=fName;
        this.lastName=lName;
        this.age= age;
    }
    public Employee(String fName) {
        this.firstName=fName;
    }
    public Employee(String fName, String lName) {
        this.firstName=fName;
        this.lastName=lName;
    }
    public Employee(String lName, int age) {
        this.age=age;
        this.lastName=lName;
    }
    public Employee(int age, String lName) {
        this.age=age;
        this.lastName=lName;
    }


    // Setter methods - write
    public void setFirstName(String fName) {
        this.firstName=fName;
    }
    public void setLastName(String lName) {
        this.lastName=lName;
    }
    public void setAge(int age) {
        this.age=age;
    }

    // Getter methods - read
    public String getFirstName() {
        //sop(); // print value in console
        return  this.firstName;
    }

    public String getLastName() {
       return this.lastName;
    }

    public int getAge() {
        return this.age;
    }

}
