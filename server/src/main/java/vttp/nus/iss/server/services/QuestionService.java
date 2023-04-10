package vttp.nus.iss.server.services;

import java.util.Optional;
import java.util.UUID;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import vttp.nus.iss.server.models.Question;
import vttp.nus.iss.server.repository.QuestionRepository;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepo;

    public Optional<String> createQuestion(Question question, MultipartFile file) {
        String questionId = UUID.randomUUID().toString().substring(0, 8);
        question.setQuestionId(questionId);

        //? Upload image for the post

        //? Create post in MongoDB
        ObjectId objectId = questionRepo.insertQuestion(question);
        
    }
    
}
