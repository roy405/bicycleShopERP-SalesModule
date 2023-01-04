package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Return_Items;
import com.example.salesbicycle.salesbicycle.Respositories.Return_ItemsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Return_ItemsServiceImpl implements Return_ItemsService {

    @Autowired
    private Return_ItemsRepo returnItemsRepo;

    @Override
    public Return_Items saveReturnItems(Return_Items returnItems) {
        return returnItemsRepo.save(returnItems);
    }

    @Override
    public Return_Items getReturnItemsById(String id) {
        return returnItemsRepo.findById(id).orElse(null);
    }

    @Override
    public void deleteReturnItems(String id) {
        Return_Items returnItems = returnItemsRepo.findById(id).orElse(null);
        returnItemsRepo.delete(returnItems);
    }

    @Override
    public List<Return_Items> getAllReturnsItems() {
        return returnItemsRepo.findAll();
    }
}
