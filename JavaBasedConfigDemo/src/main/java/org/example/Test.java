package org.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

    public static void main(String[] args) {
        // create spring container using xml config file
        // ways to create spring containers
        // 1. BeanFactory(I)
        // 2. applicationContext(I)
        //      impl class - ClassPathXmlApplicationContext
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);


        // get bean from container
        Employee e1 = context.getBean(Employee.class);
        System.out.println(e1);

        e1.setEmpId(1001);
        e1.setEmpName("Krish");
        e1.setContactNo("9999955555");

        System.out.println(e1);

        Address addr = context.getBean(Address.class);
        addr.setAddrId(2001);
        addr.setdNo("123");
        addr.setCity("Bengalore");

        e1.setAddress(addr);

        System.out.println(e1);

    }
}
