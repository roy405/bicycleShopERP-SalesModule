package com.example.salesbicycle.salesbicycle.Services;


import com.example.salesbicycle.salesbicycle.Models.Return_Items;

import java.util.List;

public interface Return_ItemsService {

    Return_Items saveReturnItems(Return_Items returnItems);

    Return_Items getReturnItemsById(String id);

    void deleteReturnItems(String id);

    List<Return_Items> getAllReturnsItems();
}
