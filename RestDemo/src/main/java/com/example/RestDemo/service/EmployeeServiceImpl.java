package com.example.RestDemo.service;

import com.example.RestDemo.entity.Employee;
import com.example.RestDemo.repository.IEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements IEmployeeService{

    @Autowired
    IEmployeeRepository empRepo;

    @Override
    public Employee addEmployee(Employee emp) {
        return empRepo.save(emp);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return empRepo.findAll();
    }

    @Override
    public Employee getEmployeeById(int id) {
        return empRepo.findById(id).get();
    }
}
