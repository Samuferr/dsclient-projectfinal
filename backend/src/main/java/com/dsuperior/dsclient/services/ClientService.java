package com.dsuperior.dsclient.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsuperior.dsclient.entities.Client;
import com.dsuperior.dsclient.repositories.ClientRepository;

@Service
public class ClientService {
	
	@Autowired
	private ClientRepository repository;
	
	
	public List<Client> findAll(){
		return repository.findAll();
	}

}
