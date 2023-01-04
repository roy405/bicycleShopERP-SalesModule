package com.example.salesbicycle.salesbicycle.RESTControllers;

import com.example.salesbicycle.salesbicycle.Models.Items;
import com.example.salesbicycle.salesbicycle.Models.Orders;
import com.example.salesbicycle.salesbicycle.Services.ItemsService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemsController {

    @Autowired
    private ItemsService itemsService;

    @GetMapping
    public List<Items> getAllItems(){
        List<Items> itemsList = itemsService.getAllItems();
        List<Items> tempItemsList = new ArrayList<>();
        for(Items items: itemsList){
            tempItemsList.add(itemsFilter(items));
        }
        return tempItemsList;
    }

    @GetMapping("/{id}")
    public Items getItems(@PathVariable("id") String id) {return itemsService.getItemsById(id); }

    @PostMapping
    public Items createItems(@RequestBody Items items){return itemsFilter(itemsService.saveItems(items));}

    @PutMapping
    public Items updateItems (@RequestBody Items items) {return itemsService.saveItems(items);}

    @DeleteMapping("/{id}")
    public void deleteItems(@PathVariable("id") String id){itemsService.deleteItems(id);}

    public Items itemsFilter(Items items){

        Orders orders = items.getOrders();
        if(orders!=null) {
            orders.setItems(null);
            orders.setCustomers(null);
            orders.setDeliveryDetails(null);
            orders.setOrderHistory(null);
            orders.setOrderCompletion(null);
            orders.setReturnOrder(null);
            items.setOrders(orders);
        }
        return items;
    }
}
