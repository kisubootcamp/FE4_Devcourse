// 01
{
  enum Day {
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7,
  }

  function getDayName(day: number): string {
    if (day === Day.MONDAY) return "Monday";
    if (day === Day.TUESDAY) return "Tuesday";
    if (day === Day.WEDNESDAY) return "Wednesday";
    if (day === Day.THURSDAY) return "Thursday";
    if (day === Day.FRIDAY) return "Friday";
    if (day === Day.SATURDAY) return "Saturday";
    if (day === Day.SUNDAY) return "Sunday";
    return "Invalid day";
  }

  console.log(getDayName(8));
}

// 02
{
  enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: number): string {
    if (status === Status.SUCCESS) return "Success";
    if (status === Status.NOT_FOUND) return "Not Found";
    if (status === Status.INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }

  console.log(getStatusMessage(404));
}

// 03
{
  enum Zipcode {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: string): string {
    if (zip === "100") return Zipcode.SEOUL;
    if (zip === "200") return Zipcode.BUSAN;
    if (zip === "300") return Zipcode.DAEGU;
    return "Unknown City";
  }

  console.log(getCityByZip("100"));
}

// 04
{
  enum Permission {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: string): string {
    if (role === Permission.ADMIN) return "Full access";
    if (role === Permission.USER) return "Limited access";
    if (role === Permission.GUEST) return "Guest access";
    return "No access";
  }

  console.log(getPermissionLevel("admin"));
}

// 05
{
  enum Status {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }

  function getProductStatus(status: number): string {
    if (status === Status.PENDING) return "Pending";
    if (status === Status.SHIPPED) return "Shipped";
    if (status === Status.DELIVERED) return "Delivered";
    return "Unknown Status";
  }

  console.log(getProductStatus(1));
}

// 06
{
  enum Order {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: string): string {
    if (status === Order.ORDER_PLACED) return "Your order has been placed.";
    if (status === Order.PAYMENT_PENDING) return "Payment is pending.";
    if (status === Order.SHIPPED) return "Your order has been shipped.";
    if (status === Order.DELIVERED) return "Your order has been delivered.";
    return "Unknown Status";
  }

  console.log(getOrderStatus("Order Placed"));
}

// 07
{
  enum Toggle {
    IS_ACTIVE = 1,
    IS_INACTIVE = 0,
  }

  function toggleStatus(status: Toggle): boolean {
    return !status;
  }

  console.log(toggleStatus(0));
}

// 08
{
  enum OPtion {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: string): string {
    if (option === OPtion.OPTION_ONE) return "You selected Option 1.";
    if (option === OPtion.OPTION_TWO) return "You selected Option 2.";
    if (option === OPtion.OPTION_THREE) return "You selected Option 3.";
    return "Invalid option";
  }

  console.log(getOptionValue("Option 2"));
}

// 09
{
  enum Meal {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: string): string {
    if (meal === Meal.BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === Meal.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === Meal.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }

  console.log(getMealTime("Dinner"));
}

// 10
{
  enum Login {
    LOGGED_IN = 1,
    LOGGED_OUT = 0,
  }

  function checkLoginStatus(status: number): string {
    if (status === Login.LOGGED_IN) return "You are logged in.";
    if (status === Login.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }

  console.log(checkLoginStatus(5));
}
