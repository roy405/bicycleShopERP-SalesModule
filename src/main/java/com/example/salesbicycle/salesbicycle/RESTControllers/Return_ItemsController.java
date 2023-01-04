package com.example.salesbicycle.salesbicycle.RESTControllers;

import com.example.salesbicycle.salesbicycle.Models.Return_Items;
import com.example.salesbicycle.salesbicycle.Services.Return_ItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/returnItem")
public class Return_ItemsController {

    @Autowired
    private Return_ItemsService returnItemsService;

    @GetMapping
    public List<Return_Items> getAllReturnItems(){return returnItemsService.getAllReturnsItems();}
    @GetMapping("/{id}")
    public Return_Items getReturnItems(@PathVariable("id")String id){return returnItemsService.getReturnItemsById(id);}
    @PostMapping
    public Return_Items createReturnItems(@RequestBody Return_Items returnItem) {return returnItemsService.saveReturnItems(returnItem);}

    @PutMapping
    public Return_Items updateReturnItems(@RequestBody Return_Items returnItems){return returnItemsService.saveReturnItems(returnItems);}

    @DeleteMapping("/{id}")
    public void deleteReturnItems(@PathVariable("id")String id){returnItemsService.deleteReturnItems(id);}
}
