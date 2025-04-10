{
    // 문제1. 요일을 나타내는 상수
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
        switch (day) {
            case Day.MONDAY:
                return 'Monday';
            case Day.TUESDAY:
                return 'Tuesday';
            case Day.WEDNESDAY:
                return 'Wednesday';
            case Day.THURSDAY:
                return 'Thursday';
            case Day.FRIDAY:
                return 'Friday';
            case Day.SATURDAY:
                return 'Saturday';
            case Day.SUNDAY:
                return 'Sunday';
            default:
                return 'Invalid day';
        }
    }
}

{
    // 문제2. 상태 코드
    enum StatusCode {
        SUCCESS = 200,
        NOT_FOUND = 404,
        INTERNAL_ERROR = 500,
    }

    function getStatusMessage(status: number): string {
        switch (status) {
            case StatusCode.SUCCESS:
                return 'Success';
            case StatusCode.NOT_FOUND:
                return 'Not Found';
            case StatusCode.INTERNAL_ERROR:
                return 'Internal Server Error';
            default:
                return 'Unknown Status';
        }
    }
}

{
    // 문제3. 우편번호에 따른 지역 이름
    enum City {
        Seoul = 'Seoul',
        Busan = 'Busan',
        Daegu = 'Daegu',
        Unknown = 'Unknown City',
    }

    function getCityByZip(zip: string): string {
        switch (zip) {
            case '100':
                return City.Seoul;
            case '200':
                return City.Busan;
            case '300':
                return City.Daegu;
            default:
                return City.Unknown;
        }
    }
}

{
    // 문제4. 사용자 권한
    enum Role {
        ADMIN = 'admin',
        USER = 'user',
        GUEST = 'guest',
    }

    function getPermissionLevel(role: string): string {
        if (role === Role.ADMIN) return 'Full access';
        if (role === Role.USER) return 'Limited access';
        if (role === Role.GUEST) return 'Guest access';
        return 'No access';
    }
}

{
    // 문제5. 상품 상태
    enum ProductStatus {
        PENDING = 1,
        SHIPPED = 2,
        DELIVERED = 3,
    }

    function getProductStatus(status: number): string {
        if (status === ProductStatus.PENDING) return 'Pending';
        if (status === ProductStatus.SHIPPED) return 'Shipped';
        if (status === ProductStatus.DELIVERED) return 'Delivered';
        return 'Unknown Status';
    }
}

{
    // 문제6. 주문 상태
    enum OrderStatus {
        ORDER_PLACED = 'Order Placed',
        PAYMENT_PENDING = 'Payment Pending',
        SHIPPED = 'Shipped',
        DELIVERED = 'Delivered',
    }

    function getOrderStatus(status: string): string {
        if (status === OrderStatus.ORDER_PLACED) return 'Your order has been placed.';
        if (status === OrderStatus.PAYMENT_PENDING) return 'Payment is pending.';
        if (status === OrderStatus.SHIPPED) return 'Your order has been shipped.';
        if (status === OrderStatus.DELIVERED) return 'Your order has been delivered.';
        return 'Unknown Status';
    }
}

{
    // 문제7. 상태 변경
    enum ChangeStatus {
        IS_ACTIVE = 'true',
        IS_INACTIVE = 'false',
    }

    function toggleStatus(status: boolean): boolean {
        return !status;
    }
}

{
    // 문제8. 선택지 값
    enum Option {
        ONE = 'Option 1',
        TWO = 'Option 2',
        THREE = 'Option 3',
    }

    function getOptionValue(option: string): string {
        if (option === Option.ONE) return 'You selected Option 1.';
        if (option === Option.TWO) return 'You selected Option 2.';
        if (option === Option.THREE) return 'You selected Option 3.';
        return 'Invalid option';
    }
}

{
    // 문제9. 식사 시간
    enum Meal {
        BREAKFAST = 'Breakfast',
        LUNCH = 'Lunch',
        DINNER = 'Dinner',
    }

    function getMealTime(meal: string): string {
        if (meal === Meal.BREAKFAST) return "Good morning, it's breakfast time!";
        if (meal === Meal.LUNCH) return "Good afternoon, it's lunch time!";
        if (meal === Meal.DINNER) return "Good evening, it's dinner time!";
        return 'Invalid meal time';
    }
}

{
    // 문제10. 로그인 상태
    enum Valid {
        LOGGED_IN = 'true',
        LOGGED_OUT = 'false',
    }

    function checkLoginStatus(status: boolean): string {
        if (status === Boolean(Valid.LOGGED_IN)) return 'You are logged in.';
        if (status === Boolean(Valid.LOGGED_OUT)) return 'You are logged out.';
        return 'Unknown status';
    }
}
