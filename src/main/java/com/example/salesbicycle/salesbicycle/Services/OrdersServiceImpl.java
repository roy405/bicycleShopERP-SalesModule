package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Orders;
import com.example.salesbicycle.salesbicycle.Respositories.OrdersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersServiceImpl implements OrdersService {

    @Autowired
    private OrdersRepo ordersRepo;

    @Override
    public Orders saveOrders(Orders orders) {
        return ordersRepo.save(orders);
    }

    @Override
    public Orders getOrdersById(String id) {
        return ordersRepo.findById(id).orElse(null);
    }

    @Override
    public void deleteOrders(String id) {
        Orders orders = ordersRepo.findById(id).orElse(null);
        ordersRepo.delete(orders);
    }

    @Override
    public List<Orders> getAllOrders() {
        List<Orders> list = ordersRepo.findAll();
        return list;
    }
}
