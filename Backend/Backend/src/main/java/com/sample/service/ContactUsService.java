package com.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.entity.ContactUs;
import com.sample.repository.ContactUsRepository;

@Service
public class ContactUsService {
    
    @Autowired
     private ContactUsRepository contctusRepository;
    public String savecontact(ContactUs contactus){
        contctusRepository.save(contactus);
        return "message saved";
    }

    public String updatecontact(ContactUs contactus){
        contctusRepository.saveAndFlush(contactus);
        return "message updated";
    }

    public List<ContactUs> getcontact(){
        return contctusRepository.findAll();
    }

    public String deletecontact(Long id){
        contctusRepository.deleteById(id);
        return "message deleted";
    }
    
}
