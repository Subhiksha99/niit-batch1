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
        System.out.println(e1);


    }
}
