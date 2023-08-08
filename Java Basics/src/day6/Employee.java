package day6;

import java.util.Objects;

public class Employee implements Comparable<Employee> {

	// Fields
	private int empId;
	private String name;

	// Constructors
	Employee() {
	}

	Employee(int empId, String name) {
		this.empId = empId;
		this.name = name;
	}

	// Getters & Setter
	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	// Override equals & Hashcode methods
	@Override
	public int hashCode() {
		return Objects.hash(empId, name);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Employee other = (Employee) obj;
		return empId == other.empId && Objects.equals(name, other.name);
	}

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", name=" + name + "]";
	}
	// Employee [empId=10001, name=Shiv]

	@Override
	public int compareTo(Employee otherEmp) {
		// asc order - compare by id
//		if (this.getEmpId() > otherEmp.getEmpId()) {
//			return 1;
//		} else if (this.getEmpId() < otherEmp.getEmpId()) {
//			return -1;
//		} else {
//			return 0;
//		}
		// desc order - compare by id
//		if (this.getEmpId() > otherEmp.getEmpId()) {
//			return -1;
//		} else if (this.getEmpId() < otherEmp.getEmpId()) {
//			return 1;
//		} else {
//			return 0;
//		}
		
		// asc order - sort based on name
		// return this.getName().compareTo(otherEmp.getName());// +ve, -ve, 0
		
		// desc order - sort based on name
		return otherEmp.getName().compareTo(this.getName());
	}

}
