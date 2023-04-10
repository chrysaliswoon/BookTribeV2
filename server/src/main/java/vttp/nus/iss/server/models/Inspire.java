package vttp.nus.iss.server.models;

import java.util.List;


import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;

public class Inspire {

    private String title;
    private List<String> poemContent;
    private String content;
    private String author;
    private String tag;
    private JsonArray tags;

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public List<String> getPoemContent() {
        return poemContent;
    }
    public void setPoemContent(List<String> poemContent) {
        this.poemContent = poemContent;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public String getTag() {
        return tag;
    }
    public void setTag(String tag) {
        this.tag = tag;
    }
    public JsonArray getTags() {
        return tags;
    }
    public void setTags(JsonArray tags) {
        this.tags = tags;
    }

    public static Inspire create(JsonObject jo) {

        Inspire Inspire = new Inspire();
        Inspire.setTitle(jo.getString("title"));
        Inspire.setAuthor(jo.getString("author"));
        Inspire.setTag(jo.getString("tag"));

        return Inspire;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
        .add("title", title)
        .add("author", author)
        .add("tag", tag)

        .build();
    }

    public static Inspire createPoem(String title, String author, List<String> poemContent, String tag) {
        Inspire poemData = new Inspire();
        poemData.setTitle(title);
        poemData.setAuthor(author);
        poemData.setPoemContent(poemContent);
        poemData.setTag(tag);

        return poemData;
    }

    public static Inspire createQuote(String author, String content, JsonArray tags) {
        Inspire quoteData = new Inspire();
        quoteData.setAuthor(author);
        quoteData.setContent(content);
        quoteData.setTags(tags);


        return quoteData;
    }

    
    
}
