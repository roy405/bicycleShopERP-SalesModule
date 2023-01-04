package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Orders;

import java.util.List;

public interface OrdersService {

    Orders saveOrders(Orders orders);

    Orders getOrdersById(String id);

    void deleteOrders(String id);

    List<Orders> getAllOrders();
}
