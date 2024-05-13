package com.cts.project.flightReservation.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cts.project.flightReservation.exception.DetailsNotFoundException;
import com.cts.project.flightReservation.model.Booking;
import com.cts.project.flightReservation.model.PassengerDetails;
import com.cts.project.flightReservation.model.FlightDetails;
import com.cts.project.flightReservation.repository.BookingRepository;
import com.cts.project.flightReservation.repository.PassengerDetailsRepository;
import com.cts.project.flightReservation.repository.FlightDetailsRepository;

import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

@Component
@Transactional
public class BookingService {
	
	@Autowired
	PassengerDetailsRepository passengerDetailsRepository;
	
	@Autowired
	FlightDetailsRepository flightDetailsRepository;
	
	@Autowired
	BookingRepository repo;
	
	@Autowired
	EntityManager em;
	
	public Long totalCount() {
		return repo.count();
	}
	
	public String save(Booking booking) {
		//generating pnr
		Random random = new Random(); 
        long num = Math.abs(random.nextLong()); 
        String pnrString = Long.toString(num); 
        String pnr = pnrString.substring(0, 10);
        booking.setPnr(pnr);
        
        //generate seat
//        String seats = pnrString.substring(0, booking.getSeatsRequired());
//        char arr[] = seats.toCharArray();
//        StringBuilder seatNos = new StringBuilder();
//		for(int i=0;i<arr.length;i++) {
//			if(i!=booking.getSeatsRequired()-1) {
//				if(arr[i]==0) {
//					seatNos.append(arr[i]+1).append(",");
//				}
//				else if(arr[i] == arr[i+1]) {
//					seatNos.append(arr[i]+1).append(",");
//				}
//				else {
//					seatNos.append((arr[i])).append(",");
//				}
//			}
//			else {
//				seatNos.append(arr[i]);
//				break;
//			}
//		}

        Random rand = new Random();
        Set<String> seatNos = new HashSet<>();
        int start = 1;
        int end = 200;
        int seatsRequired = booking.getSeatsRequired();

        while (seatNos.size() < seatsRequired) {
	        int result = Math.abs(rand.nextInt(end - start) + start);
	        
	        	String s = result+"";
	        	
	        	seatNos.add(s);
	        
	       
        }

		booking.setSeatNumbers(seatNos.toString());
       
        repo.save(booking);
        FlightDetails flightDetails =flightDetailsRepository.findById(booking.getFlight().getFlightid()).get();
        flightDetails.setCapacity(flightDetails.getCapacity() - booking.getSeatsRequired());
        flightDetailsRepository.save(flightDetails);
        PassengerDetails p=passengerDetailsRepository.findById(booking.getPassenger().getId()).get();
        booking.setPassenger(p);
		
		return "Booking successfull";
	}
	
	public Optional<Booking> findByid(int id){
		return repo.findById(id);
	}
	
	public List<Booking> findall(){
		return repo.findAll();
	}
	
	public void deleteBooking(int id) {
		repo.deleteById(id);
	}
	
	public Optional<Booking> findByPnr(String pnr) {
		return repo.findByPNR(pnr);
	}
	
	public String cancelTicket(String pnr) {
		
		Optional<Booking> book = repo.findByPnr(pnr);
		
		if(book.isEmpty()) {
			throw new DetailsNotFoundException("PNR is Invalid");
		}
//		Booking books = new Booking();
		FlightDetails flightDetails =flightDetailsRepository.findById(book.get().getFlight().getFlightid()).get();
	    flightDetails.setCapacity(flightDetails.getCapacity() + book.get().getSeatsRequired());
	    flightDetailsRepository.save(flightDetails);
	    repo.deleteById(book.get().getBookingId());
	    return "Ticket Cancelled Successfully";
	}

	public Booking bookingByPassengerId(int flightid) {
		FlightDetails flight = flightDetailsRepository.findById(flightid).get();
		
		List<Booking> booking = repo.findAll();
		
		Booking book = null;
		
		for(int i=(int)repo.count()-1;i>=0;i--) {
			if(flightid == booking.get(i).getFlight().getFlightid()) {
				book = booking.get(i);
				break;
			}
		}
		return book;
	}
}
