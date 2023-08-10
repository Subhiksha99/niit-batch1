package com.example;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

@TestMethodOrder(OrderAnnotation.class)
public class UtilTest {

	String str; // null

	static Util util;
	int indx=0;
	
	@BeforeAll
	static void beforeAll() {
		util = new Util();
		
	}

	@AfterAll
	static void afterAll() {
		util = null;
	}

	// @Disabled - skip test case
	@Test
	// @Disabled
	// @Order(2)
	@DisplayName("IsEven")
	@RepeatedTest(3)
	void testIsEven() {
		boolean result = util.isEven(10);
		assertTrue(result);
	}

	@Test
	// @Order(1)
	@Tag("sanity")
	void testSquare() {
		int sq = util.square(10);
		assertEquals(100, sq);

	}

	@Test
	// @Order(3)
	@Tag("sanity")
	void testNull() {
		assertNull(str);
	}

	@ParameterizedTest
	@ValueSource(ints = { 11, 13, 15 })
	void testIntSum(int num) {
		int result = util.intSum(num);
	
		if (num == 11) {
			assertEquals(2, result);
		} else if( num==13) {
			assertEquals(4, result);
		} else {
			assertEquals(6, result);
		}
	}

	
}
