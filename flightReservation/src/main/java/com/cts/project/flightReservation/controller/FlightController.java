package com.cts.project.flightReservation.controller;

import java.sql.Time;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.flightReservation.exception.DetailsNotFoundException;
import com.cts.project.flightReservation.model.FlightDetails;
import com.cts.project.flightReservation.service.FlightService;

@RestController
@RequestMapping("/flight")
@CrossOrigin(origins = "http://localhost:4200/")
public class FlightController {
	
	@Autowired
	FlightService service;
	
//	@Autowired
//	HomePageDetailsRepository repo;
	
	@GetMapping("/{id}")
	@CrossOrigin(origins = "http://localhost:4200/")
	public Optional<FlightDetails> retrieveById(@PathVariable int id){
		Optional<FlightDetails> flight =  service.findByid(id);
		if(flight.isEmpty()) {
			throw new DetailsNotFoundException("flight id is invalid:"+id);
		}
		return flight;
	}
	
	@GetMapping("/all")
	@CrossOrigin(origins = "http://localhost:4200/")
	public List<FlightDetails> retrieveAll(){
		return service.findall();
	}
	
	@PostMapping("/add")
	@CrossOrigin(origins = "http://localhost:4200/")
	public FlightDetails createFlight(@RequestBody FlightDetails route) {
		return service.save(route);
	}
	
	@PutMapping("/update/{id}")
	@CrossOrigin(origins = "http://localhost:4200/")
	public FlightDetails updateFlight(@RequestBody FlightDetails route,@PathVariable int id) {
		return service.updateflight(route);
	}
	
	@DeleteMapping("/delete/{id}")
	@CrossOrigin(origins = "http://localhost:4200/")
	public void deleteId(@PathVariable int id) {
		service.deleteByid(id);
	}
	
//	@PostMapping("/checkavailable")
//	@CrossOrigin(origins = "http://localhost:4200/")
//	public void availableFlight(@RequestBody HomePageDetails home) {
//		repo.save(home);
//	}
}
