package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Promotions;

import java.util.List;

public interface PromotionsService {

    Promotions savePromotions(Promotions promotions);

    Promotions getPromotionsById(String id);

    void deletePromotions(String id);

    List<Promotions> getAllPromotions();
}
