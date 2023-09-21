package org.example;

import org.springframework.stereotype.Component;


public class Address {

    // Fields
    private int addrId;
    private String dNo;
    private String city;

    // Constructors
    public Address() {}
    public Address(int addrId, String dNo, String city) {
        this.addrId = addrId;
        this.dNo= dNo;
        this.city = city;
    }

    // Getters & Setters

    public int getAddrId() {
        return addrId;
    }

    public void setAddrId(int addrId) {
        this.addrId = addrId;
    }

    public String getdNo() {
        return dNo;
    }

    public void setdNo(String dNo) {
        this.dNo = dNo;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    // toString

    @Override
    public String toString() {
        return "Address{" +
                "addrId=" + addrId +
                ", dNo='" + dNo + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
