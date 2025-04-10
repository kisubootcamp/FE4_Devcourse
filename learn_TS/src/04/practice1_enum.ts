{
  // 1
  enum DayEnum {
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7,
  }

  function getDayName(day: DayEnum): string {
    if (day === 1) return "Monday";
    if (day === 2) return "Tuesday";
    if (day === 3) return "Wednesday";
    if (day === 4) return "Thursday";
    if (day === 5) return "Friday";
    if (day === 6) return "Saturday";
    if (day === 7) return "Sunday";
    return "Invalid day";
  }
  console.log(getDayName(1));
}

{
  enum Message {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: Message): string {
    if (status === 200) return "Success";
    if (status === 404) return "Not Found";
    if (status === 500) return "Internal Server Error";
    return "Unknown Status";
  }
  console.log(getStatusMessage(404));
}

{
  // 3
  enum ZipEnum {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: string): string {
    if (zip === "100") return ZipEnum.SEOUL;
    if (zip === "200") return ZipEnum.BUSAN;
    if (zip === "300") return ZipEnum.DAEGU;
    return "Unknown City";
  }

  console.log(getCityByZip("100"));
}

{
  //4
  enum PermissionLevel {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: PermissionLevel): string {
    if (role === PermissionLevel.ADMIN) return "Full access";
    if (role === PermissionLevel.USER) return "Limited access";
    if (role === PermissionLevel.GUEST) return "Guest access";
    return "No access";
  }

  console.log(getPermissionLevel(PermissionLevel.ADMIN));
}

{
  // 5
  enum Product {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }

  function getProductStatus(status: Product): string {
    if (status === Product.PENDING) return "Pending";
    if (status === Product.SHIPPED) return "Shipped";
    if (status === Product.DELIVERED) return "Delivered";
    return "Unknown Status";
  }

  console.log(getProductStatus(Product.SHIPPED));
}

{
  //6
  enum OrderStatus {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: string): string {
    if (status === OrderStatus.ORDER_PLACED)
      return "Your order has been placed.";
    if (status === OrderStatus.PAYMENT_PENDING) return "Payment is pending.";
    if (status === OrderStatus.SHIPPED) return "Your order has been shipped.";
    if (status === OrderStatus.DELIVERED)
      return "Your order has been delivered.";
    return "Unknown Status";
  }

  // 사용 예시
  console.log(getOrderStatus(OrderStatus.SHIPPED)); // "Your order has been shipped."
}

{
  //7
  enum Status {
    IS_ACTIVE = 1,
    IS_INACTIVE = 0,
  }

  function toggleStatus(status: Status): boolean {
    return !Status.IS_ACTIVE;
  }
  console.log(toggleStatus(1));
}

{
  // 8
  enum Option {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: string): string {
    if (option === Option.OPTION_ONE) return "You selected Option 1.";
    if (option === Option.OPTION_TWO) return "You selected Option 2.";
    if (option === Option.OPTION_THREE) return "You selected Option 3.";
    return "Invalid option";
  }

  console.log(getOptionValue("Option 2"));
}

{
  // 9

  enum Time {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: string): string {
    if (meal === Time.BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === Time.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === Time.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }
  console.log(getMealTime(Time.DINNER));
}

{
  const LOGGED_IN = true;
  const LOGGED_OUT = false;

  function checkLoginStatus(status: boolean): string {
    if (status === LOGGED_IN) return "You are logged in.";
    if (status === LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
  console.log(checkLoginStatus(true));
}
