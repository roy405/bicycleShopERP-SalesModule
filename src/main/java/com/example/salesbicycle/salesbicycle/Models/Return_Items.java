package com.example.salesbicycle.salesbicycle.Models;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Return_Items {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String return_item_name;
    private double return_item_quantity;
    private String return_type;

    @ManyToOne
    private Return_Order returnOrder;

    public Return_Items(){}

    public Return_Items(String return_item_name, double return_item_quantity, String return_type, Return_Order returnOrder) {
        this.return_item_name = return_item_name;
        this.return_item_quantity = return_item_quantity;
        this.return_type = return_type;
        this.returnOrder = returnOrder;
    }
}
