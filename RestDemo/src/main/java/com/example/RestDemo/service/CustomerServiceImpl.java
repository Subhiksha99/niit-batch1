package com.example.RestDemo.service;

import com.example.RestDemo.entity.Customer;
import com.example.RestDemo.exception.CustomerNotFoundException;

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
    public Customer getCustomerById(int custId) throws CustomerNotFoundException{
        Optional<Customer> opt = custRepo.findById(custId);
        if(opt.isPresent()) {
            return opt.get();
        }
        throw new CustomerNotFoundException("Customer not found with id: "+custId);
    }

    @Override
    public Customer updateCustomer(Customer customer) throws CustomerNotFoundException {
        Optional<Customer> optionalObj = custRepo.findById(customer.getCId());
        if(optionalObj.isPresent()) {
            return custRepo.save(customer);
        }
        throw new CustomerNotFoundException("Customer not found with name: "+customer.getName());
    }

    @Override
    public void deleteCustomerById(int custId) {
        Optional<Customer> optionalObj = custRepo.findById(custId);
        if(optionalObj.isPresent()) {
            custRepo.deleteById(custId);
        }
    }

    @Override
    public Customer updateCustomerContactNo(int custId, String contactNo) throws CustomerNotFoundException {
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
        //return throw new CustomerNotFoundException("Customer Not Found with id: "+ custId);
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
        //Customer c = custRepo.getCustomerByContactNo(cNo);

        return custRepo.getCustomerByContactNo(cNo);
    }
}
