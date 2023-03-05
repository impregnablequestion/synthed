package com.seamus.synthedserver.components;

import com.seamus.synthedserver.models.Preset;
import com.seamus.synthedserver.models.settings.Envelope;
import com.seamus.synthedserver.models.settings.Filter;
import com.seamus.synthedserver.models.settings.General;
import com.seamus.synthedserver.models.settings.Osc;
import com.seamus.synthedserver.models.settings.enums.FilterType;
import com.seamus.synthedserver.models.settings.enums.WaveType;
import com.seamus.synthedserver.repositories.PresetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PresetRepository presetRepo;

    public DataLoader() {

    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        General general = new General(4, 0, 0.6);
        Osc osc = new Osc(WaveType.SINE, 0, 0, 1);
        Filter filter = new Filter(15000, FilterType.LOWPASS, 1000);
        Envelope envelope = new Envelope(0.1, 0.2, 0.8, 0.3);
        Preset preset = new Preset(osc, general, filter, envelope);
        preset.setOsc(osc);
        preset.setGeneral(general);
        preset.setFilter(filter);
        preset.setEnvelope(envelope);
        presetRepo.save(preset);
    }
}
