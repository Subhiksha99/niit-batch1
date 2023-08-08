package day6;

import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

/*
 *   Set(I) - Iterator, for
 *     HashSet(C)
 *     LinkedHashSet(C)
 *     SortedSet(I)
 *        TreeSet(C)
 *        
 *   - duplicates not allowed
 *   - insertion order won't maintain
 *   - null - depending on implementation class.
 *   
 */
public class SetDemo {

	public static void main(String[] args) {
		HashSet hs1 = new HashSet();
		Set hs2 = new HashSet();

		// Generics
		Set<Integer> hs3 = new HashSet<>();
		// add
		hs3.add(100);
		hs3.add(300);
		hs3.add(50);
		hs3.add(150);
		hs3.add(100);
		hs3.add(300);
		hs3.add(50);
		hs3.add(150);
		hs3.add(null);

		// read
		System.out.println(hs3);

		System.out.println();
		// iterate
		Iterator itr = hs3.iterator();
		while (itr.hasNext()) {
			System.out.print(itr.next() + " "); // 50 100 150 300
		}
		System.out.println();
		for (Integer el : hs3) {
			System.out.print(el + " "); // 50 100 150 300
		}

		System.out.println();
		System.out.println(hs3); // [50, 100, 150, 300]
		hs3.remove(150);
		System.out.println(hs3); // [50, 100, 300]

		System.out.println(hs3.contains(100)); // true

		System.out.println(hs3.isEmpty()); // false

		// LinkedHashSet
		// - insertion order maintained
		// - duplicates not allowed

		System.out.println();
		System.out.println("##LinkedHashSet");
		Set<Integer> hs4 = new LinkedHashSet<>();

		// add
		hs4.add(100);
		hs4.add(300);
		hs4.add(50);
		hs4.add(150);
		hs4.add(100);
		hs4.add(300);
		hs4.add(50);
		hs4.add(150);
		hs4.add(null);

		// read
		System.out.println(hs4);

		System.out.println();
		// iterate
		Iterator itr2 = hs4.iterator();
		while (itr2.hasNext()) {
			System.out.print(itr2.next() + " "); // 50 100 150 300
		}
		System.out.println();
		for (Integer el : hs4) {
			System.out.print(el + " "); // 50 100 150 300
		}

		System.out.println();
		System.out.println(hs4); // [50, 100, 150, 300]
		hs4.remove(150);
		System.out.println(hs4); // [50, 100, 300]

		System.out.println(hs4.contains(100)); // true

		System.out.println(hs4.isEmpty()); // false
		
		// replace/get/set - not supported
		
		System.out.println();
		System.out.println("##TreeSet: ");
		// TreeSet - store elements in some sorting order
		/*
		 * - duplicates not allowed
		 * - insertion order won't maintain
		 * - null values are not allowed
		 */
		
		Set ts1= new TreeSet();
		TreeSet ts2= new TreeSet();
		
		
		Set<String> ts3= new TreeSet<>();
		ts3.add("cc");
		ts3.add("ee");
		ts3.add("bb");
		ts3.add("dd");
		ts3.add("cc");
		ts3.add("aa");
		ts3.add("bb");
		ts3.add("dd");
		//ts3.add(null); // not allowed
		
		System.out.println(ts3);
		
		for(String el :ts3) {
			System.out.print(el+" ");
		}
		
		Employee emp1 = new Employee(10001, "Shiv");
		Employee emp2 = new Employee(10003, "Sam");
		Employee emp3 = new Employee(10002, "Rahul");
		Employee emp4 = new Employee(10001, "Shiv");
		
		Set<Employee> hs5 = new HashSet<>();
		hs5.add(emp1);
		hs5.add(emp2);
		hs5.add(emp3);
		hs5.add(emp4);
		System.out.println("HashSet: "+ hs5.size());// 4
		
		System.out.println(emp1.hashCode()); // 885951223
		System.out.println(emp2.hashCode()); // 191382150
		System.out.println(emp3.hashCode()); // 142666848
		System.out.println(emp4.hashCode()); // 1060830840
		
		
		
		// After overriding equals & hashcode methods
		
		System.out.println("HashSet: "+ hs5.size());// 3
		System.out.println(emp1.hashCode()); // 2886962
		System.out.println(emp2.hashCode()); // 393902
		System.out.println(emp3.hashCode()); // 79033182
		System.out.println(emp4.hashCode()); // 2886962
		
		
		
		Set<Employee> ts4 = new TreeSet<>();
		ts4.add(emp1);
		ts4.add(emp2);
		ts4.add(emp3);
		ts4.add(emp4);
		
		System.out.println("ts4 size: "+ts4.size()); // ClassCastException
		System.out.println(ts4);
		
		// Comparable(I) - compareTo() & Comparator(I) - compare()
		
		
		
	}

}
