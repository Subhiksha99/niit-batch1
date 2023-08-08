package day6;

/*
 * Wrapper classes
 * convert primitive data type to object types
 *  - need of conversion
 *  Collections/Cloning/Serialization/De-serialization
 * primitive data types
 * byte        - Byte
 * short       - Short
 * int         - Integer
 * long        - Long
 * float       - Float
 * double      - Double
 * char        - Character
 * boolean     - Boolean
 *
 *  pkg - java.lang
 *
 *  Wrapper classes
 *  Byte
 *  Short
 *  Integer
 *  Long
 *  Float
 *  Double
 *  Char
 *  Boolean
 *
 * - Convert primitive to Object
 *   1. Constructors - deprecated from 1.9v
 *   2. valueOf() - method
 *   3. Autoboxing - 1.5v
 *
 * - Convert primitive to String
 *    valueOf()
 *
 * - Convert Object to primitive
 *   xxxValue() - xxx - premitive data type
 *   AutoUnboxing - 1.5v
 *
 * - Wrapper Object to String Object
 *   toString()
 *
 * - Convert String to primitive
 *   parseXXX()
 *
 */
public class WrapperClassDemo {

	public static void main(String[] args) {
		// Primitive to Object
        int x = 10;
        double d = 100.00;

        // Using constructor
        Integer intObj = new Integer(x);
        System.out.println(intObj instanceof Integer);// true

        Double doubleObj = new Double(d);
        System.out.println(doubleObj instanceof Double);// true
        System.out.println(d); // 100.0
        System.out.println(doubleObj); // 100.0

        // Converting primitive to object
        // using valueOf() method
        Integer intObj2 = Integer.valueOf(x);
        System.out.println(intObj2 instanceof Integer);

        Float f = Float.valueOf(10.23f);
        System.out.println(f instanceof Float); // true
        
        // Autoboxing
        System.out.println("*****Autoboxing");
        Float f2 = 10.03f;
        Integer intObj3 = 10000;
        System.out.println(f2 instanceof Float);// true
        System.out.println(intObj3 instanceof Integer);
	
        // Object to Primitive
        float f3 = f2.floatValue();
        int i3 = intObj.intValue();
        
        // AutoUnboxing
        float f4 = f2;
        int i4 = intObj;
        
        System.out.println();
        // primitive to String
        // valueOf()
        String strObj = String.valueOf(105);
        System.out.println(strObj);//105
        System.out.println(strObj.charAt(0)); //1
        System.out.println(strObj.length());//3
        
        // String to primitive
        // parseXXX()
        int i5 = Integer.parseInt(strObj);
        
        System.out.println();
        // Convert Wrapper Obj to String
        // toString()
       String str2 = intObj.toString();
       System.out.println(intObj); // 10
       System.out.println(str2.length()); // 2
       
       // narrowing
       // type casting required
       long l11 = 100;
       int x11 = (int)l11;
       
       // widening
       long l12 = x11;
	
	}

}
