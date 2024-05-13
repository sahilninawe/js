package com.cts.project.flightReservation.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "route")
public class RouteDetails{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer routeid;
	
	private String source;
	
	private String destination;
	
	@ManyToOne
	private FlightDetails flight;
		
	public FlightDetails getFlight() {
		return flight;
	}

	public void setFlight(FlightDetails flight) {
		this.flight = flight;
	}

	public RouteDetails() {}

	public RouteDetails(Integer routeid, String source, String destination) {
		super();
		this.routeid = routeid;
		this.source = source;
		this.destination = destination;
	}

	public Integer getRouteid() {
		return routeid;
	}

	public void setRouteid(Integer routeid) {
		this.routeid = routeid;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	@Override
	public String toString() {
		return "RouteDetails [routeid=" + routeid + ", source=" + source + ", destination=" + destination + ", flight="
				+ flight + "]";
	}

}