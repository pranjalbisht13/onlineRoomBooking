package com.pranjal.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pranjal.demo.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

	User findByEmail(String email);

	User findByuserNameAndPassword(String userName, String password);

	 
}
