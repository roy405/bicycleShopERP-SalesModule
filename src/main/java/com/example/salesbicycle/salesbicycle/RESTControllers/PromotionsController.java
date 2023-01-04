package com.example.salesbicycle.salesbicycle.RESTControllers;

import com.example.salesbicycle.salesbicycle.Models.Promotions;
import com.example.salesbicycle.salesbicycle.Services.PromotionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/promotions")
public class PromotionsController {

    @Autowired
    private PromotionsService promotionsService;

    @GetMapping
    public List<Promotions> getAllPromotions(){return promotionsService.getAllPromotions();}

    @GetMapping("/{id}")
    public Promotions getPromotions(@PathVariable("id")String id){return promotionsService.getPromotionsById(id);}

    @PostMapping
    public Promotions createPromotions(@RequestBody Promotions promotions){return promotionsService.savePromotions(promotions);}
    @PutMapping
    public Promotions updatePromotions(@RequestBody Promotions promotions){return promotionsService.savePromotions(promotions);}

    @DeleteMapping("/{id}")
    public void deletePromotions(@PathVariable("id")String id){promotionsService.deletePromotions(id);}
}
