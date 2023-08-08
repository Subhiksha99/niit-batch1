package day6;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;
import java.util.Stack;
import java.util.Vector;

/*
 * Iterable(I)
 *  Collection(I) -
 *    represent a group of objects as a single entity
 *    - Heterogeneous elements
 *    - size variable 
 *    - lot of predefined methods
 *      add, addAll(), size(), get()...
 *    - Iterate
 *      for(), Iterator,ListIterator, forEach(), nextgen for loop,
 *      enumerator()
 *    List(I) - ListIterator, Iterator, for
 *       duplicate values allowed
 *       insertion order maintained
 *       more than one null value can be stored
 *       Heterogeneous elements allowed to store
 *       
 *     ArrayList(C) - 1.2v
 *       - Underlying data structure Array.
 *       - frequent operations are read
 *       - Heterogeneous elements
 *       - No Thread safety
 *       
 *     LinkedList(C) -1.2v
 *       - uses doubly linked linked list - DS
 *       - write/modify/remove
 *       - No Thread safety
 *     
 *     Vector(C) - enumerator - 1.0v - Thread safety
 *       Stack(C) - 1.0v - LIFO
 *       
 *   Queue(I)- Iterator, for - FIFO - email
 *     PriorityQueue(C)
 *     DeQue(I)
 *       ArrayDeQue(C)
 *     
 *   Set(I) - Iterator, for
 *     HashSet(C)
 *     LinkedHashSet(C)
 *     SortedSet(I)
 *        TreeSet(C)
 *        
 *     Comparable / Comparator / hashcode() / equals()
 *   
 * Collections(C) - provides set of methods to work with collection objects
 * 
 * Map(I)
 *    HashMap(C)
 *    LinkedHashMap(C)
 *    SortedMap(I)
 *       TreeMap(C)
 *    
 *    
 *   - Class can extend only one class
 *   - Interface can extend more than one Interface
 *   - Class implements interface
 */
public class CollectionDemo {

	public static void main(String[] args) {
		int[] intArr = {10, 20, 30};
		
		for(int i=0; i<intArr.length; i++) {
			System.out.print(intArr[i]+" ");
		}
		
		System.out.println();
		// next gen for loop
		for(int x :intArr) {
			System.out.print(x+" ");
		}
		
		
		// ArrayList
		// 
		//List arrList1 = new ArrayList(); // loose coupling
		List arrList1 = new ArrayList(); // loose coupling
//		LinkedList arrList2 = new LinkedList(); // tight coupling
//	
//		//LinkedList arrList2 = new LinkedList();
//		
//		arrList1.add(10);
//		//arrList2.trimToSize();
		
		/*
		
		 * 
		 */
		// write
		arrList1.add(Integer.valueOf(100));
		arrList1.add(200);
		arrList1.add(200);
		arrList1.add(300);
		arrList1.add("aa");
		arrList1.add(true);
		arrList1.add(10.23f);
		arrList1.add(null);
		arrList1.add(null);
		
		// read
		System.out.println(arrList1.get(0)); // 100
		System.out.println(arrList1); //[100, 200, 300]
		
		// iterate
		for(int i=0; i<arrList1.size(); i++ ) {
			System.out.print(arrList1.get(i)+" "); // 100, 200, 300, aa, true, 10.23f
		}
		
		// iterate using iterator
		Iterator itr = arrList1.iterator();
		System.out.println();
		System.out.println("#####Iterator");
		while(itr.hasNext()) {
			System.out.print(itr.next()+" ");
		}
		
		// using listIterator 
		// read in both directions
		System.out.println();
		System.out.println("###ListIterator");
		ListIterator lstItr= arrList1.listIterator();
		while(lstItr.hasNext()) {
			System.out.print(lstItr.next()+" ");
		}
		System.out.println();
		while(lstItr.hasPrevious()) {
			System.out.print(lstItr.previous()+" ");
		}
		
		System.out.println();
		for(int i=0; i<arrList1.size(); i++) {
			if(arrList1.get(i) instanceof String) {
				//System.out.println(arrList1.get(i).toString().toUpperCase());
				System.out.println(String.valueOf(arrList1.get(i)).toUpperCase());
			}
		}
		
		
		// Generics
		List<String> strList = new ArrayList<>();
		strList.add("aa");
		strList.add("bb");
		strList.add("cc");
		
		for(String str :strList) {
			System.out.print(str.toUpperCase()+" "); // [AA, BB, CC]
		}

		System.out.println();
		System.out.println("#######");
		// update
		strList.set(0, "aaaa");
		System.out.println(strList);
		
		// contains, addAll, remove
		System.out.println();
		System.out.println("Before remove"+strList); // Before remove[aa, bb, cc]
		strList.remove(0);
		System.out.println("After remove:"+strList); // After remove:[bb, cc]
		
		System.out.println("Before remove"+strList);
		strList.remove("cc");
		System.out.println("After remove"+strList); // After remove[bb]
		
		
		// addAll()
		arrList1.addAll(strList);
		System.out.println(arrList1); // [100, 200, 200, 300, aa, true, 10.23, null, null, bb]
		
		// contains() -search
		System.out.println(arrList1.contains("cc")); // false
		
		System.out.println();
		Employee emp1 = new Employee(10001, "Shiv");
		Employee emp2 = new Employee(10002, "Sam");
		Employee emp3 = new Employee(10003, "Rahul");
		System.out.println(emp1); //day6.Employee@3b6eb2ec - without toString() method in Employee class
		                       ; //Employee [empId=10001, name=Shiv] - with toString() method in Employee class

		                    
		// Object[] objArr = {emp1, emp2, emp3, "Hello"};
		
		List<Employee> linkedLst = new LinkedList();
		linkedLst.add(emp1);
		linkedLst.add(emp2);
		linkedLst.add(emp3);
		
		for(Employee emp:linkedLst) {
			System.out.println(emp.getName());
		}
		
		// Vector
		List<String> v1 = new Vector();
		Vector<String> v2 = new Vector();
		
		v2.add("One");
		v2.add("Two");
		
		
		System.out.println("#####Vector#######");
		Enumeration<String> en = v2.elements();
		while(en.hasMoreElements()) {
			System.out.println(en.nextElement());
		}
		
		
		// methods

		// Stack
		Stack<Integer> s1 = new Stack();
		List<Integer> s2 = new Stack();
		
		s1.add(10);
		s1.add(20);
		s1.add(30);
		s1.add(10);
		s1.add(null);
		s1.add(null);
		
		s1.push(1000);
		s1.push(2000);
		
		System.out.println(s1);
		
		s1.pop();
		
		System.out.println(s1); //[10, 20, 30, 10, null, null, 1000]
		System.out.println(s1.peek()); // 1000
		System.out.println(s1.pop());
		System.out.println(s1); //[10, 20, 30, 10, null, null]
				
		
				
		
		
		
		

		
		
		
		
		
		
		
		

		                       
	
	}

}
