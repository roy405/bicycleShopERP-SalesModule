package com.example.salesbicycle.salesbicycle.Models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

/*ManyToMany*/

@Data
@Entity
public class Promotions {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String promotion_title;
    private String promotion_details;

    @ManyToMany(mappedBy = "promotions")
    private List<Customers> customers;

    public Promotions(){}

    public Promotions(String promotion_title, String promotion_details, List<Customers> customers) {
        this.promotion_title = promotion_title;
        this.promotion_details = promotion_details;
        this.customers = customers;
    }
}
