package com.example.salesbicycle.salesbicycle.Models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
 /*ManyToMany */
@Data
@Entity
public class Orders {

     @Id @GeneratedValue(generator="system-uuid")
     @GenericGenerator(name="system-uuid", strategy = "uuid")
     private String id;

    private String order_title;
    private String order_details;
    private String order_due_date;
    private String order_placement_date;
    private String order_status;
    private String payment_status;
    private String transaction_type;
    private double order_price;
    private double cancellation_penalty;

    @ManyToOne
    private Delivery_Details deliveryDetails;

    @ManyToOne
    private Customers customers;

    @OneToOne
    private Order_History orderHistory;

    @OneToOne
    private Order_Completion orderCompletion;

    @OneToOne
    private Return_Order returnOrder;

    @OneToMany(mappedBy = "orders", cascade = CascadeType.ALL)
    private List<Items> items;

    public Orders(){}

 }
