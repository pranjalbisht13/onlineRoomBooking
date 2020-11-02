package com.pranjal.demo.service;

import java.util.List;

import com.pranjal.demo.model.Room;


public interface RoomService {
	
	public List<Room>getRooms();
	
	public Room saveRoom(Room room);
	
	public Room fetchRoomByRoomId(Long roomid);
	
	public Room getRoom(Long roomid);
	//public Room getName(String userName);
	
	public Room addRoom(Room room);
	
	public Room updateRoom(Room room);
	
	public void deleteRoom(Long parseLong);

	


	
	

}
