package com.seamus.synthedserver.repositories;

import com.seamus.synthedserver.models.Preset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PresetRepository extends JpaRepository<Preset, Long> {
}
