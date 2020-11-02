package com.pranjal.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pranjal.demo.model.Room;

public interface RoomRepo extends JpaRepository<Room, Long> {
	
	Room findByRoomid(Long room);

	
}
