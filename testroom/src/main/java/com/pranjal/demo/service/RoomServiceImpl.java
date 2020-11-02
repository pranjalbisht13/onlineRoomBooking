package com.pranjal.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.pranjal.demo.dao.RoomRepo;
import com.pranjal.demo.model.Room;



@Service
public class RoomServiceImpl implements RoomService {
	
	@Autowired
	private RoomRepo roomRepo;

	@Override
	public List<Room> getRooms() {
	
		return roomRepo.findAll();
	}

	@Override
	public Room getRoom(Long roomid) {
		
		return roomRepo.getOne(roomid) ;
	}
	
	@Override
	public Room saveRoom(Room room) {
		return roomRepo.save(room);
	}
	
	public Room fetchRoomByRoomId(Long room) {
		return roomRepo.findByRoomid(room);
	}

	@Override
	public Room addRoom(Room room) {
		
		 roomRepo.save(room);
		return room;
	}

	@Override
	public Room updateRoom(Room room) {
		roomRepo.save(room);
		return room;
	}

	@Override
	public void deleteRoom(Long parseLong) {
		Room entity = roomRepo.getOne(parseLong);
		roomRepo.delete(entity);
		
	}
		

}
