package com.sample.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.entity.Job;
import com.sample.repository.JobRepository;

@Service
public class JobService {
    

    @Autowired
    private JobRepository jobRepository;
    public String savejob(Job jobs){
        jobRepository.save(jobs);
        return "job saved";
    }

    public String updatejob(Job jobs){
        jobRepository.saveAndFlush(jobs);
        return "job updated";
    }

    public List<Job> getJob(){
        return jobRepository.findAll();
    }

    public String deletejob(Long id){
        jobRepository.deleteById(id);
        return "job deleted";
    }

}
