package day7;

import java.util.Comparator;

public class CompareByName implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        // sort based on name in asc order
        // return s1.getName().compareTo(s2.getName());

        // sort based on name in desc order
        return s2.getName().compareTo(s1.getName());
    }
}
