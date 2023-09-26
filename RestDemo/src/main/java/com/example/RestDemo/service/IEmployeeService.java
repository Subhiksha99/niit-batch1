package com.example.RestDemo.service;

import com.example.RestDemo.entity.Employee;

import java.util.List;

public interface IEmployeeService {

    Employee addEmployee(Employee emp);
    List<Employee> getAllEmployees();
    Employee getEmployeeById(int id);
}
