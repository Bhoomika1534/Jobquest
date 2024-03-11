package com.sample.service;

import com.sample.entity.Feedback;
import com.sample.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    private static FeedbackRepository feedbackRepository = null;

    @Autowired
    public FeedbackService(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    public static List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    public Feedback getFeedbackById(Long id) {
        Optional<Feedback> optionalFeedback = feedbackRepository.findById(id);
        return optionalFeedback.orElse(null);
    }

    public Feedback postFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    public Feedback updateFeedback(Long id, Feedback updatedFeedback) {
        Optional<Feedback> optionalFeedback = feedbackRepository.findById(id);

        if (optionalFeedback.isPresent()) {
            Feedback existingFeedback = optionalFeedback.get();
            existingFeedback.setName(updatedFeedback.getName());
            existingFeedback.setFeedback(updatedFeedback.getFeedback());
            existingFeedback.setRating(updatedFeedback.getRating());
            existingFeedback.setEmail(updatedFeedback.getEmail());
            return feedbackRepository.save(existingFeedback);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    public void deleteFeedback(Long id) {
        feedbackRepository.deleteById(id);
    }
}