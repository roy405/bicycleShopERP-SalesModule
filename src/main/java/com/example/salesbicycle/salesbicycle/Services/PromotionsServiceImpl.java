package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Promotions;
import com.example.salesbicycle.salesbicycle.Respositories.PromotionsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PromotionsServiceImpl implements PromotionsService{

    @Autowired
    private PromotionsRepo promotionsRepo;

    @Override
    public Promotions savePromotions(Promotions promotions) {
        return promotionsRepo.save(promotions);
    }

    @Override
    public Promotions getPromotionsById(String id) {
        return promotionsRepo.findById(id).orElse(null);
    }

    @Override
    public void deletePromotions(String id) {
        Promotions promotions = promotionsRepo.findById(id).orElse(null);
        promotionsRepo.delete(promotions);
    }

    @Override
    public List<Promotions> getAllPromotions() {
        return promotionsRepo.findAll();
    }
}
