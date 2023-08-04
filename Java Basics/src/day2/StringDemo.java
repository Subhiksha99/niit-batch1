package day2;

import java.util.Arrays;

public class StringDemo {

    public static void main(String[] args) {
        // ways to define strings
        // String literals
        // using 'new' keyword

        //String literals
        String str1 = "Hello";
        String str11 = "Hello";
        String str2 = "World";

        System.out.println("before concat str1: " +str1); //Hello
        //str1.concat(str2);
//        System.out.println("after concat str1:" +str1); // Hello

        str1 = str1.concat(str2); // HelloWorld
        System.out.println("after concat str1:" +str1); // Hello World
        System.out.println(str11);

        //Create String using 'new' keyword
        String str3 = new String("Hello");
        String str4 = new String("Hello");
        String str5 = new String("World");
        String str6 = new String("Java");
        String str7 = "Java";

        //case 2: difference equals & ==

        System.out.println(str3.equals(str4)); //content comparision - true
        System.out.println(str3==str4); // reference comparision - false

        String str8 = "Hello";
        System.out.println(str11.equals(str8)); //content comparision - true
        System.out.println(str11==str8); // reference comparision - true

        //
        System.out.println();
        System.out.println(str3);
        System.out.println(str3.concat(str5)); // HelloWorld
        System.out.println(str3);
        str3 = null;

        // methods
        System.out.println("Length:" +str1.length());// length of string

        System.out.println();
        System.out.println(str1);
        System.out.println(str2);
        System.out.println(str1.compareTo(str2)); // lexiographical comparision - +ve, -ve, 0 72-87 =-15
         // +ve - str1>str2,  -ve - str1<str2,  0 - str1==str2 , "HelloWorld" "Hello" - 87 - 104 - -ve
        System.out.println(str1.charAt(0)); // H
        System.out.println(str1.contains("llo")); // search for sub string
        String str10 = "Hello World";
        // split
        String[] strList = str10.split(" "); // ["Hello", "World"]
        System.out.println(strList);//Hashcode - [Ljava.lang.String;@380fb434
        for(int i = 0; i< strList.length; i++) {
            //System.out.println(i); // 0,1
            System.out.println(strList[i]); // Hello, World
        }
        System.out.println(Arrays.toString(strList)); // [Hello, World]

        // toLowerCase(), toUpperCase(), trim,

        // trim - remove spaces at the begining and at the end
        String str12 = "    Hello world      ";
        System.out.println(str12.trim()); // Hello World

        str12 = "Hello World";
        // substring
        System.out.println(str12.substring(1)); // ello World
        System.out.println(str12.substring(6, 10) );//Worl
        System.out.println(str12.substring(6, 11) ); // World

        System.out.println();
        // iterate string
        for(int i=0; i<str1.length(); i++ ) {
            System.out.println(str1.charAt(i));
        }
        System.out.println();
        int indx = 0;
        while(indx<str1.length()) {
            System.out.println(str1.charAt(indx));
            indx++;
        }
        System.out.println();
        // length - 10 - 0-9
        // reverse string
        for(int i=str1.length()-1; i>=0; i--) {
            System.out.print(str1.charAt(i));
        }

    }
}
