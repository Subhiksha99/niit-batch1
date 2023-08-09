package day7;
import java.util.Set;
import java.util.TreeSet;

public class ComparatorDemo {
    public static void main(String[] args) {
        // Create student objects
        Student std1 = new Student(201, "Raj");
        Student std2 = new Student(203, "Anu");
        Student std3 = new Student(202, "Shiv");
        Student std4 = new Student(204, "Sam");

        // Create TreeSet
        CompareByRollNo byRollNo= new CompareByRollNo();
        // sort based on roll No
        // Set<Student> ts = new TreeSet<>(byRollNo);

        // sort based on name
        CompareByName byName = new CompareByName();
        Set<Student> ts = new TreeSet<>((s1,s2)->s2.getName().compareTo(s1.getName()));

        
        //Set<Student> ts = new TreeSet<>(byName);
        ts.add(std1);
        ts.add(std2);
        ts.add(std3);
        ts.add(std4);

        System.out.println(ts);


    }
}
