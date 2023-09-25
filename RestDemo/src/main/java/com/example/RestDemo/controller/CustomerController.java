package com.example.RestDemo.controller;

import com.example.RestDemo.entity.Customer;
import com.example.RestDemo.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    private ICustomerService customerService;

    // GET - all customers
    @GetMapping("/")
    public List<Customer> getCustomers() {
          return  customerService.getCustomers();
    }

    // GET - specific customer
    @GetMapping("/customer/{id}")
    public Customer getCustomerById(@PathVariable("id") int custId) {
        return  customerService.getCustomerById(custId);
    }

    // DELETE
    @DeleteMapping("/customer/{id}")
    public void deleteCustomerById(@PathVariable("id") int custId) {
        customerService.deleteCustomerById(custId);
    }

    // POST
    @PostMapping("/customer/add")
    public Customer addCustomer(@RequestBody Customer customer)  {
        return customerService.addCustomer(customer);
    }

    // PUT - update more than one property
    @PutMapping("/customer/update")
    public Customer updateCustomer(@RequestBody Customer customer)  {
        return customerService.updateCustomer(customer);
    }

    // PATCH - update specific property
    @PatchMapping ("/customer/update/{id}")
    public Customer updateCustomerContactNo(@RequestBody String contactNo, @PathVariable("id") int custId)  {
        return customerService.updateCustomerContactNo(custId, contactNo);
    }

    // Get - customer by name
    @GetMapping("/customer/byName/{cName}")
    public Customer getCustomerByName(@PathVariable("cName") String name) {
        return customerService.getCustomerByName(name);
    }

    // Get - customer by name
    @GetMapping("/customer/byEmail/{email}")
    public Customer getCustomerByEmail(@PathVariable("email") String email) {
        return customerService.getCustomerByEmail(email);
    }

    @GetMapping("/customer/byCNo/{cNo}")
    public Customer getCustomerByContactNo(@PathVariable("cNo") String no) {
        return customerService.getCustomerByContactNo(no);
    }
}
