package com.example.salesbicycle.salesbicycle.Models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Order_History {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String status;
    private String type;
    private String date;

    @OneToOne
    private Orders orders;

    public Order_History(){}

    public Order_History(String status, String type, String date, Orders orders) {
        this.status = status;
        this.type = type;
        this.date = date;
        this.orders = orders;
    }
}
