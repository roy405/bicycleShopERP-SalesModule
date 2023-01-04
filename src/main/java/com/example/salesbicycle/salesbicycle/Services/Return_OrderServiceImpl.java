package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Return_Order;
import com.example.salesbicycle.salesbicycle.Respositories.Return_OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Return_OrderServiceImpl implements Return_OrderService {

    @Autowired
    private Return_OrderRepo returnOrderRepo;
    @Override
    public Return_Order saveReturnOrder(Return_Order returnOrder) {
        return returnOrderRepo.save(returnOrder);
    }

    @Override
    public Return_Order getReturnOrderById(String id) {
        return returnOrderRepo.findById(id).orElse(null);
    }

    @Override
    public void deleteReturnOrder(String id) {
        Return_Order returnOrder = returnOrderRepo.findById(id).orElse(null);
        returnOrderRepo.delete(returnOrder);
    }

    @Override
    public List<Return_Order> getAllReturnorder() {
        return returnOrderRepo.findAll();
    }
}
