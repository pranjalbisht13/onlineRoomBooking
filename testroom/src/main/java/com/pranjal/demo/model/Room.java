package com.pranjal.demo.model;


import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
public class Room {
	
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	private Long roomid;
	
	private String users;
	
	
	@JsonFormat (pattern = "yyy-MM-dd")
	private LocalDate sdate;
	
	 @JsonFormat(pattern="hh:mm")
	private Date time;
	 
	 @JsonFormat(pattern="hh:mm")
		private Date etime;

	
	public Room() {
		super();
	}

	public Room(Long roomid, String users, LocalDate sdate,Date time, Date etime) {
		super();
		this.roomid = roomid; 
		this.users = users;
		this.sdate = sdate;
		this.time = time;
		this.etime = etime;
	}

	public Long getRoomid() {
		return roomid;
	}

	public void setRoomid(Long roomid) {
		this.roomid = roomid;
	}

	public String getUsers() {
		return users;
	}

	public void setUsers(String users) {
		this.users = users;
	}

	public LocalDate getSdate() {
		return sdate;
	}

	public void setSdate(LocalDate sdate) {
		this.sdate = sdate;
	}

	public Date getEtime() {
		return etime;
	}

	public void setEtime(Date etime) {
		this.etime = etime;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	@Override
	public String toString() {
		
		return "Room [roomid=" + roomid + ", users=" + users + ", sdate=" + sdate + ", time=" + time + ", etime=" + etime + "]";
	}
	
	
}
