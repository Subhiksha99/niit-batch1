package day3;

class EmployeeDetails {
    private int empId;
    private String name;
    private double salary;

    // public getters & setters
    // read
    public int getEmpId() {
        return this.empId;
    }

    public String getName() {
        return this.name;
    }

    // update - setter methods
    void setName(String newName) {
        this.name=newName;
    }

}
public class EncapsulationDemo {
    public static void main(String[] args) {
        EmployeeDetails ed1 = new EmployeeDetails();
    }
}
