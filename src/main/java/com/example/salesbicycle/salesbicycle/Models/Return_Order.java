package com.example.salesbicycle.salesbicycle.Models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Return_Order {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String order_details;
    private int order_date;

    @OneToOne
    private Orders orders;

    @OneToMany(mappedBy = "returnOrder", cascade = CascadeType.ALL)
    private List<Return_Items> return_items;

    public Return_Order(){}

    public Return_Order(String order_details, int order_date, Orders orders, List<Return_Items> return_item) {
        this.order_details = order_details;
        this.order_date = order_date;
        this.orders = orders;
        this.return_items = return_item;
    }
}
