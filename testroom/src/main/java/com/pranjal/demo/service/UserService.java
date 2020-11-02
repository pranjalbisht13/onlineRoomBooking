package com.pranjal.demo.service;

import java.util.List;


import com.pranjal.demo.model.User;

public interface UserService {
	
	public User saveUser(User user);
	
	public User fetchUserByEmailId(String email);
	
	public User fetchUserByUserNameAndPassword(String userName, String password);

	public List<User> getUsers();
	
	public User getUser(Long roomid);
	
	public User addUser(User user);
	
	public User updateUser(User users);
	
	public void deleteUser(Long parseLong );

	
}
