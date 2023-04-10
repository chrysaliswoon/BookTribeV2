package vttp.nus.iss.server.models;

import org.bson.Document;
import org.springframework.data.annotation.Id;

public class Question {

    @Id
    private String questionId;
    private String country;
    private String grade;
    private Integer level;
    private String subject;
    private String standard;
    private String topic;
    private String title;
    private String category;
    private String image;
    private String prompt;
    private String choices;
    private String answers;
    private String submitted;

    public String getQuestionId() {
        return questionId;
    }
    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    public String getGrade() {
        return grade;
    }
    public void setGrade(String grade) {
        this.grade = grade;
    }
    public Integer getLevel() {
        return level;
    }
    public void setLevel(Integer level) {
        this.level = level;
    }
    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }
    public String getStandard() {
        return standard;
    }
    public void setStandard(String standard) {
        this.standard = standard;
    }
    public String getTopic() {
        return topic;
    }
    public void setTopic(String topic) {
        this.topic = topic;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    public String getPrompt() {
        return prompt;
    }
    public void setPrompt(String prompt) {
        this.prompt = prompt;
    }
    public String getChoices() {
        return choices;
    }
    public void setChoices(String choices) {
        this.choices = choices;
    }
    public String getAnswers() {
        return answers;
    }
    public void setAnswers(String answers) {
        this.answers = answers;
    }
    public String getSubmitted() {
        return submitted;
    }
    public void setSubmitted(String submitted) {
        this.submitted = submitted;
    }

    public Document toDocument() {
        Document document = new Document();
        document.put("questionId", questionId);
        document.put("country", country);

        return document;
    }

    public static Question create(Document doc) {
        Question question = new Question();
        question.setQuestionId(doc.getString(("questionId")));
        question.setCountry(doc.getString("country"));
        question.setGrade(doc.getString("grade"));
        question.setLevel(doc.getInteger("level"));
        question.setSubject(doc.getString("subject"));

        return question;
    }


    
    
}
