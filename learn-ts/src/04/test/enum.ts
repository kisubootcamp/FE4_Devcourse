//1
{
  enum Day {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: number): string {
    if (day === 1) return "Monday";
    if (day === 2) return "Tuesday";
    if (day === 3) return "Wednesday";
    if (day === 4) return "Thursday";
    if (day === 5) return "Friday";
    if (day === 6) return "Saturday";
    if (day === 7) return "Sunday";
    return "Invalid day";
  }

  console.log(getDayName(3));
  console.log(getDayName(6));
  console.log(getDayName(0));
}

//2
{
  enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: Status): string {
    if (status === Status.SUCCESS) return "Success";
    if (status === Status.NOT_FOUND) return "Not Found";
    if (status === Status.INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }
}

//3
{
  enum City {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: string): string {
    if (zip === "100") return City.SEOUL;
    if (zip === "200") return City.BUSAN;
    if (zip === "300") return City.DAEGU;
    return "Unknown City";
  }
}

//4
{
  enum User {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: User): string {
    if (role === User.ADMIN) return "Full access";
    if (role === User.USER) return "Limited access";
    if (role === User.GUEST) return "Guest access";
    return "No access";
  }
}

//5
{
  enum Status {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }

  function getProductStatus(status: Status): string {
    if (status === Status.PENDING) return "Pending";
    if (status === Status.SHIPPED) return "Shipped";
    if (status === Status.DELIVERED) return "Delivered";
    return "Unknown Status";
  }
}

//6
{
  enum OrderStatus {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: OrderStatus): string {
    if (status === OrderStatus.ORDER_PLACED)
      return "Your order has been placed.";
    if (status === OrderStatus.PAYMENT_PENDING) return "Payment is pending.";
    if (status === OrderStatus.SHIPPED) return "Your order has been shipped.";
    if (status === OrderStatus.DELIVERED)
      return "Your order has been delivered.";
    return "Unknown Status";
  }
}

//7
{
  enum Status {
    IS_ACTIV = 1,
    IS_INACTIVE = 0,
  }

  function toggleStatus(status: Status): Status {
    return status === Status.IS_ACTIV ? Status.IS_INACTIVE : Status.IS_ACTIV;
  }
}

//8
{
  enum Option {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: Option): string {
    if (option === Option.OPTION_ONE) return "You selected Option 1.";
    if (option === Option.OPTION_TWO) return "You selected Option 2.";
    if (option === Option.OPTION_THREE) return "You selected Option 3.";
    return "Invalid option";
  }
}

//9
{
  enum MealTime {
    BREAKFAST = "Break`fast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: MealTime): string {
    if (meal === MealTime.BREAKFAST)
      return "Good morning, it's breakfast time!";
    if (meal === MealTime.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === MealTime.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }
}

//10
{
  enum LogStatus {
    LOGGED_IN = 1,
    LOGGED_OUT = 0,
  }

  function checkLoginStatus(status: LogStatus): string {
    if (status === LogStatus.LOGGED_IN) return "You are logged in.";
    if (status === LogStatus.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}
