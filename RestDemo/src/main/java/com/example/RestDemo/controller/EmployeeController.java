package com.example.RestDemo.controller;

import com.example.RestDemo.entity.Employee;
import com.example.RestDemo.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {
    @Autowired
    IEmployeeService empServ;

    // ADD
    @PostMapping("/emp/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee emp) {
        Employee newEmp = empServ.addEmployee(emp);
        return new ResponseEntity<>(newEmp, HttpStatus.ACCEPTED); // 201 accepted
    }

    @GetMapping("/emp/all")
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> emps = empServ.getAllEmployees();
        return new ResponseEntity<List<Employee>>(emps, HttpStatus.OK);// 200 Ok
    }



}
