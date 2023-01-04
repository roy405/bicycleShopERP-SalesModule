package com.example.salesbicycle.salesbicycle;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SalesbicycleApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalesbicycleApplication.class, args);
	}

}
