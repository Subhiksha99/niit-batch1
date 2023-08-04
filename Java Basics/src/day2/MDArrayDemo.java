package day2;
import java.util.Arrays;
import java.util.Scanner;
/*
    10 20 30
    40 50 60
    70 80 90
 */
public class MDArrayDemo {

    public static void main(String[] args ) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter number of rows: ");
        int rows = sc.nextInt();
        System.out.println("Enter number of columns: ");
        int columns = sc.nextInt();
        int[][] intArr = new int[rows][columns];
        // write
        for(int i=0; i<rows; i++) {
            for(int j=0; j<columns; j++) {
                System.out.println("enter value: ");
                int val = sc.nextInt();
                intArr[i][j]=val;
            }
        }
        // read
        // System.out.println(Arrays.toString(intArr));
        for(int i=0; i<rows; i++) {
            for(int j=0; j<columns; j++) {
                System.out.print(intArr[i][j]+" ");
            }
            System.out.println();
        }







        /*
        // Create to two dimensional array
        // int[][] intArr = new int[3][];
        //int[][] intArr = new int[][]{{10, 20, 30},{40, 50, 60},{70,80, 90}};
        //int[][] intArr = {{10, 20, 30}, {40, 50, 60}, {70,80, 90}};

        // Write/Update

        intArr[0][0] = 10;
        intArr[0][1] = 20;
        intArr[0][2] = 30;

        intArr[1][0] = 40;
        intArr[1][1] = 50;
        intArr[1][2] = 60;

        intArr[2][0] = 70;
        intArr[2][1] = 80;
        intArr[2][2] = 90;

        // Read
        for(int i =0; i<intArr.length; i++) { ;// used for rows
            for(int j=0; j<intArr[i].length;j++) {;// used for getting number of columns in a row
                System.out.print(intArr[i][j]+" "); // i=0, j=0, 1, 2 / i=1, j=0,1,2 / i=2, j=0,1,2
            }
            System.out.println();
        }

        */


    }
}
