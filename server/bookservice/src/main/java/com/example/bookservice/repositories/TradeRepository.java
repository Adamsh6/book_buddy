package com.example.bookservice.repositories;

import com.example.bookservice.models.Trade;
import com.example.bookservice.projections.EmbedUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedUsers.class)
public interface TradeRepository extends JpaRepository<Trade, Long> {
}
