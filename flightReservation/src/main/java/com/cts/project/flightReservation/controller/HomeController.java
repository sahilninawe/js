package com.cts.project.flightReservation.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.flightReservation.model.FlightDetails;
import com.cts.project.flightReservation.service.HomeDetailsService;

@RestController
@RequestMapping("/home")
@CrossOrigin(origins = "http://localhost:4200/")
public class HomeController {
	
	@Autowired
	HomeDetailsService service;
	
	@GetMapping("/classes/{classes}")
	@CrossOrigin(origins = "http://localhost:4200/")
	public List<FlightDetails> filterFlightByClasses(@PathVariable String classes){
		return service.filterFlight(classes);
	}
	
	
	@GetMapping("/route/{source}/{destination}")
	@CrossOrigin(origins = "http://localhost:4200/")
	public List<FlightDetails> filterByRoutes(@PathVariable String source, @PathVariable String destination){
		return service.filterByFlightRoute(source, destination);
	}
	
	@GetMapping("/filter/{source}/{destination}/{classes}/{date}")
	@CrossOrigin(origins = "http://localhost:4200/")
	public Set<FlightDetails> filterFlights(@PathVariable String source,@PathVariable String destination,@PathVariable String classes,@PathVariable  LocalDate date){
		return service.filterFlights(source, destination, classes, date);
	}
	
	
//	@GetMapping("/filter/{source}/{destination}/{classes}")
//	@CrossOrigin(origins = "http://localhost:4200/")
//	public Set<FlightDetails> filterFlights(@PathVariable String source,@PathVariable String destination,@PathVariable String classes){
//		return service.filterFlights(source, destination, classes);
//	}
}
