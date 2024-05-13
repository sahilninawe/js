package com.cts.project.flightReservation.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="flight")
public class FlightDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer flightid;
	
	@OneToMany(mappedBy = "flight" ,cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Booking> booking = new ArrayList<>();
	
	private String flightname;
	
	private String flightclass;
	
	private int capacity;
	
	private LocalDate date;
	
	private LocalTime timing;
	
	private LocalTime departureTime;
	
	public LocalTime getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(LocalTime departureTime) {
		this.departureTime = departureTime;
	}

	@JsonIgnore
	@OneToMany(mappedBy = "flight")
	private List<RouteDetails> route = new ArrayList<>();
	

	public void setRoute(List<RouteDetails> route) {
		this.route = route;
	}

	public FlightDetails() {
		
	}

	
	public FlightDetails(Integer flightid, List<Booking> booking, String flightname, String flightclass, int capacity,
			LocalDate date, LocalTime timing, LocalTime departureTime, List<RouteDetails> route) {
		super();
		this.flightid = flightid;
		this.booking = booking;
		this.flightname = flightname;
		this.flightclass = flightclass;
		this.capacity = capacity;
		this.date = date;
		this.timing = timing;
		this.departureTime = departureTime;
		this.route = route;
	}

	public int getFlightid() {
		return flightid;
	}

	public void setFlightId(Integer flightid) {
		this.flightid = flightid;
	}

	public List<Booking> getBooking() {
		return booking;
	}

	public void setBooking(List<Booking> booking) {
		this.booking = booking;
	}

	public String getFlightname() {
		return flightname;
	}

	public void setFlightName(String flightname) {
		this.flightname = flightname;
	}

	public String getFlightclass() {
		return flightclass;
	}

	public void setFlightclass(String flightclass) {
		this.flightclass = flightclass;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getTiming() {
		return timing;
	}

	public void setTiming(LocalTime timing) {
		this.timing = timing;
	}

	public List<RouteDetails> getRoute() {
		return route;
	}

	@Override
	public String toString() {
		return "FlightDetails [flightid=" + flightid + ", booking=" + booking + ", flightname=" + flightname
				+ ", flightclass=" + flightclass + ", capacity=" + capacity + ", date=" + date + ", timing=" + timing
				+ ", departureTime=" + departureTime + ", route=" + route + "]";
	}

	
	
	
}
