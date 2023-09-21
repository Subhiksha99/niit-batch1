package org.example;

import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

    public static void main(String[] args) {
        // create spring container using xml config file
        // ways to create spring containers
        // 1. BeanFactory(I)
        // 2. applicationContext(I)
        //      impl class - ClassPathXmlApplicationContext
        ApplicationContext context  = new ClassPathXmlApplicationContext("applicationContext.xml" );

        // get bean from container
        Employee e1= (Employee)context.getBean("emp1");
        Employee e2= (Employee)context.getBean("emp2");

        // perform operations using bean
        System.out.println(e1);
        System.out.println(e2);

        // update e1 details
        e1.setContactNo("9999911112");

        System.out.println(e1);

    }
}
