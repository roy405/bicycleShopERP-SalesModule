package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Order_Completion;

import java.util.List;

public interface Order_CompletionService {

    Order_Completion saveOrder_Completion(Order_Completion orderCompletion);

    Order_Completion getOrderCompletionById(String id);

    void deleteOrderCompletion(String id);

    List<Order_Completion> getAllOrderCompletion();
}
