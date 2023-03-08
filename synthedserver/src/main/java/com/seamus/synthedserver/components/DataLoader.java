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

        General general1 = new General(4, 0, 0.6);
        Osc osc1 = new Osc(WaveType.sine, 0, 0, 1);
        Filter filter1 = new Filter(20000, FilterType.lowpass, 1000);
        Envelope envelope1 = new Envelope(0.01, 0.2, 0.8, 0.3);

        Preset preset1 = new Preset("factory 1", "sine", osc1, general1, filter1, envelope1);
        preset1.initParams(osc1, general1, filter1, envelope1);
        presetRepo.save(preset1);

        General general2 = new General(4, 0, 0.6);
        Osc osc2 = new Osc(WaveType.square, 0, 0, 1);
        Filter filter2 = new Filter(400, FilterType.notch, 1000);
        Envelope envelope2 = new Envelope(0.5, 0.2, 0.8, 0.1);

        Preset preset2 = new Preset("factory 2", "square", osc2, general2, filter2, envelope2);
        preset2.initParams(osc2, general2, filter2, envelope2);
        presetRepo.save(preset2);
    }
}
