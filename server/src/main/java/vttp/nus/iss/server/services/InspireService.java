package vttp.nus.iss.server.services;

import java.io.Reader;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;
import vttp.nus.iss.server.models.Inspire;
import vttp.nus.iss.server.repository.InspireRepository;

@Service
public class InspireService {

    @Autowired
    private InspireRepository inspireRepo;

    private static final String poemAPI = "https://poetrydb.org/random";
    private static final String InspireAPI = "https://api.quotable.io/random";

    public List<Inspire> getPoem() {
        
        //? Create GET Request
        RequestEntity<Void> req = RequestEntity.get(poemAPI).build();

        //? Make call to Inspire API
        RestTemplate template = new RestTemplate();
        ResponseEntity<String> res;

        try {
            res = template.exchange(req, String.class);
        } catch (Exception ex) {
            System.err.printf("Error: ", ex.getMessage());
            return Collections.emptyList();
        }

        // ? Get body with the payload
        String payload = res.getBody();

        // ? Convert payload to JSON object
        Reader strReader = new StringReader(payload);

        // ? Create JSONReader from Reader
        JsonReader jsonReader = Json.createReader(strReader);

        // ? Reads payload as an array
        JsonArray apiResult = jsonReader.readArray();

        // ? Get array within the object
        JsonObject poem = apiResult.getJsonObject(0);

        ArrayList<Inspire> poemList = new ArrayList<>();

        String title = poem.getString("title");
        String author = poem.getString("author");
        String lineCount = poem.getString("linecount");
        JsonArray lines = poem.getJsonArray("lines");
        
        List<String> poemContent = new ArrayList<String>();

        for (int i = 0; i < lines.size(); i++) {
            String line = lines.getString(i);
            poemContent.add(line);
        }
        
        List<String> poemLines = new ArrayList<>();
        

        for (String content: poemContent) {
            poemLines.add(content);
        }

        poemList.add(Inspire.createPoem(title, author, poemLines, lineCount));

        return poemList;
    }

    public List<Inspire> getQuote() {

        //? Create GET Request
        RequestEntity<Void> req = RequestEntity.get(InspireAPI).build();

        //? Make call to Inspire API
        RestTemplate template = new RestTemplate();
        ResponseEntity<String> res;

        try {
            res = template.exchange(req, String.class);
        } catch (Exception ex) {
            System.err.printf("Error: ", ex.getMessage());
            return Collections.emptyList();
        }

        // ? Get body with the payload
        String payload = res.getBody();

        // ? Convert payload to JSON object
        Reader strReader = new StringReader(payload);

        // ? Create JSONReader from Reader
        JsonReader jsonReader = Json.createReader(strReader);

        // ? Reads payload as an object
        JsonObject apiResult = jsonReader.readObject();
        
        ArrayList<Inspire> quoteList = new ArrayList<>();
        String author = apiResult.getString("author");
        String content = apiResult.getString("content");
        JsonArray tags = apiResult.getJsonArray("tags");
        // System.out.println(author);

        // inspireRepo.save(author, payload);
        
        quoteList.add(Inspire.createQuote(author, content, tags));

        return quoteList;
    
}


    
}
