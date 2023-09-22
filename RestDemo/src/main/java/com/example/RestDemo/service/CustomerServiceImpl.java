package com.example.RestDemo.service;

import com.example.RestDemo.entity.Customer;
import com.example.RestDemo.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements ICustomerService{

    @Autowired
    ICustomerRepository custRepo;

    @Override
    public List<Customer> getCustomers() {
        return custRepo.findAll();
    }

    @Override
    public Customer addCustomer(Customer customer) {
        return custRepo.save(customer);
    }
}
