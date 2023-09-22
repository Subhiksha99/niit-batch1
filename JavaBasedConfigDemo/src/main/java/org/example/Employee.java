package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Employee {

    // Fields
    private int empId;
    private String empName;
    private String contactNo;

    // Field Injection
    @Autowired
    private Address address;

    // constructors
    public Employee() {}


    public Employee(int empId, String empName, String contactNo, Address address) {
        this.empId = empId;
        this.empName = empName;
        this.contactNo = contactNo;
        this.address = address;
    }

    // Constructor Injection
    //@Autowired
    public Employee(Address address) {
        this.address=address;
    }

    // Getters & Setters

    public int getEmpId() {
        return empId;
    }

    public void setEmpId(int empId) {
        this.empId = empId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public Address getAddress() {
        return address;
    }

    // Setter Injection
    //@Autowired
    public void setAddress(Address address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "empId=" + empId +
                ", empName='" + empName + '\'' +
                ", contactNo='" + contactNo + '\'' +
                ", address=" + address +
                '}';
    }
}
