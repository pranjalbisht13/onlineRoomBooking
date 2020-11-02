package com.pranjal.demo.controller;


import java.util.List;

//import org.hibernate.annotations.common.util.impl.Log_.logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
//import com.websystique.springboot.util.CustomErrorType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pranjal.demo.model.Room;
//import com.pranjal.demo.model.User;
//import com.pranjal.demo.model.User;
import com.pranjal.demo.service.RoomService;

@RestController
public class RoomController {
	
	
	@Autowired 
	private RoomService roomService;


	//get all Room
		
	@RequestMapping(method = RequestMethod.GET, value = "/hello", produces = "application/json")
	public String home() {
		return "Welcome";
		
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/rooms", produces = "application/json")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Room> getRooms() {
		return this.roomService.getRooms();
	}
	
	//getRoom by id
	//@GetMapping("/rooms/{roomid}")
	//@CrossOrigin(origins = "http://localhost:3000")
//	//public User registerUser(@RequestBody User user) throws Exception {
//	public Room getRoom(@PathVariable String roomid) {		
//		//try {
//			this.roomService.getRoom( Long.parseLong(roomid));
//			//return new ResponseEntity<>(HttpStatus.OK);
//		//}catch(Exception e){
//			//return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		//}
//		Room roomObj =null;
//		roomObj =roomService.getRoom(Long.parseLong(roomid));
//		return roomObj;
//	
//	}

	//getRoom by id
	@GetMapping("/rooms/{roomid}")
	@CrossOrigin(origins = "http://localhost:3000")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	public ResponseEntity<?> getRoom(@PathVariable String roomid) throws Exception {		
		//try {
			Room roomObj= roomService.getRoom(Long.parseLong(roomid));
			 if (roomObj == null) {
				
				// return new ResponseEntity<>(HttpStatus.OK);
				 throw new Exception("Bad Credentials");
			//return new ResponseEntity<>("User with id " + roomid 
              //      + " not found"), HttpStatus.NOT_FOUND);
			 }
//		}//catch(Exception e){
			return new ResponseEntity<Room>(roomObj, HttpStatus.OK);
		}
	

	
//	public Room getRoom(@PathVariable String roomid) {
//		return this.roomService.getRoom(Long.parseLong(roomid));
//		
//	}
	
	//Adding Room
	@PostMapping("/rooms")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<HttpStatus> addRoom(@RequestBody Room room) {		
		try {
			this.roomService.addRoom(room);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//@Query(value= SELECT users FROM roombooking.room where roomid=102 )
	// use if else condition to select room no. only once same like used for email id
	@SuppressWarnings("unlikely-arg-type")
	@PostMapping("/room")
	@CrossOrigin(origins = "http://localhost:3000")
	public Room bookRoom(@RequestBody Room room) throws Exception {
		Long tempRoomId = room.getRoomid();
		if(tempRoomId != null && !"".equals(tempRoomId));{
			Room roomObj = roomService.fetchRoomByRoomId(tempRoomId);
			if(roomObj !=null) {
				throw new Exception("Room Number with " +tempRoomId+" is already exist");				
			}
		}
		Room roomObj =null;
		roomObj =roomService.addRoom(room);
		return roomObj;
		
	}
//	public Room addRoom(@RequestBody Room room) {
//		return this.roomService.addRoom(room);
//		}
//	
//	
	
	//Updating room
	@PutMapping("/rooms")
	public ResponseEntity<HttpStatus> updateRoom(@RequestBody Room room) {		
		try {
			this.roomService.updateRoom(room);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}
	
//	public Room updateRoom(@RequestBody Room room) {
//		return this.roomService.updateRoom(room);
//		}
	
	
	//Deleting room
	@DeleteMapping("/rooms/{roomid}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<HttpStatus> deleteRoom(@PathVariable String roomid) {		
		try {
			this.roomService.deleteRoom(Long.parseLong(roomid));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}	
}
	
	
	
	
	
	
	