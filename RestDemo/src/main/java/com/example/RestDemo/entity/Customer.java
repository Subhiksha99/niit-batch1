package com.example.RestDemo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

@Data
//@Getter
//@Setter
// @NoArgsConstructor
//@AllArgsConstructor
//@ToString
//@EqualsAndHashCode
@Entity
public class Customer {
    // Fields
    @Id
    @GeneratedValue
    private int cId;
    @Getter
    @Setter
    private String name;
    private String contactNo;
    private String email;

}
