package com.example.salesbicycle.salesbicycle.Models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
public class Customer_Contacts {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String customer_phone_no;

    @ManyToOne
    private Customers customers;

    public Customer_Contacts(){}

    public Customer_Contacts(String customer_phone_no, Customers customers) {
        this.customer_phone_no = customer_phone_no;
        this.customers = customers;
    }
}
