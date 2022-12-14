package com.jonathanlemos.scd.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.jonathanlemos.scd.dto.CidadeDTO;
import com.jonathanlemos.scd.entities.Cidade;
import com.jonathanlemos.scd.repositories.CidadeRepository;

@Service
public class CidadeService {
	@Autowired
	private CidadeRepository cidadeRepository;

	@Transactional(readOnly = true)
	public Page<CidadeDTO> buscarTodos(Pageable pageable) {
		Page<Cidade> cidade = cidadeRepository.findAll(pageable);
		Page<CidadeDTO> page = cidade.map(x -> new CidadeDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public CidadeDTO findById(Long id) {
		Cidade result = cidadeRepository.findById(id).get();
		CidadeDTO dto = new CidadeDTO(result);
		return dto;
	}

	@Transactional
	public CidadeDTO salvarCidade(CidadeDTO cidadeDTO) {
		if (cidadeDTO != null) {
			Cidade cidade = new Cidade();
			cidade.setNome(cidadeDTO.getNome());
			cidade.setValor(cidadeDTO.getValor());
			cidade = cidadeRepository.saveAndFlush(cidade);
			return new CidadeDTO(cidade);
		} else {
			return null;
		}
	}

	@Transactional
	public CidadeDTO atualizarCidade(CidadeDTO cidadeDTO) {
		Cidade cidade = new Cidade();
		cidade.setId(cidadeDTO.getId());
		cidade.setNome(cidadeDTO.getNome());
		cidade.setValor(cidadeDTO.getValor());
		cidade = cidadeRepository.saveAndFlush(cidade);
		return new CidadeDTO(cidade);
	}
}
