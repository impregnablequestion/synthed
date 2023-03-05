package com.seamus.synthedserver.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.seamus.synthedserver.models.settings.Envelope;
import com.seamus.synthedserver.models.settings.Filter;
import com.seamus.synthedserver.models.settings.General;
import com.seamus.synthedserver.models.settings.Osc;

import javax.persistence.*;

@Entity
@Table(name = "presets")
public class Preset {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @JsonIgnoreProperties("preset")
    @OneToOne(mappedBy = "preset", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn()
    private Osc osc;

    @JsonIgnoreProperties("preset")
    @OneToOne(mappedBy = "preset", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn()
    private General general;

    @JsonIgnoreProperties("preset")
    @OneToOne(mappedBy = "preset", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn()
    private Filter filter;

    @JsonIgnoreProperties("preset")
    @OneToOne(mappedBy = "preset", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn()
    private Envelope envelope;

    public Preset(Osc osc, General general, Filter filter, Envelope envelope) {
        this.osc = osc;
        this.general = general;
        this.filter = filter;
        this.envelope = envelope;
    }

    public Preset () {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Osc getOsc() {
        return osc;
    }

    public void setOsc(Osc osc) {
        this.osc = osc;
        this.osc.setPreset(this);
    }

    public General getGeneral() {
        return general;
    }

    public void setGeneral(General general) {
        this.general = general;
        this.general.setPreset(this);
    }

    public Filter getFilter() {
        return filter;
    }

    public void setFilter(Filter filter) {
        this.filter = filter;
        this.filter.setPreset((this));
    }

    public Envelope getEnvelope() {
        return envelope;
    }

    public void setEnvelope(Envelope envelope) {
        this.envelope = envelope;
        this.envelope.setPreset(this);
    }
}
