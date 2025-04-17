// TS 이넘 연습문제+

// 주어진 코드를 enum으로 리팩토링 해보세요.

//문제 1: 요일을 나타내는 상수
{
  const MONDAY = 1;
  const TUESDAY = 2;
  const WEDNESDAY = 3;
  const THURSDAY = 4;
  const FRIDAY = 5;
  const SATURDAY = 6;
  const SUNDAY = 7;

  function getDayName(day: number): string {
    if (day === MONDAY) return "Monday";
    if (day === TUESDAY) return "Tuesday";
    if (day === WEDNESDAY) return "Wednesday";
    if (day === THURSDAY) return "Thursday";
    if (day === FRIDAY) return "Friday";
    if (day === SATURDAY) return "Saturday";
    if (day === SUNDAY) return "Sunday";
    return "Invalid day";
  }
}
{
  enum Days {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: Days): string {
    switch (day) {
      case Days.MONDAY:
        return "Monday";
      case Days.TUESDAY:
        return "Tuesday";
      case Days.WEDNESDAY:
        return "Wednesday";
      case Days.THURSDAY:
        return "Thursday";
      case Days.FRIDAY:
        return "Friday";
      case Days.SATURDAY:
        return "Saturday";
      case Days.SUNDAY:
        return "Sunday";
      default:
        return "Invalid day";
    }
  }
}

// 문제 2: 상태 코드
{
  const SUCCESS = 200;
  const NOT_FOUND = 404;
  const INTERNAL_ERROR = 500;

  function getStatusMessage(status: number): string {
    if (status === SUCCESS) return "Success";
    if (status === NOT_FOUND) return "Not Found";
    if (status === INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }
}
{
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

// 문제 3: 우편번호에 따른 지역 이름
{
  const SEOUL = "Seoul";
  const BUSAN = "Busan";
  const DAEGU = "Daegu";

  function getCityByZip(zip: string): string {
    if (zip === "100") return SEOUL;
    if (zip === "200") return BUSAN;
    if (zip === "300") return DAEGU;
    return "Unknown City";
  }
}
{
  enum ZipCode {
    SEOUL = "100",
    BUSAN = "200",
    DAEGU = "300",
  }
  enum City {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: ZipCode): string {
    switch (zip) {
      case ZipCode.SEOUL:
        return City.SEOUL;
      case ZipCode.BUSAN:
        return City.BUSAN;
      case ZipCode.DAEGU:
        return City.DAEGU;
      default:
        return "Unknown City";
    }
  }
}

// 문제 4: 사용자 권한
{
  const ADMIN = "admin";
  const USER = "user";
  const GUEST = "guest";

  function getPermissionLevel(role: string): string {
    if (role === ADMIN) return "Full access";
    if (role === USER) return "Limited access";
    if (role === GUEST) return "Guest access";
    return "No access";
  }
}
{
  enum Role {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: Role): string {
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

// 문제 5: 상품 상태
{
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
  enum Status {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }

  function getProductStatus(status: Status): string {
    switch (status) {
      case Status.PENDING:
        return "Pending";
      case Status.SHIPPED:
        return "Shipped";
      case Status.DELIVERED:
        return "Delivered";
      default:
        return "Unknown Status";
    }
  }
}

// 문제 6: 주문 상태
{
  const ORDER_PLACED = "Order Placed";
  const PAYMENT_PENDING = "Payment Pending";
  const SHIPPED = "Shipped";
  const DELIVERED = "Delivered";

  function getOrderStatus(status: string): string {
    if (status === ORDER_PLACED) return "Your order has been placed.";
    if (status === PAYMENT_PENDING) return "Payment is pending.";
    if (status === SHIPPED) return "Your order has been shipped.";
    if (status === DELIVERED) return "Your order has been delivered.";
    return "Unknown Status";
  }
}
{
  enum Status {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: Status): string {
    switch (status) {
      case Status.ORDER_PLACED:
        return "Your order has been placed.";
      case Status.PAYMENT_PENDING:
        return "Payment is pending.";
      case Status.SHIPPED:
        return "Your order has been shipped.";
      case Status.DELIVERED:
        return "Your order has been delivered.";
      default:
        return "Unknown Status";
    }
  }
}

// 문제 7: 상태 변경
{
  const IS_ACTIVE = true;
  const IS_INACTIVE = false;

  function toggleStatus(status: boolean): boolean {
    return !status;
  }
}
{
  enum Status {
    IS_ACTIVE = "true",
    IS_INACTIVE = "false",
  }

  function toggleStatus(status: Status): Status {
    return status === Status.IS_ACTIVE ? Status.IS_INACTIVE : Status.IS_ACTIVE;
  }
}

// 문제 8: 선택지 값
{
  const OPTION_ONE = "Option 1";
  const OPTION_TWO = "Option 2";
  const OPTION_THREE = "Option 3";

  function getOptionValue(option: string): string {
    if (option === OPTION_ONE) return "You selected Option 1.";
    if (option === OPTION_TWO) return "You selected Option 2.";
    if (option === OPTION_THREE) return "You selected Option 3.";
    return "Invalid option";
  }
}
{
  enum Option {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: Option): string {
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
}

// 문제 9: 식사 시간
{
  const BREAKFAST = "Breakfast";
  const LUNCH = "Lunch";
  const DINNER = "Dinner";

  function getMealTime(meal: string): string {
    if (meal === BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }
}
{
  enum Meal {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  const mealMessages: Record<Meal, string> = {
    [Meal.BREAKFAST]: "Good morning, it's breakfast time!",
    [Meal.LUNCH]: "Good afternoon, it's lunch time!",
    [Meal.DINNER]: "Good evening, it's dinner time!",
  };

  function getMealTime(meal: Meal): string {
    return mealMessages[meal] ?? "Invalid meal time";
  }
}

// 문제 10: 로그인 상태
{
  const LOGGED_IN = true;
  const LOGGED_OUT = false;

  function checkLoginStatus(status: boolean): string {
    if (status === LOGGED_IN) return "You are logged in.";
    if (status === LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}
{
  enum Status {
    LOGGED_IN = "true",
    LOGGED_OUT = "false",
  }

  const StatusMessages: Record<Status, string> = {
    [Status.LOGGED_IN]: "You are logged in.",
    [Status.LOGGED_OUT]: "You are logged out.",
  };

  function checkLoginStatus(status: Status): string {
    return StatusMessages[status] ?? "Unknown status";
  }
}
