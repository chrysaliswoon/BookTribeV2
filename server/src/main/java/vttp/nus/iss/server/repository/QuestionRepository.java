package vttp.nus.iss.server.repository;

import java.util.List;

import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import vttp.nus.iss.server.models.Question;

@Repository
public class QuestionRepository {

    @Autowired
    private MongoTemplate template;

    public ObjectId insertQuestion(Question question) {
        Document insertedDoc = template.insert(question.toDocument(), "question");
        return insertedDoc.getObjectId("_id");
    }

    

}
