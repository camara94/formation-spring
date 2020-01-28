package com.camaratek.certificats;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.camaratek.certificats.entities.Category;
import com.camaratek.certificats.entities.Certificat;
import com.camaratek.certificats.repositories.CategoryJPARepository;
import com.camaratek.certificats.repositories.CertificatJPARepository;

@SpringBootApplication
public class CamaraCertifApplication implements CommandLineRunner {
	
	@Autowired
	private CertificatJPARepository certificatJPARepository;
	@Autowired
	private RepositoryRestConfiguration repositoryRestConfiguration;

	
	public static void main(String[] args) {
		SpringApplication.run(CamaraCertifApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		repositoryRestConfiguration.exposeIdsFor( Certificat.class, Category.class );
		// TODO Auto-generated method stub
	}

}
