package com.umass

import org.apache.commons.lang.builder.HashCodeBuilder

class EmployeeRole implements Serializable {

//    static auditable = true

	Employee employee
	Role role


	boolean equals(other) {
		if (!(other instanceof EmployeeRole)) {
			return false
		}

		other.employee?.id == employee?.id &&
			other.role?.id == role?.id
	}

	int hashCode() {
		def builder = new HashCodeBuilder()
		if (employee) builder.append(employee.id)
		if (role) builder.append(role.id)
		builder.toHashCode()
	}

	static EmployeeRole get(long employeeId, long roleId) {
		find 'from EmployeeRole where employee.id=:employeeId and role.id=:roleId',
			[employeeId: employeeId, roleId: roleId]
	}

	static EmployeeRole create(Employee employee, Role role, boolean flush = false) {
		new EmployeeRole(employee: employee, role: role).save(flush: flush, insert: true)
	}

	static boolean remove(Employee employee, Role role, boolean flush = false) {
		EmployeeRole instance = EmployeeRole.findByEmployeeAndRole(employee, role)
		instance ? instance.delete(flush: flush) : false
	}

	static void removeAll(Employee employee) {
		executeUpdate 'DELETE FROM EmployeeRole WHERE employee=:employee', [employee: employee]
	}

	static void removeAll(Role role) {
		executeUpdate 'DELETE FROM EmployeeRole WHERE role=:role', [role: role]
	}

	static mapping = {
		id composite: ['role', 'employee']
		version false
	}
}
