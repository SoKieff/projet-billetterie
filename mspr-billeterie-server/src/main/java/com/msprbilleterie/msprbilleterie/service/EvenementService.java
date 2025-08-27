package com.msprbilleterie.msprbilleterie.service;

import com.msprbilleterie.msprbilleterie.Entity.Evenement;
import com.msprbilleterie.msprbilleterie.repository.EvenementRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EvenementService {

    private final EvenementRepository evenementRepository;

    // Permet d'injecter le repository EvenementRepository via le mécanisme d'injection de dépendances de Spring.
    // Cela garantit que le service dispose d'un accès centralisé aux opérations de gestion des entités Evenement.
    public EvenementService(EvenementRepository evenementRepository) {
        this.evenementRepository = evenementRepository;
    }

    public List<Evenement> getAllEvenements() {
        return evenementRepository.findAll();
    }
}
