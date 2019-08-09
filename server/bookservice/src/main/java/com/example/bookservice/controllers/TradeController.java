package com.example.bookservice.controllers;


import com.example.bookservice.repositories.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/trades")
public class TradeController {

    @Autowired
    TradeRepository tradeRepository;

}
