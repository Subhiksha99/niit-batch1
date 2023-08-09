package day7;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.TreeMap;

/*
 *   
 * Map(I) - store data in the form key-value pairs
 *   HashMap(C) - no insertion order
 *   LinkedHashMap(C) - insertion order will be maintained
 *   TreeMap(C) - null values not allowed.
 *              - store elements in some sorting order
 *   HashTable(C) - 1.0v- legacy class- thread safety
 *  
 *  ex : city-zip code
 *       student-marks
 *       
 *  duplicate keys won't allowed
 *  duplicate values allowed
 *  null keys/value depends on implementation classes
 *  insertion order depends on implementation classes.
 *  if key present, value will be overridden.
 *  if key not present, element will be inserted.
 *  
 */

public class MapDemo {

	public static void main(String[] args) {
		// Create HashMap object
		Map<String, Integer> m = new HashMap<>();
		// Map<String, Integer> m = new LinkedHashMap();
		// Map<String, Integer> m = new Hashtable<>();

		// insert/add values into HashMap
		m.put("Chennai", 600001);
		m.put("Bengaluru", 560001);
		m.put("Kochi", 460000);
		m.put("Chennai", 600002);
		m.put("Bengaluru", 560002);
		m.put("Kochi", 460002);
		m.put("Hyderbad", 460002);
		m.put("Mumbai", 460002);

		// Read
		System.out.println(m.get("Chennai")); //600002
		System.out.println(m); //{Chennai=600002, Bengaluru=560002, Kochi=460002, Hyderbad=460002, Mumbai=460002}

		
		// iterate
		// convert map object to set obj
		Set<Entry<String, Integer>> entrySet = m.entrySet();

		System.out.println();
		Iterator itr = entrySet.iterator();
		while (itr.hasNext()) {
			System.out.println(itr.next());
		}
		/*
		 * Output:
		 * Chennai=600002
			Bengaluru=560002
			Kochi=460002
			Hyderbad=460002
			Mumbai=460002
		 */
		

		// get keys
		System.out.println(m.keySet()); // [Chennai, Bengaluru, Kochi, Hyderbad, Mumbai]

		
		// Get values
		System.out.println(m.values()); //[600002, 560002, 460002, 460002, 460002]

		
		// size
		System.out.println(m.size()); // 5
		
		// remove
		System.out.println("Before Remove: " + m);
		m.remove("Chennai");
		System.out.println("After Remove: " + m);

		
		// replace
		System.out.println("Before Replace: " + m);
		m.replace("Mumbai", 700001);
		System.out.println("Before Replace: " + m);

		
		// Contains
		System.out.println(m.containsKey("Hyderbad"));
		System.out.println(m.containsValue(460002));

		
		// Create TreeMap Object
		Map<String, Integer> tm = new TreeMap<>();

		// insert
		tm.put("Raj", 90);
		tm.put("Ram", 78);
		tm.put("Sam", 89);
		tm.put("Bob", 68);
		tm.put("Ravi", 76);
		//tm.put(null, null); // invalid, null keys not allowed
		//tm.put(null, null); // invalid, null keys not allowed
		tm.put("Mohan", null);
		tm.put("Manoj", null);
		
		// Hashtable
		// null keys are not allowed
		// duplicate keys are not allowed
		// duplicate values are allowed
		Map<String, Integer> ht = new Hashtable();
		// ht.put(null, null); // null keys not allowed
		//ht.put("Chennai", null); // null values not allowed
		
		ht.put("chennai", 102311);
		
		System.out.println(ht);

		System.out.println(tm);
		
	}

}
