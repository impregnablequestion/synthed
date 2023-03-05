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

@CrossOrigin
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
        preset.initParams(preset.getOsc(), preset.getGeneral(), preset.getFilter(), preset.getEnvelope());
        return new ResponseEntity(preset, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/presets/{id}")
    public ResponseEntity deletePreset(@PathVariable Long id) {
        Optional<Preset> preset = presetRepo.findById(id);
        presetRepo.delete(preset.get());
        return new ResponseEntity(preset.get(), HttpStatus.OK);
    }

    @PutMapping(value = "/presets/{id}")
    public ResponseEntity updatePreset(@PathVariable Long id, @RequestBody Preset preset) {
        Preset toUpdate = presetRepo.findById(id).get();
        toUpdate.initParams(preset.getOsc(), preset.getGeneral(), preset.getFilter(), preset.getEnvelope());
        presetRepo.save(toUpdate);
        return new ResponseEntity(toUpdate, HttpStatus.OK);
    }
}
