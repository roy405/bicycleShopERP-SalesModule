package com.example.salesbicycle.salesbicycle.RESTControllers;

import com.example.salesbicycle.salesbicycle.Models.*;
import com.example.salesbicycle.salesbicycle.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class OrdersController {

    @GetMapping("/schedule")
    @Scheduled(fixedRate = 5000)
    private String test(){
        System.out.println("test");
        return "test";
    }

    @Autowired
    private OrdersService ordersService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private Delivery_DetailsService delivery_detailsService;

    @Autowired
    private ItemsService itemsService;

    @GetMapping
    public List<Orders> getAllOrders() {
        List<Orders> ordersList = ordersService.getAllOrders();
        List<Orders> tempOrdersList = new ArrayList<>();
        for(Orders order : ordersList){
            tempOrdersList.add(getOrderstoDTO(order));
        }
        return tempOrdersList;
    }

    @GetMapping("/{id}")
    public Orders getOrders(@PathVariable("id")String id){return getOrderstoDTO(ordersService.getOrdersById(id));}

    @PostMapping
    public Orders createOrders(@RequestBody Orders orders){
        System.out.println("orders" +orders);

        Delivery_Details delivery_details = orders.getDeliveryDetails();
        delivery_details = delivery_detailsService.saveDeliveryDetails(delivery_details);

        System.out.println("customer" + orders.getCustomers().getFirst_name());

        List<Items> items = orders.getItems();
        List<Items> tempItems = new ArrayList<>();
//        System.out.println("items"+ items.get(0).getId());


        //orders.setItems(tempItems);
        orders.setDeliveryDetails(delivery_details);
        orders = ordersService.saveOrders(orders);

        for (Items item: items) {
            item.setOrders(orders);
            item = itemsService.saveItems(item);
            tempItems.add(item);
        }
        orders.setItems(tempItems);

        orders = getOrderstoDTO(orders);

        return orders;
    }

    @PostMapping("/productionOrder")
    public Orders getProductionOrders(@RequestBody  Orders orders){

        List<Orders> orderList = ordersService.getAllOrders();
        if(orderList.size()!= 0) {
            for (int i = 0; i < orderList.size(); i++) {
                if (orders.getId().equals(orderList.get(i).getId())) {
                    orderList.get(i).setOrder_due_date(orders.getOrder_due_date());
                    orderList.get(i).setOrder_status(orders.getOrder_status());
                    ordersService.saveOrders(orderList.get(i));
                }
            }
        }
        return orders;
    }

    @PostMapping("materialManagementOrder")
    public Orders getMaterialMangemenentOrders(@RequestBody Orders orders){
        for(Items item : orders.getItems()){
            Items myItem = itemsService.getItemsById(item.getId());
            myItem.setStatus(item.getStatus());
            itemsService.saveItems(myItem);
        }


//        List<Orders> ordersList = ordersService.getAllOrders();
//        List<Items> ordersItemsList = orders.getItems();
//        ItemsController itemsController = new ItemsController();
//        for(int k=0; k<ordersItemsList.size(); k++) {
//            if (ordersList.size() != 0) {
//                System.out.println("orderItemList" +ordersItemsList.size());
//                for (int i = 0; i < ordersList.size(); i++) {
//                    if (ordersList.get(i).getId().equals(orders.getId())) {
//                        System.out.println("ordersList" +ordersList.size());
//                        List<Items> itemsList = ordersList.get(i).getItems();
//                        List<Items> tempItemsList = new ArrayList<>();
//                        for(Items items: itemsList){
//                            tempItemsList.add(itemsController.itemsFilter(items));
//                        }
//                        for (int j = 0; j < tempItemsList.size(); j++) {
//                            if(tempItemsList.get(j).getProdId().equals(ordersItemsList.get(k).getProdId())) {
//                                System.out.println("itemList" +itemsList.size());
//                                itemsList.get(j).setStatus(ordersItemsList.get(k).getStatus());
//                                ordersService.saveOrders(ordersList.get(i));
//                                System.out.println("order" +ordersList.get(i));
//                            }
//                        }
//                    }
//                }
//            }
//        }
        return orders;
        }



    public Orders getOrderstoDTO(Orders order){
        List<Items> items = order.getItems();
        List<Items> tempItems = new ArrayList<>();
        for (Items item: items) {
            item.setOrders(null);
            tempItems.add(item);
        }
        order.setItems(tempItems);

        Customers customer = order.getCustomers();
        customer.setOrders(null);
        order.setCustomers(customer);

        Delivery_Details deliveryDetails = order.getDeliveryDetails();
        deliveryDetails.setOrders(null);
        order.setDeliveryDetails(deliveryDetails);

        Order_Completion orderCompletion = order.getOrderCompletion();
        if(orderCompletion!=null){
            orderCompletion.setOrders(null);
            order.setOrderCompletion(orderCompletion);
        }


        Order_History orderHistory = order.getOrderHistory();
        if(orderHistory!=null) {
            orderHistory.setOrders(null);
            order.setOrderHistory(orderHistory);
        }

        Return_Order returnOrder = order.getReturnOrder();
        if(returnOrder!=null) {
            returnOrder.setOrders(null);
            order.setReturnOrder(returnOrder);
        }

        return order;
    }

    @PutMapping
    public Orders updateOrders(@RequestBody Orders orders){

        return getOrderstoDTO(ordersService.saveOrders(orders));
    }



//    @PutMapping("/reserveStocks")
//    public Orders reserveStocks(@RequestBody Orders orders){
//        private String prodId = orders.getItems
//        return null;
//    }


    @DeleteMapping("/{id}")
    public void deleteOrders(@PathVariable("id")String id){ordersService.deleteOrders(id);}

}

