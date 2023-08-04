package day2;

import java.util.Arrays;

/*
    Array - to store 20more number of values
    - size is fixed.
    - Allows to store homogeneous elements - same type
    - Better Performance.
    - limited number predefined methods
    - java.util.Arrays - provide methods to work with Array.
    - array values can be accessed using index value starting from 0.

    types of arrays
     - Single Dimensional Array
     - Multi Dimensional Array
     - Jagged Array

    Ways define single dimensional array
    1.  int[] intArr = {10, 20, 30, 40};
        String[] strArr = {"aa", "bb", "cc"}

    2. int[] intArr = new int[]{10, 20, 30, 40}
       String[] strArr = new String[]{"aa", "bb", "cc"}

    3. int[] intArr = new int[10];
       // read
       sout(intArr[0]);

       // write
       intArr[0] = 100

       // iterate array - for, while
 */
public class ArrayDemo {
    public static void main(String[] args) {
        int[] intArr = {10, 20, 30, 40};

        // Read
        System.out.println(intArr[0]);
        System.out.println(intArr[3]);

        // write/update
        System.out.println(intArr[1]); // 20
        intArr[1] = 200;
        System.out.println(intArr[1]); // 200
        System.out.println();

        // Case 2
        String[] strArr = new String[]{"dd", "aa", "bb", "ee", "cc" };
        // read
        System.out.println(strArr[2]); // cc
        // write/update
        strArr[2] = "cccc";
        System.out.println(strArr[2]); // cccc
        System.out.println(Arrays.toString(strArr)); // [aa, bb, cccc]

        // Case 3:
        char[] chArr = new char[5];

        System.out.println(chArr[0]); // unicode
        chArr[2] = 'a';
        System.out.println(Arrays.toString(chArr)); // [ ,  , a,  ,  ]

        int[] intArr2 = new int[5];
        System.out.println(Arrays.toString(intArr2)); // [0, 0, 0, 0, 0]

        System.out.println();
        // Iterate
        // for
        for (int i = 0; i < intArr.length; i++) {
            System.out.print(intArr[i] + " "); // 10 200 30 40
        }
        System.out.println();
        // while
        int indx = 0;
        while (indx < strArr.length) {
            System.out.print(strArr[indx] + " ");
            indx += 1;
        };// while

        // int - 32

        System.out.println();
        // call getMaxValue
        ArrayDemo ad = new ArrayDemo();
        System.out.println("Max value: "+ad.getMaxValue(intArr));

        System.out.println();
        // call sort method
        System.out.println(Arrays.toString(ad.sortArray(intArr)));

        // sort - using predefined method
        // "dd", "aa", "bb", "ee", "cc"
        System.out.println();
        System.out.println("Before sort: " +Arrays.toString(strArr));
        Arrays.sort(strArr);
        System.out.println("After sort: "+ Arrays.toString(strArr));


    } ;// main - static

    // find max value from intArr
    int getMaxValue(int[] intArray) {
        // for, compare element
        // var =0, compare
        // sort in asc/desc - print last element/first element
        int max = intArray[0];

        for(int i=1; i<intArray.length; i++ ){
            if(intArray[i]>max) {
                max = intArray[i]; // 200
            }
        }
        return max;
    }

    // sort array
    int[] sortArray(int[] intArr) {
        for(int i=0; i< intArr.length; i++ ) { ;// i- 0  - 10 - 200, 40, 30
            for(int j=i+1; j<intArr.length; j++) {
                ;// j - 1
                //System.out.println(intArr[i]);
                //System.out.println(intArr[j]);
                if (intArr[i] < intArr[j]) {
                    continue;
                } else {
                    // swaping
                    int temp = intArr[i];//10
                    intArr[i] = intArr[j]; // i = j, j=i
                    intArr[j] = temp;
                }
            } ;// for
        };// for
        return intArr;
    }



} ;// class


// find min value from an array - input - array, return - int
// reverse array - input - array - return - array
// find second highest value from an array - input - intArr - return -int
// find second min value from an array - input - intArr - return -int
// copy one array elements  into another array - input - array - return -array
// search specific from an array - array, value - true/false - index