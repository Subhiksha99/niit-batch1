package com.example.RestDemo.repository;

import com.example.RestDemo.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    Customer findByName(String name);
    Customer findByEmail(String email);

    //@Query(value="select * from customer where contact_no=:cNo", nativeQuery=true)
    //Customer getCustomerByContactNo(@Param("cNo") String no);

    // JPQL - Java persistance Query language
    @Query("select c from Customer as c where c.contactNo=:cNo")
    Customer getCustomerByContactNo(@Param("cNo") String no);
}
