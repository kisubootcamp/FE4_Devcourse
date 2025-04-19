{
  //1. 요일을 나타내는 상수
  enum Dayname {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: Dayname): string {
    switch (day) {
      case Dayname.MONDAY:
        return "Monday";
      case Dayname.TUESDAY:
        return "Tuesday";
      case Dayname.WEDNESDAY:
        return "Wednesday";
      case Dayname.THURSDAY:
        return "Thursday";
      case Dayname.FRIDAY:
        return "Friday";
      case Dayname.SATURDAY:
        return "Saturday";
      case Dayname.SUNDAY:
        return "Sunday";
      default:
        return "Invalid day";
    }
  }
  console.log(getDayName(3));
}
{
  //2. 상태코드
  enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: number): string {
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

  console.log(getStatusMessage(404));
  console.log(getStatusMessage(400));
}
{
  //3. 우편번호에 따른 지역 이름
  enum City {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: string): string {
    if (zip === "100") {
      return City.SEOUL;
    } else if (zip === "200") {
      return City.BUSAN;
    } else if (zip === "300") {
      return City.DAEGU;
    } else {
      return "Unknown City";
    }
  }

  console.log(getCityByZip("200"));
}
{
  //4. 사용자 권한
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

  console.log(getPermissionLevel(Status.ADMIN));
}
{
  // 5. 상품 상태
  enum Status {
    PENDING = 1,
    SHIPPED,
    DELIVERED,
  }

  function getProductStatus(status: number): string {
    if (status === 1) return "Pending";
    if (status === 2) return "Shipped";
    if (status === 3) return "Delivered";
    return "Unknown Status";
  }

  console.log(getProductStatus(3)); //Delivered
  console.log(getProductStatus(5)); //Unknown Status
}
{
  //6. 주문 상태
  enum OrderStatus {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: string): string {
    if (status === OrderStatus.ORDER_PLACED) return "Your order has been placed.";
    if (status === OrderStatus.PAYMENT_PENDING) return "Payment is pending.";
    if (status === OrderStatus.SHIPPED) return "Your order has been shipped.";
    if (status === OrderStatus.DELIVERED) return "Your order has been delivered.";
    return "Unknown Status";
  }

  console.log(getOrderStatus(OrderStatus.DELIVERED));
}
{
  //7. 상태변경
  enum Status {
    IS_ACTIVE = "true",
    IS_INACTIVE = "false",
  }

  function toggleStatus(status: Status): Status {
    return status === Status.IS_ACTIVE ? Status.IS_INACTIVE : Status.IS_ACTIVE;
  }

  const active = toggleStatus(Status.IS_ACTIVE);
  console.log(active);
}
{
  //8. 선택지 값
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

  console.log(getOptionValue(Option.OPTION_THREE));
}
{
  // 9. 식사시간
  enum MammaTime {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: string): string {
    if (meal === MammaTime.BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === MammaTime.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === MammaTime.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }

  console.log(getMealTime(MammaTime.LUNCH));
}
{
  // 10. 로그인 상태
  enum CheckLogin {
    LOGGED_IN = "true",
    LOGGED_OUT = "false",
  }

  function checkLoginStatus(status: CheckLogin): string {
    if (status === CheckLogin.LOGGED_IN) return "You are logged in.";
    else if (status === CheckLogin.LOGGED_OUT) return "You are logged out.";
    else return "Unknown status";
  }

  console.log(checkLoginStatus(CheckLogin.LOGGED_IN));
}
