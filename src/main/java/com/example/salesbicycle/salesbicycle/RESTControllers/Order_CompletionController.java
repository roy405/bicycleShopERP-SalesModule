package com.example.salesbicycle.salesbicycle.RESTControllers;

import com.example.salesbicycle.salesbicycle.Models.Order_Completion;
import com.example.salesbicycle.salesbicycle.Services.Order_CompletionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orderCompletion")
public class Order_CompletionController {

    @Autowired
    private Order_CompletionService orderCompletionService;

    @GetMapping
    public List<Order_Completion> getAllOrderCompletion(){return orderCompletionService.getAllOrderCompletion();}

    @GetMapping("/{id}")
    public Order_Completion getOrderCompletion(@PathVariable("id")String id){return orderCompletionService.getOrderCompletionById(id);}

    @PostMapping
    public Order_Completion createOrderCompletion(@RequestBody Order_Completion orderCompletion){return orderCompletionService.saveOrder_Completion(orderCompletion);}

    @PutMapping
    public Order_Completion updateOrderCompletion(@RequestBody Order_Completion orderCompletion){return orderCompletionService.saveOrder_Completion(orderCompletion);}

    @DeleteMapping("/{id}")
    public void deleteOrderCompletion(@PathVariable("id")String id){orderCompletionService.deleteOrderCompletion(id);}
}
