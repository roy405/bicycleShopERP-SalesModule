package com.example.salesbicycle.salesbicycle.Models;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
@Entity
public class Items {

    @Id
    @GeneratedValue (generator ="system-uuid")
    @GenericGenerator(name="system-uuid", strategy ="uuid")
    private String id;

    private Integer prodId;
    private String prodName;
    private int qty;
    private String status;
    private String type;

    @ManyToOne
    private Orders orders;

    private Items(){

    }
}
