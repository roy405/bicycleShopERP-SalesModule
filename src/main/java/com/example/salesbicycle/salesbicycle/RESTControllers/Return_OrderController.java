package com.example.salesbicycle.salesbicycle.RESTControllers;

import com.example.salesbicycle.salesbicycle.Models.Return_Order;
import com.example.salesbicycle.salesbicycle.Services.Return_OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/returnOrder")
public class Return_OrderController {

    @Autowired
    private Return_OrderService returnOrderService;

    @GetMapping
    public List<Return_Order> getAllReturnOrder(){return returnOrderService.getAllReturnorder();}

    @GetMapping("/{id}")
    public Return_Order getReturnOrder(@PathVariable("id")String id){return returnOrderService.getReturnOrderById(id);}

    @PostMapping
    public Return_Order createReturnOrder(@RequestBody Return_Order returnOrder){return returnOrderService.saveReturnOrder(returnOrder);}

    @PutMapping
    public Return_Order updateReturnOrder (@RequestBody Return_Order returnOrder) {return returnOrderService.saveReturnOrder(returnOrder);}

    @DeleteMapping("/{id}")
    public void deleteReturnOrder (@PathVariable("id")String id){returnOrderService.deleteReturnOrder(id);}
}
