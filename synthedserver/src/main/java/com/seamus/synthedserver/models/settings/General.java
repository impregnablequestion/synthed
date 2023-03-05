package com.seamus.synthedserver.models.settings;

import com.seamus.synthedserver.models.Preset;

import javax.persistence.*;

@Entity
@Table(name = "generals")
public class General {
    @Id
    @Column(name = "preset_id")
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "preset_id")
    private Preset preset;

    @Column(name = "voices")
    private int voices;

    @Column(name = "octave")
    private int octave;

    @Column(name = "master_gain")
    private double master_gain;

    public General(int voices, int octave, double master_gain) {
        this.voices = voices;
        this.octave = octave;
        this.master_gain = master_gain;
    }

    public General() {}

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

    public int getVoices() {
        return voices;
    }

    public void setVoices(int voices) {
        this.voices = voices;
    }

    public int getOctave() {
        return octave;
    }

    public void setOctave(int octave) {
        this.octave = octave;
    }

    public double getMaster_gain() {
        return master_gain;
    }

    public void setMaster_gain(double master_gain) {
        this.master_gain = master_gain;
    }
}
