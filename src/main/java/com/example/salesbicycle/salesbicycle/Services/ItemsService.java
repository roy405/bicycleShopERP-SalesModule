package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Items;

import java.util.List;


public interface ItemsService {

    Items saveItems(Items items);

    Items getItemsById(String id);

    void deleteItems(String id);

    List<Items> getAllItems();
}
