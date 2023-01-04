package com.example.salesbicycle.salesbicycle.RESTControllers;

import com.example.salesbicycle.salesbicycle.Models.Order_History;
import com.example.salesbicycle.salesbicycle.Services.Order_HistoryService;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orderHistory")
public class Order_HistoryController {

    @Autowired
    private Order_HistoryService orderHistoryService;

    @GetMapping
    public List<Order_History> getAllOrderHistory(){return orderHistoryService.getAllOrderHistory();}

    @GetMapping("/{id}")
    public Order_History getOrderHistory(@PathVariable("id")String id){return orderHistoryService.getOrderHistoryById(id);}

    @PostMapping
    public Order_History createOrderHistory(@RequestBody Order_History orderHistory){return orderHistoryService.saveOrderHistory(orderHistory);}

    @PutMapping
    public Order_History updateOrderHistory(@RequestBody Order_History orderHistory){return orderHistoryService.saveOrderHistory(orderHistory);}

    @DeleteMapping("/{id}")
    public void deleteOrderHistory(@PathVariable("id")String id){ orderHistoryService.deleteOrderHistory(id);}
}
