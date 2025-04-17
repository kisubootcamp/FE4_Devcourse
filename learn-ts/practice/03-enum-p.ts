{
  // 1. 요일을 나타내는 상수
  enum week {
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7,
  }

  function getDayName(day: number): string {
    if (day === week.MONDAY) return 'Monday';
    if (day === week.TUESDAY) return 'Tuesday';
    if (day === week.WEDNESDAY) return 'Wednesday';
    if (day === week.THURSDAY) return 'Thursday';
    if (day === week.FRIDAY) return 'Friday';
    if (day === week.SATURDAY) return 'Saturday';
    if (day === week.SUNDAY) return 'Sunday';
    return 'Invalid day';
  }
}

{
  // 2. 상태 코드
  enum state {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: number): string {
    if (status === state.SUCCESS) return 'Success';
    if (status === state.NOT_FOUND) return 'Not Found';
    if (status === state.INTERNAL_ERROR) return 'Internal Server Error';
    return 'Unknown Status';
  }
}

{
  // 3. 우편번호에 따른 지역 이름
  enum region {
    SEOUL = 'Seoul',
    BUSAN = 'Busan',
    DAEGU = 'Daegu',
  }

  function getCityByZip(zip: string): string {
    if (zip === '100') return region.SEOUL;
    if (zip === '200') return region.BUSAN;
    if (zip === '300') return region.DAEGU;
    return 'Unknown City';
  }
}

{
  // 4. 사용자 권한
  enum user {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
  }

  function getPermissionLevel(role: string): string {
    if (role === user.ADMIN) return 'Full access';
    if (role === user.USER) return 'Limited access';
    if (role === user.GUEST) return 'Guest access';
    return 'No access';
  }
}

{
  // 5. 상품 상태
  enum product {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }

  function getProductStatus(status: number): string {
    if (status === product.PENDING) return 'Pending';
    if (status === product.SHIPPED) return 'Shipped';
    if (status === product.DELIVERED) return 'Delivered';
    return 'Unknown Status';
  }
}

{
  // 6. 주문 상태
  enum order {
    ORDER_PLACED = 'Order Placed',
    PAYMENT_PENDING = 'Payment Pending',
    SHIPPED = 'Shipped',
    DELIVERED = 'Delivered',
  }

  function getOrderStatus(status: string): string {
    if (status === order.ORDER_PLACED) return 'Your order has been placed.';
    if (status === order.PAYMENT_PENDING) return 'Payment is pending.';
    if (status === order.SHIPPED) return 'Your order has been shipped.';
    if (status === order.DELIVERED) return 'Your order has been delivered.';
    return 'Unknown Status';
  }
}

{
  // 7. 상태 변경
  const IS_ACTIVE = true;
  const IS_INACTIVE = false;

  enum change {
    IS_ACTIVE = 1,
    IS_INACTIVE = 0,
  }

  function toggleStatus(status: boolean): boolean {
    return !status;
  }
}

{
  // 8. 선택지 값
  enum options {
    OPTION_ONE = 'Option 1',
    OPTION_TWO = 'Option 2',
    OPTION_THREE = 'Option 3',
  }

  function getOptionValue(option: string): string {
    if (option === options.OPTION_ONE) return 'You selected Option 1.';
    if (option === options.OPTION_TWO) return 'You selected Option 2.';
    if (option === options.OPTION_THREE) return 'You selected Option 3.';
    return 'Invalid option';
  }
}

{
  // 9. 식사 시간
  enum time {
    BREAKFAST = 'Breakfast',
    LUNCH = 'Lunch',
    DINNER = 'Dinner',
  }

  function getMealTime(meal: string): string {
    if (meal === time.BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === time.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === time.DINNER) return "Good evening, it's dinner time!";
    return 'Invalid meal time';
  }
}

{
  // 10. 로그인 상태

  enum login {
    LOGGED_IN = 1,
    LOGGED_OUT = 0,
  }

  function checkLoginStatus(status: login): string {
    if (status === login.LOGGED_IN) return 'You are logged in.';
    if (status === login.LOGGED_OUT) return 'You are logged out.';
    return 'Unknown status';
  }

  console.log(checkLoginStatus(login.LOGGED_IN));
}
