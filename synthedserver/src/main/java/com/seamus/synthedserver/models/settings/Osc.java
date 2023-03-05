package com.seamus.synthedserver.models.settings;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.seamus.synthedserver.models.Preset;
import com.seamus.synthedserver.models.settings.enums.WaveType;

import javax.persistence.*;

@Entity
@Table(name="oscs")
public class Osc {

    @Id
    @Column(name = "preset_id")
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "preset_id")
    private Preset preset;


    @Column(name = "wave")
    @Enumerated(value = EnumType.STRING)
    private WaveType wave;

    @Column(name = "coarse_tune")
    private int coarse_tune;

    @Column(name = "fine_tune")
    private int fine_tune;

    @Column(name = "gain")
    private double gain;

    public Osc(WaveType wave, int coarse_tune, int fine_tune, double gain) {
        this.wave = wave;
        this.coarse_tune = coarse_tune;
        this.fine_tune = fine_tune;
        this.gain = gain;
    }

    public Osc () {

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

    public WaveType getWave() {
        return wave;
    }

    public void setWave(WaveType wave) {
        this.wave = wave;
    }

    public int getCoarse_tune() {
        return coarse_tune;
    }

    public void setCoarse_tune(int coarse_tune) {
        this.coarse_tune = coarse_tune;
    }

    public int getFine_tune() {
        return fine_tune;
    }

    public void setFine_tune(int fine_tune) {
        this.fine_tune = fine_tune;
    }

    public double getGain() {
        return gain;
    }

    public void setGain(double gain) {
        this.gain = gain;
    }
}
