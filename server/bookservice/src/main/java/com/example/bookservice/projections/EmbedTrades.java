package com.example.bookservice.projections;

import com.example.bookservice.models.Book;
import com.example.bookservice.models.Trade;
import com.example.bookservice.models.User;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedTradesUser", types = Trade.class)
public interface EmbedTrades {

    long getId();
    boolean getCompleted();
    User getUser1();
    User getUser2();
    Book getBook1();
    Book getBook2();


}
