package com.example.bookservice.projections;

import com.example.bookservice.models.Trade;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedTradesUser", types = Trade.class)
public interface EmbedTrades {

    long getId(); 

}
