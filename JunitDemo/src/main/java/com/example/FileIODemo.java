package com.example;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/*
 * java.io - pkg
 *  
 *		stream - series of data 
 *		Stream
 *   File - create files
 *	 ByteStream -  8 bits 
 *	 	FileInputStream - read 8bits
 *		FileOutputStream - write 8 bits 
 *		BufferedInputStream - read line by line
 *	    BufferedOutputStream - write line by line 
 *	 CharecterStream - 16 bit
 *		FileReader - read 16 bit 
 *		FileWriter - write 16 bit
 *		BufferedReader - read line by line 
 *		BufferedWriter - write line by line
 *
 */
public class FileIODemo {

	public static void main(String[] args) {
		
//		try {
//			FileInputStream fis= new FileInputStream("C:\\temp\\source.txt");
//			FileOutputStream fos = new FileOutputStream("C:\\temp\\target.txt");
//			
//	
//			int x;
//			
//			while((x=fis.read())!=-1) {
//				fos.write(x);
//			}
//			
//			fis.close();
//			fos.close();
//			
//		} catch(FileNotFoundException e) {
//			e.printStackTrace();
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//		
		
		try {
			FileInputStream fis= new FileInputStream("C:\\temp\\source.txt");
			FileOutputStream fos = new FileOutputStream("C:\\temp\\target.txt");
			
			BufferedInputStream bis = new BufferedInputStream(fis);
			BufferedOutputStream bos	= new BufferedOutputStream(fos);
	
			int x;
			
			while((x=bis.read())!=-1) {
				bos.write(x);
			}
			
			bis.close();
			bos.close();
			fis.close();
			fos.close();
			
		} catch(FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}
