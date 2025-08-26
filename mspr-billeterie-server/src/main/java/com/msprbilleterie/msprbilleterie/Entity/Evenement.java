package com.msprbilleterie.msprbilleterie.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "evenement")
public class Evenement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private int eventId;

    @Column(name = "event_name")
    private String eventName;

    @Column(nullable = false)
    private LocalDateTime startTime;

    @Column(nullable = false)
    private LocalDateTime endTime;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String longDescription;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CategorieEvenement categorie;

    @ManyToOne
    @JoinColumn(name = "artiste_id", nullable = false)
    private Artiste artiste;

    @ManyToOne
    @JoinColumn(name = "scene_id", nullable = false)
    private Scene scene;

}