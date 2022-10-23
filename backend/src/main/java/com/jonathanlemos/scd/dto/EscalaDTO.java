package com.jonathanlemos.scd.dto;

import java.time.LocalDate;

import com.jonathanlemos.scd.entities.Escala;

public class EscalaDTO {
	private Long id;
	private LocalDate data;
	private String escala;
	
	public EscalaDTO() {
		
	}
	
	public EscalaDTO(Escala escala) {
		id = escala.getId();
		data = escala.getData();
		this.escala = escala.getEscala();
	}
	
	public EscalaDTO(Long id, LocalDate data, String escala) {
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

	public String getEscala() {
		return escala;
	}

	public void setEscala(String escala) {
		this.escala = escala;
	}
	
	

	
}
