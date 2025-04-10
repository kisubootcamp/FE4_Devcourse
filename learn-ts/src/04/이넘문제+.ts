{
  //1. 요일을 나타내는 상수
  enum Day {
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7,
  }

  function getDayName(day: Day): string {
    if (day === Day.MONDAY) return "Monday";
    if (day === Day.TUESDAY) return "Tuesday";
    if (day === Day.WEDNESDAY) return "Wednesday";
    if (day === Day.THURSDAY) return "Thursday";
    if (day === Day.FRIDAY) return "Friday";
    if (day === Day.SATURDAY) return "Saturday";
    if (day === Day.SUNDAY) return "Sunday";
    return "Invalid day";
  }
  console.log(getDayName(7));
}

{
  //2. 상태코드
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
  console.log(getStatusMessage(200)); // Success
}

{
  //3. 우편번호에 따른 지역 이름
  enum City {
    SEOUL = 100,
    BUSAN = 200,
    DAEGU = 300,
  }

  function getCityByZip(zip: City): string {
    if (zip === City.SEOUL) return "Seoul";
    if (zip === City.BUSAN) return "Busan";
    if (zip === City.DAEGU) return "Daegu";
    return "Unknown City";
  }
  console.log(getCityByZip(200));
}

{
  //4. 사용자 권한
  enum Level {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: string): string {
    if (role === Level.ADMIN) return "Full access";
    if (role === Level.USER) return "Limited access";
    if (role === Level.GUEST) return "Guest access";
    return "No access";
  }
  console.log(getPermissionLevel("uuser"));
}

{
  //5. 상품상태
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

{
  //
  //6. 주문상태
  enum Status {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: Status): string {
    if (status === Status.ORDER_PLACED) return "Your order has been placed.";
    if (status === Status.PAYMENT_PENDING) return "Payment is pending.";
    if (status === Status.SHIPPED) return "Your order has been shipped.";
    if (status === Status.DELIVERED) return "Your order has been delivered.";
    return "Unknown Status";
  }
  console.log(getOrderStatus(Status.ORDER_PLACED));
}

{
  // CHECK;
  //7. 주문상태 변경
  enum ActiveOrInactive {
    IS_INACTIVE,
    IS_ACTIVE,
  }

  function toggleStatus(status: ActiveOrInactive): boolean {
    if (status === ActiveOrInactive.IS_ACTIVE) return !status;
    else return !status;
  }
  console.log(toggleStatus(1));
}

{
  //8. 선택지 값
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
  //9. 식사 시간
  enum Meal {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: Meal): string {
    if (meal === Meal.BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === Meal.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === Meal.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }
  console.log(getMealTime(Meal.BREAKFAST));
}

{
  //10. 로그인 상태
  enum LoginStatus {
    LOGGED_OUT,
    LOGGED_IN,
  }

  function checkLoginStatus(status: LoginStatus): string {
    if (status === LoginStatus.LOGGED_IN) return "You are logged in.";
    if (status === LoginStatus.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
  console.log(checkLoginStatus(0));
}
