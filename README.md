# bicycleShopERP-SalesModule
 A Spring and ReactJS based web application consisting of Sales and CRM related functionalities, which functions both in an isolated manner and in integration with other distributed Modules of a larger overall ERP system (Production, Warehouse, Material Management). The application was developed to cater to the requirements of a bicycle shop for effective customer management and sales engagement and tracking. This SalesModule application is part of a larger distributed system that consists of the Production, Warehouse and Material management modules. This system is designed to work both in an isolated fashion to carry out it's own CRM and Sales operations as well as work with the disparate ERP modules to carry out integrated operations by consuming and exposing APIs.
 
 
 # System Architecture
 - Monolithic 3-tier MVC architecture
 - Front End Framework - ReactJS
 - Backend Framework - Spring Framework (Java), Hibernate, Lombok, RESTApi
 - Database - MySQL RDBMS 
 
 # Functionalties
- *User Management and Authentication:*
<br />
Both authentication (login and signup ) and profile information handling for sales operatives. 

- *Customer Relations Management:*
<br />
The system should provide a function for the sales representative to keep tracks of leads for promotional targeting. Leads are considered to be potential customers. Furthermore, the system is to allow sales officials to register and manage customers. Also, it is to sales representatives to check previous orders information.

- *Sales Enquires:*
<br />
The system is to allow a sales representative to record an enquiry made by a customer regarding particular item(s). This details various information regarding the customer such as delivery requirements, item’s availability and credit status. Finally the enquiry and related items are reserved for 24hours. 

- *Orders Management:*
<br />
The system should allow orders to be created for customers who responds back to the enquiries made. The order is recorded with the delivery information, requested items, courier information and requested dates. The Orders are to be passed onto various other departments afterwards for further processing.

- *Orders Cancellations Handling:*
<br />
In case a customer wants to cancel a placed order, the sales representative can forward the information to other departments to process the request. This cancellation request is only upheld provided that the production of the particular item hasn’t begun. In case production commencement, the customer will be charged with a penalty fee.
- *Customer Returns Handling:*
<br />
The system is to consist of a function that handles customer returns. In case a customer raises an enquiry to return an item, the item pickup information is recorded along with the type of return which consists of Replace, Repairs or Credit. In case of a credit, the customer is repaid, for repairs sent to the production department and for replace exchanged by another item by the warehouse. All above conditions are considered depending on the condition of the item(s).


# How to run

## Frontend Server:
- Install Nodejs
- Go to the salesreact folder and open termianl
- run following commands
```
npm start
```
## Backend Server:
- Install Eclipse IDE (Spring source toolsuite) or Jetbrains IntelliJ IDE. Both of these have a built in Apache Tomcat server to run spring applications locally.
- Run the backend server through the IDE
- Use the provided .sql file to load the database schema for dummy data (consists of user, products, customer data).

