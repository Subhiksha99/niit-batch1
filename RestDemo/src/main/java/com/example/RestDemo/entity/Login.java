package com.example.RestDemo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
public class Login {
    @Id
    private String email;
    private String password;
    private String role;
    private  boolean loginStatus;
}
