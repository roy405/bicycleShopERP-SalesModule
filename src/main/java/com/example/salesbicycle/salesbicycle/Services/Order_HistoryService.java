package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Order_History;

import java.util.List;

public interface Order_HistoryService {

    Order_History saveOrderHistory(Order_History orderHistory);

    Order_History getOrderHistoryById(String id);

    void deleteOrderHistory(String id);

    List<Order_History> getAllOrderHistory();
}
