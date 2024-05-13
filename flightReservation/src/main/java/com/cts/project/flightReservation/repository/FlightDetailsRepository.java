package com.cts.project.flightReservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.flightReservation.model.FlightDetails;

public interface FlightDetailsRepository extends JpaRepository<FlightDetails, Integer>{

}
