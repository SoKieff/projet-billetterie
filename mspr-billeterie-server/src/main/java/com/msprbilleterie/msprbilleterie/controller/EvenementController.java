package com.msprbilleterie.msprbilleterie.controller;

import com.msprbilleterie.msprbilleterie.Entity.Evenement;
import com.msprbilleterie.msprbilleterie.service.EvenementService;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class EvenementController {

    // Cette classe ne gère pas directement les dépendances comme le repository.
    // Elle délègue la logique métier au service (EvenementService) pour respecter
    // le principe de séparation des responsabilités et garder le contrôleur léger.
    private final EvenementService evenementService;

    public EvenementController(EvenementService evenementService) {
        this.evenementService = evenementService;
    }

    @QueryMapping (name = "getAllEvent")
    public List<Evenement> getAllEvenements() {
        return evenementService.getAllEvenements();
    }
}
