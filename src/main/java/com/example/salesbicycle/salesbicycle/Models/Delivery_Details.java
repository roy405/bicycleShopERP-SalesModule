package com.example.salesbicycle.salesbicycle.Models;

import lombok.Data;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Delivery_Details {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String delivery_type;
    private String shipping_address;

    @OneToMany(mappedBy = "deliveryDetails", cascade = CascadeType.ALL)
    private List<Orders> orders;

    @ManyToOne
    private Customers customers;

    public Delivery_Details(){}

}
