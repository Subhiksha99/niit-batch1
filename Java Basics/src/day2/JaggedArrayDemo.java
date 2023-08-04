package day2;

public class JaggedArrayDemo {

    public static void main(String[] args) {
        // Jagged array - in each row, number of columns will be different
        /*
        10
        20 30
        40 50 60
        70 80 90 199
         */
        int[][] intArr = new int[4][];
        intArr[0] = new int[1];
        intArr[1] = new int[2];
        intArr[2] = new int[3];
        intArr[3] = new int[4];

        //intArr[0][0] = 10;
        //intArr[1][0] = 20;
        // intArr[1][1] = 30;
        // write

        int val = 10;
        for(int i=0; i<intArr.length; i++ ) {
            ;// rows - 4
            for (int j = 0; j < intArr[i].length; j++) {
                intArr[i][j] = val;
                val+=10;
            }
        }
        // read
        for(int i=0; i<intArr.length; i++ ) {
            ;// rows - 4
            for (int j = 0; j < intArr[i].length; j++) {
                System.out.print(intArr[i][j]+" ");
            }
            System.out.println();
        }

    }
}
