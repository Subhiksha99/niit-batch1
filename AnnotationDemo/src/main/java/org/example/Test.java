package org.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

    public static void main(String[] args) {
        // create spring container using xml config file
        // ways to create spring containers
        // 1. BeanFactory(I)
        // 2. applicationContext(I)
        //      impl class - ClassPathXmlApplicationContext
        ClassPathXmlApplicationContext context  = new ClassPathXmlApplicationContext("applicationContext.xml" );

        // get bean from container
        Employee e1= context.getBean("employee", Employee.class);
        Address addr1 = context.getBean("address", Address.class);

        System.out.println(e1);

        e1.setEmpId(1000);
        e1.setEmpName("Ram");
        e1.setContactNo("9999912345");

        addr1.setAddrId(3000);
        addr1.setdNo("123B");
        addr1.setCity("Chennai");

        e1.setAddress(addr1);

        System.out.println(e1);

        System.out.println(e1.getContactNo());


    }
}
