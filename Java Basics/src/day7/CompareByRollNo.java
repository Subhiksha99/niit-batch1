package day7;

import java.util.Comparator;

public class CompareByRollNo implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        // sort in asc order
        // return s1.getRollNo()> s2.getRollNo()?1:
        //          s1.getRollNo()<s2.getRollNo()?-1:0;

        // sort in desc order
        return s1.getRollNo()> s2.getRollNo()?-1:
                 s1.getRollNo()<s2.getRollNo()?1:0;

    }
}
