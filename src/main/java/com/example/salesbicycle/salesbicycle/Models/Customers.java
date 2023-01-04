package com.example.salesbicycle.salesbicycle.Models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Customers {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String first_name;
    private String last_name;
    private String trading_name_ifbusiness;
    private String billing_address;
    private String collection_address_for_returns;
    private String email;

    @OneToMany(mappedBy = "customers", cascade = CascadeType.ALL)
    private List<Orders> orders;

    @OneToMany(mappedBy = "customers", cascade = CascadeType.ALL)
    private List<Delivery_Details> deliveryDetails;

    @OneToMany(mappedBy = "customers", cascade = CascadeType.ALL)
    private List<Customer_Contacts> customerContacts;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "customers_promotions",
            joinColumns = @JoinColumn(name = "customer_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "promotions_id", referencedColumnName = "id"))
    private List<Promotions> promotions;

    public Customers(){}

    public Customers(String first_name, String last_name, String trading_name_ifbusiness, String billing_address, String collection_address_for_returns, String email, List<Orders> orders, List<Delivery_Details> deliveryDetails, List<Customer_Contacts> customerContacts, List<Promotions> promotions) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.trading_name_ifbusiness = trading_name_ifbusiness;
        this.billing_address = billing_address;
        this.collection_address_for_returns = collection_address_for_returns;
        this.email = email;
        this.orders = orders;
        this.deliveryDetails = deliveryDetails;
        this.customerContacts = customerContacts;
        this.promotions = promotions;
    }
}

