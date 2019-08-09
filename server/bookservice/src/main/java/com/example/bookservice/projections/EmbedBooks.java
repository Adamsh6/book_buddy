package com.example.bookservice.projections;

import com.example.bookservice.models.User;
import org.springframework.data.rest.core.config.Projection;


@Projection(name = "embedBooks", types = User.class)
public interface EmbedBooks {

        long getId();
        String getName();

}

