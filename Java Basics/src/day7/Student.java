package day7;

public class Student {
    // Fields
    private int rollNo;
    private String name;

    // Constructor
    Student() {}
    Student(int rNo, String name) {
            this.rollNo=rNo;
            this.name=name;
    }

    //Getters & Setters
    void setRollNo(int rollNo) {
        this.rollNo=rollNo;
    }
    void setName(String name) {
        this.name=name;
    }

    public int getRollNo() {
        return rollNo;
    }
    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Student{" +
                "rollNo=" + rollNo +
                ", name='" + name + '\'' +
                '}';
    }
}
