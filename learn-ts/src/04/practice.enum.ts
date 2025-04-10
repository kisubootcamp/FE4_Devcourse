// Q1
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
  function getDayName(day: Day): string {
    switch (day) {
      case Day.MONDAY:
        return "Monday";
      case Day.TUESDAY:
        return "Tuesday";
      case Day.WEDNESDAY:
        return "Wednesday";
      case Day.THURSDAY:
        return "Thursday";
      case Day.FRIDAY:
        return "Friday";
      case Day.SATURDAY:
        return "Saturday";
      case Day.SUNDAY:
        return "Sunday";
      default:
        return "Invalid Day";
    }
  }
}

{
  // Q2
  enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: Status): string {
    switch (status) {
      case Status.SUCCESS:
        return "Success";
      case Status.NOT_FOUND:
        return "Not Found";
      case Status.INTERNAL_ERROR:
        return "Internal Server Error";
      default:
        return "Unknown Status";
    }
  }
}

{
  // Q3
  enum Zip {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: string): string {
    switch (zip) {
      case "100":
        return Zip.SEOUL;
      case "200":
        return Zip.BUSAN;
      case "300":
        return Zip.DAEGU;
      default:
        return "Unknown City";
    }
  }
}

{
  // Q4
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
  // Q5
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
}

{
  // Q6
  enum Status {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: string): string {
    if (status === Status.ORDER_PLACED) return "Your order has been placed.";
    if (status === Status.PAYMENT_PENDING) return "Payment is pending.";
    if (status === Status.SHIPPED) return "Your order has been shipped.";
    if (status === Status.DELIVERED) return "Your order has been delivered.";
    return "Unknown Status";
  }
}

{
  // Q7
  enum Status {
    IS_ACTIVE = 1,
    IS_INACTIVE = 0,
  }

  function toggleStatus(status: boolean): boolean {
    if (true) return Boolean(Status.IS_INACTIVE);
    else return Boolean(Status.IS_ACTIVE);
  }
}

{
  // Q8
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

  console.log(getOptionValue(Option.OPTION_ONE));
}

{
  // Q9
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
}

{
  // Q10
  enum Status {
    LOGGED_IN = 1,
    LOGGED_OUT = 0,
  }

  function checkLoginStatus(status: boolean): string {
    if (status === !!Status.LOGGED_IN) return "You are logged in.";
    if (status === !!Status.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}
