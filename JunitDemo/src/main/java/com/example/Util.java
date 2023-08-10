package com.example;
import java.util.List;
import java.util.ArrayList;

public class Util {

	boolean isEven(int num) {
		if(num%2==0) {
			return true;
		}
		return false;
	}

	public int square(int i) {
		return i*i;
	}

	// Verify given number is present in array
	public boolean contains(int[] arr, int n) {
		boolean flag = false;
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] == n) {
				flag = true;
				break;
			}
		}
		return flag;
	}

	// Palindrome - 121 - 121
	public boolean isPalindrome(String str) {
		String reverse = "";
		int length = str.length();
		// reverse
		for (int i = length - 1; i >= 0; i--)
			reverse = reverse + str.charAt(i);

		// verify
		return str.equals(reverse);

	}

	// isPrime
	public boolean isPrimeNumber(int num) {// 10- 1,
		boolean flag = true;

		if (num == 0 || num == 1) {
			System.out.println(num + " is not prime number.");

		} else {
			// check number is divisible by other numbers
			for (int i = 2; i < num; i++) { // num = 5, 2..4
				if (num % i == 0) {
					flag = false;
				}
			}
		}

		return flag;
	}

	// Method to square values present in arrayList
	// [1, 2, 3, 4] => [1, 4, 9, 16]

	public List<Integer> square(List<Integer> intArrList) {

		List<Integer> sqList = new ArrayList<>();
		for (Integer num : intArrList) {

			// square & add result to new array list
			int sq = num*num;
			sqList.add(sq);
		}
		return sqList;
	}

	// find sum of digits in given number
	public int intSum(int num) {// 101 = 2
		int sum = 0;
		while (num != 0) {
			sum = sum + num % 10;
			num = num / 10;
		}
		return sum;
	}


}
