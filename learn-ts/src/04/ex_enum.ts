{
  //1 요일을 나타내는 상수
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
    if (day < 1 || day > 7) return "Invalid day";
    return Day[day];
  }

  console.log(getDayName(8));
  console.log(getDayName(7));
}

{
  //2 상태 코드
  enum StatusCode {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: number): string {
    switch (status) {
      case StatusCode.SUCCESS:
        return "Success";
      case StatusCode.NOT_FOUND:
        return "Not Found";
      case StatusCode.INTERNAL_ERROR:
        return "Internal Server Error";
      default:
        return "Unknown Status";
    }
  }
  console.log(getStatusMessage(200));
}

{
  //3 우편번호에 따른 지역 이름
  enum Zip {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: string): string {
    if (zip === "100") return Zip.SEOUL;
    if (zip === "200") return Zip.BUSAN;
    if (zip === "300") return Zip.DAEGU;
    return "Unknown City";
  }

  console.log(getCityByZip("100"));
}

{
  //4 사용자 권한
  enum Authorize {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: string): string {
    if (role === Authorize.ADMIN) return "Full access";
    if (role === Authorize.USER) return "Limited access";
    if (role === Authorize.GUEST) return "Guest access";
    return "No access";
  }

  console.log(getPermissionLevel("user"));
}

{
  //5 상품 상태
  enum Status {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }

  function getProductStatus(status: number): string {
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
  console.log(getProductStatus(0));
}

{
  //6 주문 상태
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

  console.log(getOrderStatus("Shipped"));
}

{
  //7 상태 변경
  enum Status {
    IS_ACTIVE = 1,
    IS_INACTIVE = 0,
  }

  function toggleStatus(status: boolean): boolean {
    return status ? Boolean(Status.IS_INACTIVE) : Boolean(Status.IS_ACTIVE);
  }

  console.log(toggleStatus(true));
  console.log(toggleStatus(false));
}

{
  //8 선택지 값
  enum Option {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: string): string {
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
  console.log(getOptionValue("Option 2"));
}

{
  //9 식사 시간
  enum MealTime {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: string): string {
    switch (meal) {
      case MealTime.BREAKFAST:
        return "Good morning, it's breakfast time!";
      case MealTime.LUNCH:
        return "Good afternoon, it's lunch time!";
      case MealTime.DINNER:
        return "Good evening, it's dinner time!";
      default:
        return "Invalid meal time";
    }
  }
  console.log(getMealTime("Lunch"));
}

{
  //10 로그인 상태
  //   enum Status {
  //     LOGGED_IN = 1,
  //     LOGGED_OUT = 0,
  //   }

  //   function checkLoginStatus(status: boolean): string {
  //     switch (status) {
  //       case Boolean(Status.LOGGED_IN):
  //         return "You are logged in.";
  //       case Boolean(Status.LOGGED_OUT):
  //         return "You are logged out.";
  //       default:
  //         return "Unknown status";
  //     }
  //   }

  enum Status {
    LOGGED_IN = "You are logged in.",
    LOGGED_OUT = "You are logged out.",
  }

  function checkLoginStatus(status: boolean): string {
    if (status) return Status.LOGGED_IN;
    else if (!status) return Status.LOGGED_OUT;
    else return "Unknown status";
  }

  console.log(checkLoginStatus(false));
}
