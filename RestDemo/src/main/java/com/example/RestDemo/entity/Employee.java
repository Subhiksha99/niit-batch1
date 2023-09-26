package com.example.RestDemo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
public class Employee  {
    @Id
    @GeneratedValue
    private int empId;
    private String name;
    private String contactNo;

    // OneToOne relationship config
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "email")
    private Login login;

}
