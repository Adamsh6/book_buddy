package com.example.bookservice.controllers;


import com.example.bookservice.models.Book;
import com.example.bookservice.models.Trade;
import com.example.bookservice.repositories.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/trades")
public class TradeController {

    @Autowired
    TradeRepository tradeRepository;

    @GetMapping
    public List<Trade> getAllTrades() {return tradeRepository.findAll(); }


}
