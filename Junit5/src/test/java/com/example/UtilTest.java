package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;



@TestMethodOrder(OrderAnnotation.class)
public class UtilTest {

	String str; // null
	
	static Util util;
	
	@BeforeAll
	static void beforeAll() {
		util = new Util();
	}
	
	@AfterAll
	static void afterAll() {
		util=null;
	}
	
	// @Disabled - skip test case
	@Test
	//@Disabled
	//@Order(2)
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
	//@Order(3)
	@Tag("sanity")
	void testNull() {
		assertNull(str);
	}

	
}
