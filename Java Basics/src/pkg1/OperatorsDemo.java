/*
            Operators
            --------
            Arithmatic Operators - +, -, *, /, %
            Assignment Operators - =, +=, -=, *=, /=,
            Logical Operators - &&, ||
            Conditional Operators - >, <, >=, <=, ==, !=
            Bitwise Operators - &, |
            Ternary Operators - ?:
            instance of operator - instance of
            shift operators - <<, >>
            unary Operators - ++, --

            // conditional statements
            if, if-else , if-else if-else
            // loops - while, do-while, for
            while(condition) {
                statements ;
            }
            do {
                statements;
            } while(true)

            // for loop
            for(initialization; condition check; incr/decr) {
                statements;
            }

            // switch
            switch(expression) {
                case 1:
                   statements;
                   break;
                case 2:
                   statements;
                   break;
                case 3:
                   statements;
                   break;
                default:
                    statements;
             }

            }
         */

package pkg1;
import java.util.Scanner;

public class OperatorsDemo {

    public static void main(String[] args) {

        OperatorsDemo od = new OperatorsDemo();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number: ");
        // read
        int num = sc.nextInt();
        // Call isOdd method to verify given number is odd or not
        System.out.println(od.isOdd(num));

        System.out.println();
        System.out.println();
        System.out.println("is leap year: "+od.isLeapYear(2000));

        System.out.println();
        System.out.println();
        // print numbers 1 to 10
        // while/for loop
        int count = 1;
        while(count<=10) {
            //System.out.println(count); //1
            System.out.print(count+" ");
            // count++;
            //count+=1;
            count = count+1;



//            System.out.println(++count+1); // 3
//            //count = ++count+1;
//            System.out.println(count); //2
//            System.out.println(count++ + 1);// 3
//            System.out.println(count); //3
        }

        System.out.println();
        System.out.println("for loop");
        System.out.println();
        // for loop
        int i;
        for(i=1; i<=10;i++) {
            if(i%2==0) {
                continue;
            }
            System.out.print(i+" ");
        }
        System.out.println(i);// 11

        do {
            System.out.println(i); // 11-14,
            i++;
        } while(i<11);

        // switch
        // input - number - 1-7, 1 - Sunday, 2 - Monday.... 7-Saturday, >7 - Enter any number between 1-7

        System.out.println("Switch: ");
        System.out.println();

        switch(num) {
            case 1:
                System.out.println("Sunday");
                break;
            case 2:
                System.out.println("Monday");
                break;
            case 3:
                System.out.println("Tuesday");
                break;
            default:
                    System.out.println("Enter any number between 1-3");
        }

    }

    // write a method to find given number is odd or not
    boolean isOdd(int number) {
//        if(number%2!=0) {
//            return true;
//        } else {
//            return false;
//        }
//        if(number%2!=0) {
//            return true;
//        }
//        return false;
        // ternary operator
        return number%2!=0?true: false;
    }

    // given year is leap year or not?
    // year 100, 4, 400
    boolean isLeapYear(int year){
//        if(year%4==0) {
//            if(year%100 ==0 ) {
//                if(year%400==0) {
//                    return true;
//                } else {
//                    return false;
//                }
//            } else {
//                return false;
//            }
//        } else {
//            return false;
//        }
        if(year%4==0 && year%100 ==0 && year%400==0) {
            return true;
        } else {
            return false;
        }
    }
}
