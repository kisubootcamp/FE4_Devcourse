// enum 연습문제+
{
  // 1. 요일을 나타내는 상수
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
    if (day === Day.MONDAY) return "Monday";
    if (day === Day.TUESDAY) return "Tuesday";
    if (day === Day.WEDNESDAY) return "Wednesday";
    if (day === Day.THURSDAY) return "Thursday";
    if (day === Day.FRIDAY) return "Friday";
    if (day === Day.SATURDAY) return "Saturday";
    if (day === Day.SUNDAY) return "Sunday";
    return "Invalid day";
  }

  console.log(getDayName(Day.MONDAY)); // "Monday"
  console.log(getDayName(Day.TUESDAY)); // "Tuesday"
  console.log(getDayName(Day.WEDNESDAY)); // "Wednesday"
  console.log(getDayName(Day.THURSDAY)); // "Thursday"
}

console.log("-------------------------------------");

{
  // 2. 상태 코드
  enum StatusCode {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: number): string {
    if (status === StatusCode.SUCCESS) return "Success";
    if (status === StatusCode.NOT_FOUND) return "Not Found";
    if (status === StatusCode.INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }

  console.log(getStatusMessage(StatusCode.SUCCESS)); // "Success"
  console.log(getStatusMessage(StatusCode.NOT_FOUND)); // "Not Found"
  console.log(getStatusMessage(StatusCode.INTERNAL_ERROR)); // "Internal Server Error"
}

console.log("-------------------------------------");

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

  console.log(getCityByZip("100")); // "Seoul"
  console.log(getCityByZip("200")); // "Busan"
  console.log(getCityByZip("300")); // "Daegu"
}

console.log("-------------------------------------");

{
  // 4. 사용자 권한
  enum UserRole {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: string): string {
    if (role === UserRole.ADMIN) return "Full access";
    if (role === UserRole.USER) return "Limited access";
    if (role === UserRole.GUEST) return "Guest access";
    return "No access";
  }

  console.log(getPermissionLevel(UserRole.ADMIN)); // "Full access"
  console.log(getPermissionLevel(UserRole.USER)); // "Limited access"
  console.log(getPermissionLevel(UserRole.GUEST)); // "Guest access"
}

console.log("-------------------------------------");

{
  // 5. 상품 상태
  enum ProductStatus {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }

  function getProductStatus(status: number): string {
    if (status === ProductStatus.PENDING) return "Pending";
    if (status === ProductStatus.SHIPPED) return "Shipped";
    if (status === ProductStatus.DELIVERED) return "Delivered";
    return "Unknown Status";
  }

  console.log(getProductStatus(ProductStatus.PENDING)); // "Pending"
  console.log(getProductStatus(ProductStatus.SHIPPED)); // "Shipped"
  console.log(getProductStatus(ProductStatus.DELIVERED)); // "Delivered"
}

console.log("-------------------------------------");

{
  // 6. 주문 상태
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

  console.log(getOrderStatus(OrderStatus.ORDER_PLACED)); // "Your order has been placed."
  console.log(getOrderStatus(OrderStatus.PAYMENT_PENDING)); // "Payment is pending."
}

console.log("-------------------------------------");

{
  // 7. 상태 변경
  enum Status {
    IS_INACTIVE,
    IS_ACTIVE,
  }

  function toggleStatus(status: number): boolean {
    return !status;
  }

  console.log(toggleStatus(Status.IS_ACTIVE)); // false
  console.log(toggleStatus(Status.IS_INACTIVE)); // true
}

console.log("-------------------------------------");

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

  console.log(getOptionValue(Option.OPTION_ONE)); // "You selected Option 1."
  console.log(getOptionValue(Option.OPTION_TWO)); // "You selected Option 2."
  console.log(getOptionValue(Option.OPTION_THREE)); // "You selected Option 3."
}

console.log("-------------------------------------");

{
  // 9. 식사 시간
  enum MealTime {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: string): string {
    if (meal === MealTime.BREAKFAST)
      return "Good morning, it's breakfast time!";
    if (meal === MealTime.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === MealTime.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }

  console.log(getMealTime(MealTime.BREAKFAST)); // "Good morning, it's breakfast time!"
  console.log(getMealTime(MealTime.LUNCH)); // "Good afternoon, it's lunch time!"
  console.log(getMealTime(MealTime.DINNER)); // "Good evening, it's dinner time!"
}

console.log("-------------------------------------");

{
  // 10. 로그인 상태
  enum LoginStatus {
    LOGGED_OUT,
    LOGGED_IN,
  }

  function checkLoginStatus(status: number): string {
    if (status === LoginStatus.LOGGED_IN) return "You are logged in.";
    if (status === LoginStatus.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }

  console.log(checkLoginStatus(LoginStatus.LOGGED_IN)); // "You are logged in."
  console.log(checkLoginStatus(LoginStatus.LOGGED_OUT)); // "You are logged out."
}
