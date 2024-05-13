package com.cts.project.flightReservation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.flightReservation.model.RouteDetails;

public interface RouteDetailsRepository extends JpaRepository<RouteDetails, Integer>{
	
	List<RouteDetails> findBySourceAndDestination(String source, String destination);
}