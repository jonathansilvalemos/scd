package com.jonathanlemos.scd.dto;

import java.time.LocalDate;

import com.jonathanlemos.scd.entities.Diaria;

public class DiariaDTO {
	private Long id;
	private LocalDate data;
	private Double valorGasto;
	private int portaria;
	private Boolean status;
	private String compDespesa;
	private String compDesloca;
	
	public DiariaDTO() {
		
	}
	
	public DiariaDTO(Diaria diaria) {
		id = diaria.getId();
		data = diaria.getData();
		valorGasto = diaria.getValorGasto();
		portaria = diaria.getPortaria();
		status = diaria.getStatus();
		compDespesa = diaria.getCompDespesa();
		compDesloca = diaria.getCompDesloca();
	}
	
	public DiariaDTO(Long id, LocalDate data, Double valorGasto, int portaria, Boolean status, String compDespesa,
			String compDesloca) {
		
		this.id = id;
		this.data = data;
		this.valorGasto = valorGasto;
		this.portaria = portaria;
		this.status = status;
		this.compDespesa = compDespesa;
		this.compDesloca = compDesloca;
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

	public Double getValorGasto() {
		return valorGasto;
	}

	public void setValorGasto(Double valorGasto) {
		this.valorGasto = valorGasto;
	}

	public int getPortaria() {
		return portaria;
	}

	public void setPortaria(int portaria) {
		this.portaria = portaria;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public String getCompDespesa() {
		return compDespesa;
	}

	public void setCompDespesa(String compDespesa) {
		this.compDespesa = compDespesa;
	}

	public String getCompDesloca() {
		return compDesloca;
	}

	public void setCompDesloca(String compDesloca) {
		this.compDesloca = compDesloca;
	}
	
	
	
	
}
