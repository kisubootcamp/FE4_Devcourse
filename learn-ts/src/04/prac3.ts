//이넘 연습문제+
{
  //1.
  enum DayEnum {
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7,
  }

  function getDayName(day: number): string {
    if (DayEnum[day] === "MONDAY") return "Monday";
    if (DayEnum[day] === "TUESDAY") return "Tuesday";
    if (DayEnum[day] === "WEDNESDAY") return "Wednesday";
    if (DayEnum[day] === "THURSDAY") return "Thursday";
    if (DayEnum[day] === "FRIDAY") return "Friday";
    if (DayEnum[day] === "SATURDAY") return "Saturday";
    if (DayEnum[day] === "SUNDAY") return "Sunday";
    return "Invalid day";
  }
  console.log(getDayName(4));
}

{
  //2.
  enum StatusEnum {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }
  function getStatusMessage(status: number): string {
    if (status === StatusEnum.SUCCESS) return "Success";
    if (status === StatusEnum.NOT_FOUND) return "Not Found";
    if (status === StatusEnum.INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }
  console.log(getStatusMessage(500));
}

{
  //3.?
  enum CityEnum {
    SEOUL = 100,
    BUSAN = 200,
    DAEGU = 300,
  }
  enum CityPost {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }
  function getCityByZip(zip: string): string {
    if (zip === "100") return CityPost.SEOUL;
    if (zip === "200") return CityPost.BUSAN;
    if (zip === "300") return CityPost.DAEGU;
    return "Unknown City";
  }
}
{
  //4.
  enum RoleEnum {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: string): string {
    if (role === RoleEnum.ADMIN) return "Full access";
    if (role === RoleEnum.USER) return "Limited access";
    if (role === RoleEnum.GUEST) return "Guest access";
    return "No access";
  }
}
{
  //5.
  const PENDING = 1;
  const SHIPPED = 2;
  const DELIVERED = 3;

  function getProductStatus(status: number): string {
    if (status === PENDING) return "Pending";
    if (status === SHIPPED) return "Shipped";
    if (status === DELIVERED) return "Delivered";
    return "Unknown Status";
  }
}
{
  //6.
  enum OrderEnum {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: string): string {
    if (status === OrderEnum.ORDER_PLACED) return "Your order has been placed.";
    if (status === OrderEnum.PAYMENT_PENDING) return "Payment is pending.";
    if (status === OrderEnum.SHIPPED) return "Your order has been shipped.";
    if (status === OrderEnum.DELIVERED) return "Your order has been delivered.";
    return "Unknown Status";
  }
}
{
  //7.?
  enum ActiveEnum {
    IS_ACTIVE = "true",
    IS_INACTIVE = "false",
  }

  function toggleStatus(status: string): boolean {
    return status !== "true";
  }
  console.log(toggleStatus(ActiveEnum.IS_ACTIVE));
}
{
  //8.
  enum OptionEnum {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: string): string {
    if (option === OptionEnum.OPTION_ONE) return "You selected Option 1.";
    if (option === OptionEnum.OPTION_TWO) return "You selected Option 2.";
    if (option === OptionEnum.OPTION_THREE) return "You selected Option 3.";
    return "Invalid option";
  }
}
{
  //9.
  enum MealEnum {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: string): string {
    if (meal === MealEnum.BREAKFAST)
      return "Good morning, it's breakfast time!";
    if (meal === MealEnum.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === MealEnum.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }
}
{
  //10.?
  enum LogEnum {
    LOGGED_IN = "true",
    LOGGED_OUT = "false",
  }

  function checkLoginStatus(status: LogEnum): string {
    if (status === LogEnum.LOGGED_IN) return "You are logged in.";
    if (status === LogEnum.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}
