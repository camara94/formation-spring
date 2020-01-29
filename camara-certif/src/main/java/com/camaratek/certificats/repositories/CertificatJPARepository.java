package com.camaratek.certificats.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.camaratek.certificats.entities.Certificat;
@CrossOrigin("*")
@RepositoryRestResource
public interface CertificatJPARepository extends JpaRepository<Certificat, Long> {

}
