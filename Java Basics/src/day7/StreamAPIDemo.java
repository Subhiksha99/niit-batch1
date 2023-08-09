package day7;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/*
    - Java 1.8 features
    1. Functional Interfaces
    2. Lambda Expressions
    3. Stream API

    Using stream api, we can process objects present inside collection

 */
public class StreamAPIDemo {

	public static void main(String[] args) {
		List<Integer> intList = new ArrayList<Integer>();
		intList.add(10);
		intList.add(20);
		intList.add(30);
		intList.add(40);
		intList.add(50);
		intList.add(60);
		intList.add(10);
		intList.add(25);
		intList.add(15);

		// methods in stream
		// filter, map, distinct, min, max, collect
		// create stream
		// Stream st = intList.stream();
		// List<Integer> numList =st.filter(num->num>50).collect(Collectors.toList());
		// print
		intList.stream().forEach(el -> System.out.print(el + " "));

		// filter
		System.out.println();
		List<Integer> numListGreater50 = intList.stream().filter(num -> num > 50).collect(Collectors.toList());
		System.out.println("Greater than 50: " + numListGreater50);

		System.out.println();
		List<Integer> numListLessthen50 = intList.stream().filter(num -> num < 50).collect(Collectors.toList());
		System.out.println("Less than 50: " + numListLessthen50);

		// print even numbers
		List<Integer> evenList = intList.stream().filter(num -> num % 2 == 0).collect(Collectors.toList());
		System.out.println(evenList);

		// odd numbers

		System.out.println();
		// min
		Integer minValue = intList.stream().min((num1, num2) -> num1 > num2 ? 1 : -1).get();

		System.out.println("Min Value: "+minValue);

		// max value
		Integer maxValue = intList.stream().
				max((num1, num2) -> num1 > num2 ? 1 : -1).
				get();

		System.out.println("Max Value: "+maxValue);
		
		// reduce
		Integer total = intList.stream().
			reduce(0,(sum, num)->sum+num);
		System.out.println("Total: "+total);
		
		// map - apply same function on each and every 
		// element present in the collection
		List<Integer> sqList = intList.stream().
				map(num->num*num).
				collect(Collectors.toList());
		System.out.println(sqList);
		
		// sort
		List<Integer> sortedList = intList.stream().
			sorted().
			collect(Collectors.toList());
		
		System.out.println("Sorted List in asc: "+sortedList);
		
		List<Integer> sortedListDesc = intList.stream().
				sorted((num1, num2)->num1>num2?-1:1).
				collect(Collectors.toList());
		
		System.out.println("Sorting in desc order: "+sortedListDesc);
		
		// distinct elements
		List<Integer> distElements = intList.stream().
				distinct().
				collect(Collectors.toList());
		System.out.println("distinct elements: "+distElements);
		
		// mapToInt- avg
		// anyMatch, allMatch, 
		// noneMatch
		// sum()
		// flatmap()
	    // count
		
		// Map
		
	} ;// main method

	List<Integer> filter(List<Integer> lst) {
		List<Integer> intLst = null;
		for (Integer val : lst) {
			if (val > 50) {
				intLst.add(val);
			}
		}
		return intLst;
	}
}
