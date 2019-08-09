package com.example.bookservice.repositories;

import com.example.bookservice.models.Trade;
import com.example.bookservice.projections.EmbedTrades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedTrades.class)
public interface TradeRepository extends JpaRepository<Trade, Long> {
}
