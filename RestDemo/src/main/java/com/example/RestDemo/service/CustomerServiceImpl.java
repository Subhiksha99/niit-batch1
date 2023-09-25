package com.example.RestDemo.service;

import com.example.RestDemo.entity.Customer;
import com.example.RestDemo.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public Customer getCustomerById(int custId) {
        return custRepo.findById(custId).get();
    }

    @Override
    public Customer updateCustomer(Customer customer) {
        Optional<Customer> optionalObj = custRepo.findById(customer.getCId());
        if(optionalObj.isPresent()) {
            return custRepo.save(customer);
        }
        return null;
    }

    @Override
    public void deleteCustomerById(int custId) {
        Optional<Customer> optionalObj = custRepo.findById(custId);
        if(optionalObj.isPresent()) {
            custRepo.deleteById(custId);
        }
    }

    @Override
    public Customer updateCustomerContactNo(int custId, String contactNo) {
        // verify customer is present in db.
        Optional<Customer> optionalObj = custRepo.findById(custId);
        if(optionalObj.isPresent()) {
           Customer customer = optionalObj.get();
           // update contact no
           customer.setContactNo(contactNo);
           // save updated customer details in db and return
           return custRepo.save(customer);
        }
        return null;
    }

    @Override
    public Customer getCustomerByName(String name) {
        System.out.println(name);
        Customer c= custRepo.findByName(name);
        System.out.println("#########"+c);
        return c;
    }

    @Override
    public Customer getCustomerByEmail(String email) {
        return custRepo.findByEmail(email);

    }

    @Override
    public Customer getCustomerByContactNo(String cNo) {
        return custRepo.getCustomerByContactNo(cNo);
    }
}
