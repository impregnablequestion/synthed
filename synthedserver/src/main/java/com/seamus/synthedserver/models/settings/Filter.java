package com.seamus.synthedserver.models.settings;

import com.seamus.synthedserver.models.Preset;
import com.seamus.synthedserver.models.settings.enums.FilterType;

import javax.persistence.*;

@Entity
@Table(name = "filters")
public class Filter {
    @Id
    @Column(name = "preset_id")
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "preset_id")
    private Preset preset;

    @Column(name = "frequency")
    private double frequency;

    @Column(name = "type")
    private FilterType type;

    @Column(name = "q")
    private double q;

    public Filter(double frequency, FilterType type, double q) {
        this.frequency = frequency;
        this.type = type;
        this.q = q;
    }

    public Filter() {}

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

    public double getFrequency() {
        return frequency;
    }

    public void setFrequency(double frequency) {
        this.frequency = frequency;
    }

    public FilterType getType() {
        return type;
    }

    public void setType(FilterType type) {
        this.type = type;
    }

    public double getQ() {
        return q;
    }

    public void setQ(double q) {
        this.q = q;
    }
}


