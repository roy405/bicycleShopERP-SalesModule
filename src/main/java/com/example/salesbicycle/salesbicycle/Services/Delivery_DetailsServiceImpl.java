package com.example.salesbicycle.salesbicycle.Services;

import com.example.salesbicycle.salesbicycle.Models.Delivery_Details;
import com.example.salesbicycle.salesbicycle.Respositories.Delivery_DetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Delivery_DetailsServiceImpl implements  Delivery_DetailsService {

    @Autowired
    private Delivery_DetailsRepo deliveryDetailsRepository;

    @Override
    public Delivery_Details saveDeliveryDetails(Delivery_Details deliveryDetails) {
        return deliveryDetailsRepository.save(deliveryDetails);
    }

    @Override
    public Delivery_Details getDeliveryDetailsById(String id) {
        return deliveryDetailsRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteDeliveryDetails(String id) {
         Delivery_Details deliverDetails = deliveryDetailsRepository.findById(id).orElse(null);
         deliveryDetailsRepository.delete(deliverDetails);
    }

    @Override
    public List<Delivery_Details> getAllDeliveryDetails() {
        return deliveryDetailsRepository.findAll();
    }
}
