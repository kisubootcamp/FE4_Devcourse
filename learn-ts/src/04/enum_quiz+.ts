{
	// 1.
	enum Days {
		"Monday" = 1,
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	}

	function getDayName(day: number): string {
		if (day in Days) return Days[day];
		else return "Invalid day";
	}
}

{
	// 2.
	enum Status {
		"Success" = 200,
		"Not Found" = 404,
		"Internal Server Error" = 500,
	}

	function getStatusMessage(status: number): string {
		if (status in Status) return Status[status];
		else return "Unknown Status";
	}
}

{
	// 3.
	enum City {
		SEOUL = "Seoul",
		BUSAN = "Busan",
		DAEGU = "Daegu",
	}

	function getCityByZip(zip: string): string {
		switch (zip) {
			case "100":
				return City.SEOUL;
			case "200":
				return City.BUSAN;
			case "300":
				return City.DAEGU;
			default:
				return "Unknown City";
		}
	}
}

{
	// 4.
	enum Role {
		ADMIN = "admin",
		USER = "user",
		GUEST = "guest",
	}

	function getPermissionLevel(role: string): string {
		switch (role) {
			case Role.ADMIN:
				return "Full access";
			case Role.USER:
				return "Limited access";
			case Role.GUEST:
				return "Guest access";
			default:
				return "No access";
		}
	}
}

{
	// 5.
	enum Product {
		PENDING = 1,
		SHIPPED = 2,
		DELIVERED = 3,
	}

	function getProductStatus(status: number): string {
		switch (status) {
			case Product.PENDING:
				return "Pending";
			case Product.SHIPPED:
				return "Shipped";
			case Product.DELIVERED:
				return "Delivered";
			default:
				return "Unknown Status";
		}
	}
}

{
	// 6.
	enum Order {
		ORDER_PLACED = "Order Placed",
		PAYMENT_PENDING = "Payment Pending",
		SHIPPED = "Shipped",
		DELIVERED = "Delivered",
	}

	function getOrderStatus(status: string): string {
		switch (status) {
			case Order.ORDER_PLACED:
				return "Your order has been placed.";
			case Order.PAYMENT_PENDING:
				return "Payment is pending.";
			case Order.SHIPPED:
				return "Your order has been shipped.";
			case Order.DELIVERED:
				return "Your order has been delivered.";
			default:
				return "Unknown Status";
		}
	}

	console.log(getOrderStatus("Order Placed"));
}

{
	// 7.
	enum Status {
		IS_ACTIVE = 1,
		IS_INACTIVE = 0,
	}
	function toggleStatus(status: boolean): boolean {
		return status === Boolean(Status.IS_INACTIVE);
	}
}

{
	// 8.
	enum Option {
		OPTION_ONE = "Option 1",
		OPTION_TWO = "Option 2",
		OPTION_THREE = "Option 3",
	}

	function getOptionValue(option: string): string {
		switch (option) {
			case Option.OPTION_ONE:
				return "You selected Option 1.";
			case Option.OPTION_TWO:
				return "You selected Option 2.";
			case Option.OPTION_THREE:
				return "You selected Option 3.";
			default:
				return "Invalid option";
		}
	}

	console.log(getOptionValue("Option 1"));
}

{
	// 9.
	enum Meal {
		BREAKFAST = "Breakfast",
		LUNCH = "Lunch",
		DINNER = "Dinner",
	}

	function getMealTime(meal: string): string {
		switch (meal) {
			case Meal.BREAKFAST:
				return "Good morning, it's breakfast time!";
			case Meal.LUNCH:
				return "Good afternoon, it's lunch time!";
			case Meal.DINNER:
				return "Good evening, it's dinner time!";
			default:
				return "Invalid meal time";
		}
	}

	console.log(getMealTime("Breakfast"));
	console.log(getMealTime("Lunch"));
	console.log(getMealTime("Dinner"));
}

{
	// 10.
	enum LoginStatus {
		LOGGED_IN = 1,
		LOGGED_OUT = 0,
	}

	function checkLoginStatus(status: boolean): string {
		switch (status) {
			case Boolean(LoginStatus.LOGGED_IN):
				return "You are logged in.";
			case Boolean(LoginStatus.LOGGED_OUT):
				return "You are logged out.";
			default:
				return "Unknown status";
		}
	}
}
