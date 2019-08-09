package com.example.bookservice.projections;

import com.example.bookservice.models.Book;
import com.example.bookservice.models.Trade;
import com.example.bookservice.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedUsers", types = Book.class)
public interface EmbedUsers {

    long getId();
    String getTitle();
    String getAuthor();
    String getGenre();
    User getUser();
    List<Trade> getTrades();

}
