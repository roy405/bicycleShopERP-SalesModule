package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Items;
import com.example.salesbicycle.salesbicycle.Respositories.ItemsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemsServiceImpl implements ItemsService {

    @Autowired
    private ItemsRepo itemsRepository;

    @Override
    public Items saveItems(Items items) {
        return itemsRepository.save(items);
    }

    @Override
    public Items getItemsById(String id) {
        return itemsRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteItems(String id) {
       Items items = itemsRepository.findById(id).orElse(null);
       itemsRepository.delete(items);
    }

    @Override
    public List<Items> getAllItems() {
        return itemsRepository.findAll();
    }
}
