package com.seamus.synthedserver.models.settings;

import com.seamus.synthedserver.models.Preset;

import javax.persistence.*;

@Entity
@Table(name = "envelopes")
public class Envelope {
    @Id
    @Column(name = "preset_id")
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "preset_id")
    private Preset preset;

    @Column(name = "attack")
    private double attack;

    @Column(name = "decay")
    private double decay;

    @Column(name = "sustain")
    private double sustain;

    @Column(name = "release")
    private double release;

    public Envelope(double attack, double decay, double sustain, double release) {
        this.attack = attack;
        this.decay = decay;
        this.sustain = sustain;
        this.release = release;
    }

    public Envelope() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Preset getPreset() {
        return preset;
    }

    public void setPreset(Preset preset) {
        this.preset = preset;
    }

    public double getAttack() {
        return attack;
    }

    public void setAttack(double attack) {
        this.attack = attack;
    }

    public double getDecay() {
        return decay;
    }

    public void setDecay(double decay) {
        this.decay = decay;
    }

    public double getSustain() {
        return sustain;
    }

    public void setSustain(double sustain) {
        this.sustain = sustain;
    }

    public double getRelease() {
        return release;
    }

    public void setRelease(double release) {
        this.release = release;
    }
}
