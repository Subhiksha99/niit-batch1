package org.example;
import com.mongodb.client.*;
import org.bson.Document;
import java.util.Iterator;
import java.util.ArrayList;
import java.util.List;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {

        // Creating a Mongo client
        String uri = "mongodb://localhost:27017";
        MongoClient mongo = MongoClients.create(uri);

        MongoDatabase database= mongo.getDatabase("myDB");
        System.out.println("Created myDB Database");


        // Get all db's
        System.out.println("####DB List");
        MongoIterable<String> dbList = mongo.listDatabaseNames();
        for(String dbName: dbList) {
            System.out.println(dbName);
        }

        //Creating a collection
//        database.createCollection("student");
//        System.out.println("Collection created successfully");

        // get all collections
        System.out.println("####Collection List: ");
        MongoIterable<String> collections = database.listCollectionNames();
        for(String col: collections) {
            System.out.println(col);
        }

        System.out.println();
        // get a collection
        MongoCollection<org.bson.Document> collection = database.getCollection("student");
        System.out.println("Collection selected");

        // Insert one document
        Document document = new Document("rollNo", 200)
                .append("name", "Sam")
                .append("age", 12);

        // collection.insertOne(document);
        System.out.println("Inserted document successfully!");

        // Get all documents
        System.out.println("####Document List: ");
        FindIterable<Document> docs= collection.find();
        int i = 1;
        // Getting the iterator
        Iterator itr = docs.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
            i++;
        }

        // Insert many documents
        Document doc1 = new Document("rollNo", 201)
                .append("name", "Ram")
                .append("age", 12);

        Document doc2 = new Document("rollNo", 202)
                .append("name", "Ann")
                .append("age", 12);

        Document doc3 = new Document("rollNo", 203)
                .append("name", "Sachin")
                .append("age", 12);

        List<Document> docList = new ArrayList<>();
        docList.add(doc1);
        docList.add(doc2);
        docList.add(doc3);

        // Insert many records
        //collection.insertMany(docList);

        // Get all documents
        System.out.println();
        FindIterable<Document> docs2= collection.find();
        int i2 = 1;
        // Getting the iterator
        Iterator itr2 = docs2.iterator();
        while (itr2.hasNext()) {
            System.out.println(itr2.next());
            i2++;
        }
        System.out.println();

        // Update
        collection.updateOne(Filters.eq("name", "Sam"), Updates.set("age", 13));

        // Delete
        collection.deleteOne(Filters.eq("name", "Sam"));

    }
}