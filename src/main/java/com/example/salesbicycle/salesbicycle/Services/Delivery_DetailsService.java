package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Delivery_Details;

import java.util.List;


public interface Delivery_DetailsService {

    Delivery_Details saveDeliveryDetails(Delivery_Details deliveryDetails);

    Delivery_Details getDeliveryDetailsById(String id);

    void deleteDeliveryDetails(String id);

    List<Delivery_Details> getAllDeliveryDetails();
}
