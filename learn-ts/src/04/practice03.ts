{
  // 문제 1: 요일을 나타내는 상수
  enum Day {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }
  // const MONDAY = 1;
  // const TUESDAY = 2;
  // const WEDNESDAY = 3;
  // const THURSDAY = 4;
  // const FRIDAY = 5;
  // const SATURDAY = 6;
  // const SUNDAY = 7;

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
  console.log(getDayName(1));
}

{
  // 문제 2 : 상태 코드
  enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }
  // const SUCCESS = 200;
  // const NOT_FOUND = 404;
  // const INTERNAL_ERROR = 500;

  function getStatusMessage(status: Status): string {
    if (status === Status.SUCCESS) return "Success";
    if (status === Status.NOT_FOUND) return "Not Found";
    if (status === Status.INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }
  console.log(getStatusMessage(200));
}

{
  // 문제 3: 우편번호에 따른 지역 이름
  enum City {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }
  // const SEOUL = "Seoul";
  // const BUSAN = "Busan";
  // const DAEGU = "Daegu";

  const zipMap: { [key: string]: City } = {
    "100": City.SEOUL,
    "200": City.BUSAN,
    "300": City.DAEGU,
  };

  function getCityByZip(zip: string): string {
    return zipMap[zip] || "Unknown City";
  }
  console.log(getCityByZip("100")); // Seoul
}

{
  // 문제 4: 사용자 권한
  enum Auth {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }
  // const ADMIN = "admin";
  // const USER = "user";
  // const GUEST = "guest";

  function getPermissionLevel(role: Auth): string {
    if (role === Auth.ADMIN) return "Full access";
    if (role === Auth.USER) return "Limited access";
    if (role === Auth.GUEST) return "Guest access";
    return "No access";
  }
  console.log(getPermissionLevel(Auth.ADMIN));
}

{
  // 문제 5 : 상품 상태
  enum Product {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }

  // const PENDING = 1;
  // const SHIPPED = 2;
  // const DELIVERED = 3;

  const productMap: { [key in Product]: string } = {
    [Product.PENDING]: "Pending",
    [Product.SHIPPED]: "Shipped",
    [Product.DELIVERED]: "Delivered",
  };

  function getProductStatus(status: Product): string {
    // if (status === PENDING) return "Pending";
    // if (status === SHIPPED) return "Shipped";
    // if (status === DELIVERED) return "Delivered";

    return productMap[status] || "Unknown Status";
  }
  console.log(getProductStatus(1));
}

{
  // 문제 5: 상품 상태
  enum Status {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }
  // const PENDING = 1;
  // const SHIPPED = 2;
  // const DELIVERED = 3;

  const statusMap: { [key in Status]: string } = {
    [Status.PENDING]: "Pending",
    [Status.SHIPPED]: "Shipped",
    [Status.DELIVERED]: "Delivered",
  };

  function getProductStatus(status: Status): string {
    // if (status === PENDING) return "Pending";
    // if (status === SHIPPED) return "Shipped";
    // if (status === DELIVERED) return "Delivered";
    return statusMap[status] || "Unknown Status";
  }
  console.log(getProductStatus(2));
}

{
  // 문제 6: 주문 상태
  enum Status {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }
  // const ORDER_PLACED = "Order Placed";
  // const PAYMENT_PENDING = "Payment Pending";
  // const SHIPPED = "Shipped";
  // const DELIVERED = "Delivered";

  const statusMap: { [key in Status]: string } = {
    [Status.ORDER_PLACED]: "Your order has been placed.",
    [Status.PAYMENT_PENDING]: "Payment is pending.",
    [Status.SHIPPED]: "Your order has been shipped.",
    [Status.DELIVERED]: "Your order has been delivered.",
  };

  function getOrderStatus(status: Status): string {
    // if (status === ORDER_PLACED) return "Your order has been placed.";
    // if (status === PAYMENT_PENDING) return "Payment is pending.";
    // if (status === SHIPPED) return "Your order has been shipped.";
    // if (status === DELIVERED) return "Your order has been delivered.";
    return statusMap[status] || "Unknown Status";
  }
  console.log(getOrderStatus(Status.PAYMENT_PENDING)); // Payment is pending.
}

{
  // 문제 7 : 상태 변경
  // 나중에 다시 보기
  enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
  }
  // const IS_ACTIVE = true;
  // const IS_INACTIVE = false;

  function toggleStatus(status: Status): Status {
    return status === Status.ACTIVE ? Status.INACTIVE : Status.ACTIVE;
  }
}

{
  // 문제 8 : 선택지 값
  enum MOption {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }
  // const OPTION_ONE = "Option 1";
  // const OPTION_TWO = "Option 2";
  // const OPTION_THREE = "Option 3";

  const optionNum: { [key in MOption]: string } = {
    [MOption.OPTION_ONE]: "You selected Option 1.",
    [MOption.OPTION_TWO]: "You selected Option 2.",
    [MOption.OPTION_THREE]: "You selected Option 3.",
  };
  function getOptionValue(option: MOption): string {
    // if (option === OPTION_ONE) return "You selected Option 1.";
    // if (option === OPTION_TWO) return "You selected Option 2.";
    // if (option === OPTION_THREE) return "You selected Option 3.";
    return optionNum[option] || "Invalid option";
  }
  console.log(getOptionValue(MOption.OPTION_ONE));
}

{
  // 문제 9: 식사 시간
  enum Eat {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }
  // const BREAKFAST = "Breakfast";
  // const LUNCH = "Lunch";
  // const DINNER = "Dinner";

  function getMealTime(meal: Eat): string {
    switch (meal) {
      case Eat.BREAKFAST:
        return "Good morning, it's breakfast time!";
      case Eat.LUNCH:
        return "Good afternoon, it's lunch time!";
      case Eat.DINNER:
        return "Good evening, it's dinner time!";
      default:
        return "Invalid meal time";
    }
    // if (meal === BREAKFAST) return "Good morning, it's breakfast time!";
    // if (meal === LUNCH) return "Good afternoon, it's lunch time!";
    // if (meal === DINNER) return "Good evening, it's dinner time!";
    // return "Invalid meal time";
  }
  console.log(getMealTime(Eat.DINNER));
}
{
  // 문제 10 : 로그인 상태
  enum Status {
    LOGGED_IN = "true",
    LOGGED_OUT = "false",
  }
  // const LOGGED_IN = true;
  // const LOGGED_OUT = false;

  function checkLoginStatus(status: Status): string {
    // if (status === LOGGED_IN) return "You are logged in.";
    // if (status === LOGGED_OUT) return "You are logged out.";
    // return "Unknown status";
    switch (status) {
      case Status.LOGGED_IN:
        return "You are logged in.";
      case Status.LOGGED_OUT:
        return "You are logged out.";
      default:
        return "Unknown status";
    }
  }
  console.log(checkLoginStatus(Status.LOGGED_IN));
}
