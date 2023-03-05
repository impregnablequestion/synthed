package com.seamus.synthedserver.controllers;

import com.seamus.synthedserver.models.Preset;
import com.seamus.synthedserver.repositories.PresetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
public class PresetController {
    @Autowired
    PresetRepository presetRepo;

    @GetMapping(value = "/presets")
    public ResponseEntity<List<Preset>> getAllPresets(){
        return new ResponseEntity(presetRepo.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/presets/{id}")
    public ResponseEntity getPresetById(@PathVariable Long id) {
        return new ResponseEntity(presetRepo.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/presets")
    public ResponseEntity savePreset(@RequestBody Preset preset) {

//        giving the envelopes the preset_id so that they can be saved
        preset.setEnvelope(preset.getEnvelope());
        preset.setFilter(preset.getFilter());
        preset.setOsc(preset.getOsc());
        preset.setGeneral(preset.getGeneral());
        presetRepo.save(preset);
        return new ResponseEntity(preset, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/presets/{id}")
    public ResponseEntity deletePreset(@PathVariable Long id) {
        Optional<Preset> preset = presetRepo.findById(id);
        presetRepo.delete(preset.get());
        return new ResponseEntity(preset, HttpStatus.OK);
    }

    @PostMapping(value = "/presets/{id}")
    public ResponseEntity updatePreset(@PathVariable Long id, @RequestBody Preset preset) {
        Preset toUpdate = presetRepo.findById(id).get();
        toUpdate.setEnvelope(preset.getEnvelope());
        toUpdate.setOsc(preset.getOsc());
        toUpdate.setGeneral(preset.getGeneral());
        toUpdate.setFilter(preset.getFilter());

        presetRepo.save(toUpdate);

        return new ResponseEntity(toUpdate, HttpStatus.OK);
    }
}
