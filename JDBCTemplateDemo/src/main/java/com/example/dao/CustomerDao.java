package com.example.dao;

import com.example.model.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CustomerDao {

    // JdbcTemplate property
    @Autowired
    private JdbcTemplate jdbcTemplate;

    // Methods
    // Save Customer
    public int saveCustomer(Customer c) {
        // Note - db & table should be there
        System.out.println(c);
        // insert into customer values(1001, 'Ram', '9999912360', 'ram@example.com';
        String query = "insert into customer values('"+c.getId()+"','"+c.getName()+"','"+c.getContactNo()+"','"+c.getEmail()+"','"+0000+"')";
        System.out.println(query);
        return jdbcTemplate.update(query);
    }

    // Update Customer
	/* SQL Query
	  UPDATE table_name
        SET column1 = value1, column2 = value2, ...
        WHERE condition;
   */

    public int updateCustomer(Customer c) {
        System.out.println("######c: "+c);
        String query="update customer set id='"+c.getId()+"', name='"+c.getName()+"',contact_no='"+c.getContactNo()+"',email='"+c.getEmail()+"' where id='"+c.getId()+"'";
        return jdbcTemplate.update(query);
    }


    // Delete Customer
	/* SQL Query
		"DELETE from customer where id=1"
	*/

    public int deleteCustomer(int id) {
        String query = "delete from customer where id='"+id+"'";
        return jdbcTemplate.update(query);
    }

    // GET All - ResultSetExtractor(I) - accepts ResultSet and returns list
    public List<Customer> getCustomers() {
        return jdbcTemplate.query("select * from customer", new ResultSetExtractor<List<Customer>>() {

                    public List<Customer> extractData(ResultSet rs) throws SQLException,
                            DataAccessException {

                        List<Customer> list = new ArrayList<Customer>();
                        while (rs.next()) {
                            Customer c = new Customer();
                            c.setId(rs.getInt(1));
                            c.setName(rs.getString(2));
                            c.setContactNo(rs.getString(3));
                            c.setEmail(rs.getString(4));
                            list.add(c);
                        } // while
                        return list;
                    } // extractData
                }//ResultSetExtractor
        ); // query
    };// Method

    // *** GET All  - RowMapper(I) - reduces code length

}

