{
    // 1번 문제
    enum Day{
        MONDAY = 1,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY
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
    // 2번 문제
    enum Status{
        SUCCESS = 200,
        NOT_FOUND = 404,
        INTERNAL_ERROR = 500
    }
    

    function getStatusMessage(status: number): string {
        if (status === Status.SUCCESS) return "Success";
        if (status === Status.NOT_FOUND) return "Not Found";
        if (status === Status.INTERNAL_ERROR) return "Internal Server Error";
        return "Unknown Status";
    }


}

{   
    // 3번 문제
    enum City{
        SEOUL = "100",
        BUSAN = "200",
        DAEGU = "300"
    }
    

    function getCityByZip(zip: string): string {
        if (zip === City.SEOUL) return "Seoul";
        if (zip === City.BUSAN) return "Busan";
        if (zip === City.DAEGU) return "Daegu"
        return "Unknown City";
    }
}

{
    // 4번 문제
    enum Access{
        ADMIN = "admin",
        USER = "user",
        GUEST = "guest"
    }

    function getPermissionLevel(role: string): string {
        if (role === Access.ADMIN) return "Full access";
        if (role === Access.USER) return "Limited access";
        if (role === Access.GUEST) return "Guest access";
        return "No access";
    }
}

{
    // 5번 문제
    enum Post{
        PENDING = 1,
        SHIPPED = 2,
        DELIVERED = 3,
    }

    function getProductStatus(status: number): string {
        if (status === Post.PENDING) return "Pending";
        if (status === Post.SHIPPED) return "Shipped";
        if (status === Post.DELIVERED) return "Delivered";
        return "Unknown Status";
    }
}

{
    // 6번 문제
    enum Order{
        ORDER_PLACED = "Order Placed",
        PAYMENT_PENDING = "Payment Pending",
        SHIPPED = "Shipped",
        DELIVERED = "Delivered"
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
    // 7번 문제
    enum Status{
        IS_ACTIVE = 1,
        IS_INACTIVE = 0
    }

    function toggleStatus(status: Status): boolean {
        if(status === Status.IS_ACTIVE){
            return !status;
        }else if (status === Status.IS_INACTIVE){
            return !status;
        }
        return false; 
    }
}

{
    enum Option{
        OPTION_ONE = "Option 1",
        OPTION_TWO = "Option 2",
        OPTION_THREE = "Option 3"
    }   

    function getOptionValue(option: string): string {
        if (option === Option.OPTION_ONE) return "You selected Option 1.";
        if (option === Option.OPTION_TWO) return "You selected Option 2.";
        if (option === Option.OPTION_THREE) return "You selected Option 3.";
        return "Invalid option";
    }
    
}

{
    // 9번 문제
    enum MealTime{
        BREAKFAST = "Breakfast",
        LUNCH = "Lunch",
        DINNER = "Dinner"
    }

    function getMealTime(meal: string): string {
        if (meal === MealTime.BREAKFAST) return "Good morning, it's breakfast time!";
        if (meal === MealTime.LUNCH) return "Good afternoon, it's lunch time!";
        if (meal === MealTime.DINNER) return "Good evening, it's dinner time!";
        return "Invalid meal time";
    }
}

{
    // 10번 문제
    enum LoginStatus {
        LOGGED_IN = 1,
        LOGGED_OUT = 0
    }

    function checkLoginStatus(status: LoginStatus): string {
        if (status === LoginStatus.LOGGED_IN) return "You are logged in.";
        if (status === LoginStatus.LOGGED_OUT) return "You are logged out.";
        return "Unknown status";
    }

}