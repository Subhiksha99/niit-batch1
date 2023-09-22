package com.example.RestDemo.service;

import com.example.RestDemo.entity.Customer;

import java.util.List;

public interface ICustomerService {

    List<Customer> getCustomers();
    Customer addCustomer(Customer customer);
}
