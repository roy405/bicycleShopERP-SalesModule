package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Order_Completion;
import com.example.salesbicycle.salesbicycle.Respositories.Order_CompletionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Order_CompletionServiceImpl implements Order_CompletionService{

    @Autowired
    private Order_CompletionRepo orderCompletionRepo;
    @Override
    public Order_Completion saveOrder_Completion(Order_Completion orderCompletion) {
        return orderCompletionRepo.save(orderCompletion);
    }

    @Override
    public Order_Completion getOrderCompletionById(String id) {
        return orderCompletionRepo.findById(id).orElse(null);
    }

    @Override
    public void deleteOrderCompletion(String id) {
        Order_Completion orderCompletion = orderCompletionRepo.findById(id).orElse(null);
        orderCompletionRepo.delete(orderCompletion);
    }

    @Override
    public List<Order_Completion> getAllOrderCompletion() {
        return orderCompletionRepo.findAll();
    }
}
