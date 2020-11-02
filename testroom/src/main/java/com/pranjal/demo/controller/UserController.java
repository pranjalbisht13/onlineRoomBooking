package com.pranjal.demo.controller;

import java.util.List;
//import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.pranjal.demo.model.User;
import com.pranjal.demo.service.UserService;

@RestController
public class UserController {
//	Logger logger 
//    = Logger.getLogger( 
//        UserController.class.getName());
//	

	@Autowired 
	private UserService userService;
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:3000")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmail();
		if(tempEmailId != null && !"".equals(tempEmailId));{
			User userObj = userService.fetchUserByEmailId(tempEmailId);
			if(userObj !=null) {
				throw new Exception("user with " +tempEmailId+" is already exist");
				
			}
		}
		User userObj =null;
		userObj =userService.saveUser(user);
		return userObj;
		
	}
	
	    @PostMapping("/login")
	    @CrossOrigin(origins = "http://localhost:3000")
		public User loginUser(@RequestBody User user) throws Exception {
	    	
		String tempuserName =user.getuserName();
		String tempPass = user.getPassword();
		User userObj= null;
		if(tempuserName !=null && tempPass !=null) {
			userObj = userService.fetchUserByUserNameAndPassword(tempuserName, tempPass);
		}
		
		if(userObj ==null) {
			throw new Exception("Bad Credentials");
		}
		 return userObj;
	}

	
	
	@RequestMapping(method = RequestMethod.GET, value = "/users", produces = "application/json")
	public List<User> getUsers() {
		return this.userService.getUsers();
	}
	
	//getRoom by id
	@GetMapping("/users/{userid}")
	public ResponseEntity<HttpStatus>getUser(@PathVariable String roomid) {		
		try {
			this.userService.getUser(Long.parseLong(roomid));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}
	

	
	//Adding Room
	@PostMapping("/users")
	public ResponseEntity<HttpStatus> addUser(@RequestBody User user) {		
		try {
			this.userService.addUser(user);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	//Updating room
	@PutMapping("/users")
	public ResponseEntity<HttpStatus> updateUser(@RequestBody User user) {		
		try {
			this.userService.updateUser(user);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}

	//Deleting room
	@DeleteMapping("/users/{userid}")
	public ResponseEntity<HttpStatus> deleteUser(@PathVariable String userid) {		
		try {
			this.userService.deleteUser(Long.parseLong(userid));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}

	
}



