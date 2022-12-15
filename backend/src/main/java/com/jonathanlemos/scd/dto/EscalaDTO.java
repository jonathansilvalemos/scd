package com.jonathanlemos.scd.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.jonathanlemos.scd.entities.Escala;

public class EscalaDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	private Long id;
	private LocalDate data;
	private byte[] escala;
	
	public EscalaDTO() {
		
	}
	
	public EscalaDTO(Escala escala) {
		id = escala.getId();
		data = escala.getData();
		this.escala = escala.getEscala();
	}
	
	public EscalaDTO(Long id, LocalDate data, byte[] escala) {
		super();
		this.id = id;
		this.data = data;
		this.escala = escala;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

	public byte[] getEscala() {
		return escala;
	}

	public void setEscala(byte[] escala) {
		this.escala = escala;
	}	
}
