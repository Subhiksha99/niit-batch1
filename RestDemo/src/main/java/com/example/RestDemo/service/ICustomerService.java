package com.example.RestDemo.service;

import com.example.RestDemo.entity.Customer;

import java.util.List;

public interface ICustomerService {

    List<Customer> getCustomers();
    Customer addCustomer(Customer customer);
    Customer getCustomerById(int custId);
    Customer updateCustomer(Customer customer);

    void deleteCustomerById(int custId);

    Customer updateCustomerContactNo(int custId, String contactNo);
}
