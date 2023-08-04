package pkg2;
import pkg1.Employee;

public class Test {
    public static void main(String[] args) {
       Employee emp1 = new Employee();
       //System.out.println(emp1.firstName);
       //emp1.firstName= "Raj";
        emp1.setFirstName("Raj");
       //System.out.println(emp1.firstName);
       emp1.setFirstName("Sam");
       //System.out.println(emp1.firstName);

       Employee emp2 = new Employee(10, "Ram");
       // System.out.println(emp1.firstName);
        // System.out.println(emp1.lastName);
        System.out.println(emp2.getFirstName());
        System.out.println(emp2.getLastName());
        System.out.println(emp2.getAge());
        emp2.setAge(11);
        System.out.println(emp2.getAge());
    }
}
