package com.example.RestDemo.controller;

import com.example.RestDemo.entity.Customer;
import com.example.RestDemo.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    private ICustomerService customerService;

    // GET
    @GetMapping("/")
    public List<Customer> getCustomers() {
          return  customerService.getCustomers();
    }

    // DELETE

    // POST

    @PostMapping("/customer/add")
    public Customer addCustomer(@RequestBody Customer customer)  {
        return customerService.addCustomer(customer);
    }
    // UPDATE
}
