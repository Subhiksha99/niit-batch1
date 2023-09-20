package org.example;

public class Singleton {

     private static  Singleton singleton = new Singleton();

    private Singleton() {}


    public static Singleton getSingleton() {
         return singleton;
    }
}

class Test {
    public static void main(String[] args) {
       Singleton st1  = Singleton.getSingleton();
        System.out.println(st1); // 317574433
        System.out.println(st1.hashCode());
        Singleton st2  = Singleton.getSingleton();
        System.out.println(st2); //317574433
        System.out.println(st2.hashCode());
    }
}