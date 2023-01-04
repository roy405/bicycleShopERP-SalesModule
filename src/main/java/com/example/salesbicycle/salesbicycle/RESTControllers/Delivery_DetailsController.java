package com.example.salesbicycle.salesbicycle.RESTControllers;

import com.example.salesbicycle.salesbicycle.Models.Customers;
import com.example.salesbicycle.salesbicycle.Models.Delivery_Details;
import com.example.salesbicycle.salesbicycle.Models.Orders;
import com.example.salesbicycle.salesbicycle.Services.Delivery_DetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/deliveryDetails")
public class Delivery_DetailsController {

    @Autowired
    private Delivery_DetailsService delivery_detailsService;

    @GetMapping
    public List<Delivery_Details> getAllDeliveryDetails(){

        List<Delivery_Details> deliveryDetailsList = delivery_detailsService.getAllDeliveryDetails();
        List<Delivery_Details> tempDeliveryDetailsList = new ArrayList<>();
        for(Delivery_Details delivery_details: deliveryDetailsList){
            tempDeliveryDetailsList.add(deliveryDetailsFilter(delivery_details));
        }
        return tempDeliveryDetailsList;


    }

    @GetMapping("/{id}")
    public  Delivery_Details getDeliverDetails(@PathVariable("id")String id){return delivery_detailsService.getDeliveryDetailsById(id);}

    @PostMapping
    public Delivery_Details createDeliveryDetails(@RequestBody Delivery_Details delivery_details){return
            deliveryDetailsFilter(delivery_detailsService.saveDeliveryDetails(delivery_details));}

    @PutMapping
    public Delivery_Details updateDeliveryDetails(@RequestBody Delivery_Details deliveryDetails){return delivery_detailsService.saveDeliveryDetails(deliveryDetails);}

    @DeleteMapping("/{id}")
    public void deleteDeliveryDetails(@PathVariable("id")String id){delivery_detailsService.deleteDeliveryDetails(id);};

    public Delivery_Details deliveryDetailsFilter(Delivery_Details delivery_details){

        List<Orders> orders = delivery_details.getOrders();
        List<Orders> tempOrders = new ArrayList();
        for(Orders order: orders ){
            order.setItems(null);
            order.setReturnOrder(null);
            order.setCustomers(null);
            order.setOrderHistory(null);
            order.setOrderCompletion(null);
            order.setDeliveryDetails(null);
            tempOrders.add(order);
        }
        delivery_details.setOrders(tempOrders);

        Customers customers = delivery_details.getCustomers();
        if(customers!=null) {
            customers.setOrders(null);
            customers.setPromotions(null);
            customers.setDeliveryDetails(null);
            customers.setCustomerContacts(null);
            delivery_details.setCustomers(customers);

        }
        return delivery_details;
    }

}
