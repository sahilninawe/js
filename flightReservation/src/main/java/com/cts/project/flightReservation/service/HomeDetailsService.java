package com.cts.project.flightReservation.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.project.flightReservation.model.RouteDetails;
import com.cts.project.flightReservation.model.FlightDetails;
import com.cts.project.flightReservation.repository.RouteDetailsRepository;
import com.cts.project.flightReservation.repository.FlightDetailsRepository;

@Service
public class HomeDetailsService {
	
	@Autowired
	FlightDetailsRepository flightRepo;
	
	@Autowired
	RouteDetailsRepository routeRepo;
	
		
	public List<FlightDetails> filterByFlightRoute(String source, String destination){
		List<FlightDetails> flightList = new ArrayList<>();
		List<RouteDetails> route = routeRepo.findBySourceAndDestination(source,destination);
//		for(int i=0;i<=routeRepo.count()-1;i++) {
//	        flightList.add(flightRepo.findById(route.get(i).getFlight().getFlightId()).get());
//		}
		for(int i=0; i<route.size(); i++) {
		    flightList.add(flightRepo.findById(route.get(i).getFlight().getFlightid()).get());
		}
	    return flightList;
	}
	
	public List<FlightDetails> filterFlight(String classes){
	    List<FlightDetails> allFlights = flightRepo.findAll();
	    List<FlightDetails> flightList = new ArrayList<>();
	    
	    for(FlightDetails flight : allFlights) {
	        String arr[] = flight.getFlightclass().split(",");
	        for(String flightClass : arr) {
	            if(flightClass.equals(classes)) {
	                flightList.add(flight);
	            }
	        }
	    }

	    return flightList;
	}
	
	public Set<FlightDetails> filterFlights(String source, String destination, String classes, LocalDate date){
		
	    List<FlightDetails> flightListByRoute = filterByFlightRoute(source, destination);

	    List<FlightDetails> flightListByClass = filterFlight(classes);

	    Set<FlightDetails> finalFlightList = new HashSet<>();
	    
		    for(FlightDetails flightByRoute : flightListByRoute) {
		        for(FlightDetails flightByClass : flightListByClass) {
		            if((flightByRoute.getFlightid() == flightByClass.getFlightid()) && ((flightByRoute.getDate().equals(date)) || (flightByClass.getDate().equals(date)))){
		            		finalFlightList.add(flightByRoute);
		                	break;
		            }
		        }
		    }

	    return finalFlightList;
	}
	
//	public Set<FlightDetails> filterFlights(String source, String destination, String classes){
//		
//	    List<FlightDetails> flightListByRoute = filterByFlightRoute(source, destination);
//
//	    List<FlightDetails> flightListByClass = filterFlight(classes);
//
//	    Set<FlightDetails> finalFlightList = new HashSet<>();
//	    
//		    for(FlightDetails flightByRoute : flightListByRoute) {
//		        for(FlightDetails flightByClass : flightListByClass) {
//		            if(flightByRoute.getFlightid() == flightByClass.getFlightid()) {
//		            		finalFlightList.add(flightByRoute);
//		                	break;
//		            }
//		        }
//		    }
//
//	    return finalFlightList;
//	}




}
