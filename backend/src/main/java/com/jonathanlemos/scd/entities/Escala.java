package com.jonathanlemos.scd.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.jonathanlemos.scd.dto.EscalaDTO;

@Entity
@Table(name = "tb_escala")
public class Escala implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate data;
	@Lob
	private byte[] escala;
	
	public Escala() {}
	
	public Escala(EscalaDTO escalaDTO) {
		data = escalaDTO.getData();
		escala = escalaDTO.getEscala();
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
