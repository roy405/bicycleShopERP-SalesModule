package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Return_Order;
import org.springframework.stereotype.Service;

import java.util.List;


public interface Return_OrderService {

    Return_Order saveReturnOrder(Return_Order returnOrder);

    Return_Order getReturnOrderById(String id);

    void deleteReturnOrder(String id);

    List<Return_Order> getAllReturnorder();
}
