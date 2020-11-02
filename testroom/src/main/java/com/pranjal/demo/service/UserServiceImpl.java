package com.pranjal.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pranjal.demo.dao.UserRepo;

import com.pranjal.demo.model.User;

@Service
public class UserServiceImpl implements UserService {
	
	
	@Autowired
	private UserRepo userRepo;
	
	@Override
	public User saveUser(User user) {
		return userRepo.save(user);
	}
	
	@Override	
	public User fetchUserByEmailId(String email) {
		return userRepo.findByEmail(email);
	}
	
	@Override	
	public User fetchUserByUserNameAndPassword(String userName, String password) {
		return userRepo.findByuserNameAndPassword(userName, password);
	}
	
	@Override
	public List<User>getUsers() {
	
		return userRepo.findAll();
	}

	@Override
	public User getUser(Long userid) {
		
		return userRepo.getOne(userid) ;
	}

	@Override
	public User addUser(User user) {
		
		userRepo.save(user);
		return user;
	}

	@Override
	public User updateUser(User user) {
		userRepo.save(user);
		return user;
	}

	@Override
	public void deleteUser(Long parseLong) {
		User userEntity = userRepo.getOne(parseLong);
		userRepo.delete(userEntity);
		
	}

		
	
}
