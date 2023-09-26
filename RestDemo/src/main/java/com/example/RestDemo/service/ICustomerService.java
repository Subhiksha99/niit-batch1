package com.example.RestDemo.service;

import com.example.RestDemo.dto.CustomerDto;
import com.example.RestDemo.entity.Customer;
import com.example.RestDemo.exception.CustomerNotFoundException;

import java.util.List;

public interface ICustomerService {

    List<Customer> getCustomers();
    Customer addCustomer(Customer customer);
    Customer getCustomerById(int custId) throws CustomerNotFoundException;
    Customer updateCustomer(Customer customer) throws CustomerNotFoundException;

    void deleteCustomerById(int custId);

    Customer updateCustomerContactNo(int custId, String contactNo) throws CustomerNotFoundException;

    Customer getCustomerByName(String name);

    Customer getCustomerByEmail(String email);
    Customer getCustomerByContactNo(String cNo);

    CustomerDto getCustomerByNameDto(String name);
}
