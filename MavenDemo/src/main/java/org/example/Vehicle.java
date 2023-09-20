package org.example;
import java.util.List;
import java.util.ArrayList;

/*
 Prototype - clone of existing object
 1. shallow copy

 2. Deep copy

 3.  clone
 */
class Student implements Cloneable {
    int id;
    String name;

    Student() {}

    @Override
    public Student clone() {
        try {
            Student clone = (Student) super.clone();
            // TODO: copy mutable state here, so the clone can't change the internals of the original
            return clone;
        } catch (CloneNotSupportedException e) {
            throw new AssertionError();
        }
    }
}
public class Vehicle implements Cloneable{
    List<String> vehicalList = new ArrayList<>();
    Vehicle() {}
    Vehicle(List<String> vehicalList) {
        this.vehicalList = vehicalList;
    }

    void loadVehicles() {
        // db logic to get list of vehicles
        vehicalList.add("Splender");
        vehicalList.add("Activa");
        vehicalList.add("Yamaha");
    }

    List<String> getVehicalList() {

        return vehicalList;
    }

    @Override
    public Vehicle clone() {
        List<String> vList = new ArrayList<>();
        vList.addAll(vehicalList);
        return new Vehicle(vList);
    }
}

class Test2 {
    public static void main(String[] args) {


        Vehicle v1 = new Vehicle();
        v1.loadVehicles();
        System.out.println(v1.getVehicalList());

        Vehicle v2 = v1.clone();
        System.out.println(v2.getVehicalList());
        v2.getVehicalList().add("Chetak");
        System.out.println(v1.getVehicalList());
        System.out.println(v2.getVehicalList());
        Vehicle v3 = v1.clone();
        System.out.println(v3.getVehicalList());
        v3.getVehicalList().remove("Splender");
        System.out.println(v3.getVehicalList());



        /*
        Student std1 = new Student();
        std1.id = 1001;
        std1.name="Ram";

        // Shallow copy
        Student std2 = std1;

        System.out.println(std1.id);
        System.out.println(std1.name);

        System.out.println(std2.id);
        System.out.println(std2.name);

        System.out.println(std1.hashCode()); // 317574433
        System.out.println(std2.hashCode()); // 317574433

        std2.id=1002;

        System.out.println(std1.id);
        System.out.println(std2.id);

        // Deep copy
        Student std3 = new Student();
        std3.id = 1001;
        std3.name="Ram";

        Student std4 = new Student();
        std4.id=std3.id;
        std4.name= std4.name;

        System.out.println();
        System.out.println("#Deep copy");
        System.out.println(std3.id);
        System.out.println(std4.id);

        std4.id=1004;
        System.out.println(std3.id);
        System.out.println(std4.id);


        // Clone
        Student std5 = new Student();
        std5.id=1005;
        std5.name="Sam";

        Student std6 = std5.clone();

        System.out.println();
        System.out.println("#clone");
        System.out.println(std5.id); //885284298
        System.out.println(std6.id); //1389133897

        System.out.println(std5.hashCode());
        System.out.println(std6.hashCode());

        std6.id=1006;
        System.out.println(std5.id); // 1005
        System.out.println(std6.id); // 1006
        */

    }
}
