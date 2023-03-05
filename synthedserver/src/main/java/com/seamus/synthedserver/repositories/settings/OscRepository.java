package com.seamus.synthedserver.repositories.settings;

import com.seamus.synthedserver.models.settings.Osc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OscRepository extends JpaRepository<Osc, Long> {
}
