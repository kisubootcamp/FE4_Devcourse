// 이넘 연습문제+
// 01
{
  enum Day {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: Day): string {
    if (day === Day.MONDAY) return 'Monday';
    if (day === Day.TUESDAY) return 'Tuesday';
    if (day === Day.WEDNESDAY) return 'Wednesday';
    if (day === Day.THURSDAY) return 'Thursday';
    if (day === Day.FRIDAY) return 'Friday';
    if (day === Day.SATURDAY) return 'Saturday';
    if (day === Day.SUNDAY) return 'Sunday';
    return 'Invalid day';
  }
}

// 02
{
  enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: Status): string {
    if (status === Status.SUCCESS) return 'Success';
    if (status === Status.NOT_FOUND) return 'Not Found';
    if (status === Status.INTERNAL_ERROR) return 'Internal Server Error';
    return 'Unknown Status';
  }
}

// 03
{
  enum Zip {
    SEOUL = 'Seoul',
    BUSAN = 'Busan',
    DAEGU = 'Daegu',
  }

  function getCityByZip(zip: string): string {
    if (zip === '100') return Zip.SEOUL;
    if (zip === '200') return Zip.BUSAN;
    if (zip === '300') return Zip.DAEGU;
    return 'Unknown City';
  }
}

// 04
{
  enum Role {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
  }
  function getPermissionLevel(role: Role): string {
    if (role === Role.ADMIN) return 'Full access';
    if (role === Role.USER) return 'Limited access';
    if (role === Role.GUEST) return 'Guest access';
    return 'No access';
  }
}

// 05

{
  enum Status {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }

  function getProductStatus(status: Status): string {
    if (status === Status.PENDING) return 'Pending';
    if (status === Status.SHIPPED) return 'Shipped';
    if (status === Status.DELIVERED) return 'Delivered';
    return 'Unknown Status';
  }
}

// 06
{
  enum Status {
    ORDER_PLACED = 'Order Placed',
    PAYMENT_PENDING = 'Payment Pending',
    SHIPPED = 'Shipped',
    DELIVERED = 'Delivered',
  }

  function getOrderStatus(status: Status): string {
    if (status === Status.ORDER_PLACED) return 'Your order has been placed.';
    if (status === Status.PAYMENT_PENDING) return 'Payment is pending.';
    if (status === Status.SHIPPED) return 'Your order has been shipped.';
    if (status === Status.DELIVERED) return 'Your order has been delivered.';
    return 'Unknown Status';
  }
}

// 07
{
  enum Status {
    IS_ACTIVE,
    IS_INACTIVE,
  }

  function toggleStatus(status: Status): boolean {
    return status === Status.IS_INACTIVE ? true : false;
  }
}

// 08
{
  enum Optin {
    OPTION_ONE = 'Option 1',
    OPTION_TWO = 'Option 2',
    OPTION_THREE = 'Option 3',
  }

  function getOptionValue(option: Optin): string {
    if (option === Optin.OPTION_ONE) return 'You selected Option 1.';
    if (option === Optin.OPTION_TWO) return 'You selected Option 2.';
    if (option === Optin.OPTION_THREE) return 'You selected Option 3.';
    return 'Invalid option';
  }
}

// 09
{
  enum Meal {
    BREAKFAST = 'Breakfast',
    LUNCH = 'Lunch',
    DINNER = 'Dinner',
  }

  function getMealTime(meal: Meal): string {
    if (meal === Meal.BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === Meal.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === Meal.DINNER) return "Good evening, it's dinner time!";
    return 'Invalid meal time';
  }
}

// 10
{
  enum Status {
    LOGGED_IN,
    LOGGED_OUT,
  }

  function checkLoginStatus(status: Status): string {
    if (status === Status.LOGGED_IN) return 'You are logged in.';
    if (status === Status.LOGGED_OUT) return 'You are logged out.';
    return 'Unknown status';
  }
}
