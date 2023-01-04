package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Order_History;
import com.example.salesbicycle.salesbicycle.Respositories.Order_HistoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Order_HistoryServiceImpl implements Order_HistoryService {

    @Autowired
    private Order_HistoryRepo orderHistoryRepo;

    @Override
    public Order_History saveOrderHistory(Order_History orderHistory) {
        return orderHistoryRepo.save(orderHistory);
    }

    @Override
    public Order_History getOrderHistoryById(String id) {
        return orderHistoryRepo.findById(id).orElse(null);
    }

    @Override
    public void deleteOrderHistory(String id) {
        Order_History orderHistory = orderHistoryRepo.findById(id).orElse(null);
        orderHistoryRepo.delete(orderHistory);
    }

    @Override
    public List<Order_History> getAllOrderHistory() {
        return orderHistoryRepo.findAll();
    }
}
