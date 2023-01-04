package com.example.salesbicycle.salesbicycle.Models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
public class Order_Completion {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String department_no;
    private String completed_order_date;

    @OneToOne
    private Orders orders;

    public Order_Completion(){}

    public Order_Completion(String department_no, String completed_order_date, Orders orders) {
        this.department_no = department_no;
        this.completed_order_date = completed_order_date;
        this.orders = orders;
    }
}

