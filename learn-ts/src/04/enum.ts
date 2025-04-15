// 이넘

// 연습문제 +
{
  // 1. 요일을 나타내는 상수
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
}
{
  // 2. 상태 코드
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
}
{
  // 3. 우편번호에 따른 지역 이름
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
{
  // 4. 사용자 권한
  enum Status {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }
  function getPermissionLevel(role: string): string {
    if (role === Status.ADMIN) return "Full access";
    if (role === Status.USER) return "Limited access";
    if (role === Status.GUEST) return "Guest access";
    return "No access";
  }
}
{
  // 5. 상품 상태
  enum Product {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }
  function getProductStatus(status: number): string {
    if (status === Product.PENDING) return "Pending";
    if (status === Product.SHIPPED) return "Shipped";
    if (status === Product.DELIVERED) return "Delivered";
    return "Unknown Status";
  }
}
{
  // 6. 주문 상태
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
}
{
  // 7. 상태 변경
  enum Toggle {
    IS_ACTIVE = "true",
    IS_INACTIVE = "false",
  }
  function toggleStatus(status: boolean): boolean {
    return !status;
  }
}
{
  // 8. 선택지 값
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
}
{
  // 9. 식사 시간
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
  // 10. 로그인 상태 *
  enum Log {
    LOGGED_IN = "true",
    LOGGED_OUT = "false",
  }
  function checkLoginStatus(status: Log): string {
    if (status === Log.LOGGED_IN) return "You are logged in.";
    if (status === Log.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}
