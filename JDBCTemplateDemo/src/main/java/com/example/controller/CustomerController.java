package com.example.controller;
import com.example.dao.CustomerDao;
import com.example.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.example.model.Customer;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {

        @Autowired
        CustomerDao custDao;

        // SAVE
        @PostMapping("/customer/add")
        public int saveCustomer(@RequestBody Customer c) {
            System.out.println("######controller-c"+c);
            return custDao.saveCustomer(c);
        }

        // UPDATE
        @PutMapping("/customer/update")
        public int updateCustomer(@RequestBody Customer c) {
            return custDao.updateCustomer(c);
        }

        // DELETE
        @DeleteMapping("/customer/delete/{id}")
        public int deleteCustomer(@PathVariable int id) {
            return custDao.deleteCustomer(id);
        }

        // GET - All Customers
        @GetMapping("/customer/all")
        public List<Customer> getCustomers() {
            return custDao.getCustomers();
        }
    }


