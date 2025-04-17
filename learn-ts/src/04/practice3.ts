// 이넘 연습문제
// 연습문제+
{
	//   문제 1: 요일을 나타내는 상수
	// 주어진 코드:
	enum DaysEnum {
		MONDAY = 1,
		TUESDAY = 2,
		WEDNESDAY = 3,
		THURSDAY = 4,
		FRIDAY = 5,
		SATURDAY = 6,
		SUNDAY = 7,
	}

	function getDayName(day: DaysEnum): string {
		if (day === 1) return "Monday";
		if (day === 2) return "Tuesday";
		if (day === 3) return "Wednesday";
		if (day === 4) return "Thursday";
		if (day === 5) return "Friday";
		if (day === 6) return "Saturday";
		if (day === 7) return "Sunday";
		return "Invalid day";
	}

	console.log(getDayName(4));
}
{
	//   문제 2: 상태 코드
	// 주어진 코드:
	enum StatusEnum {
		SUCCESS = 200,
		NOT_FOUND = 404,
		INTERNAL_ERROR = 500,
	}

	function getStatusMessage(status: StatusEnum): string {
		if (status === 200) return "Success";
		if (status === 404) return "Not Found";
		if (status === 500) return "Internal Server Error";
		return "Unknown Status";
	}

	console.log(getStatusMessage(200));
}
{
	//   문제 3: 우편번호에 따른 지역 이름
	// 주어진 코드:
	enum CityEnum {
		SEOUL = "100",
		BUSAN = "200",
		DAEGU = "300",
	}

	function getCityByZip(zip: CityEnum): string {
		if (zip === "100") return "SEOUL";
		if (zip === "200") return "BUSAN";
		if (zip === "300") return "DAEGU";
		return "Unknown City";
	}
}
{
	//   문제 4: 사용자 권한
	// 주어진 코드:
	enum RoleEnum {
		ADMIN = "admin",
		USER = "user",
		GUEST = "guest",
	}

	function getPermissionLevel(role: RoleEnum): string {
		if (role === "admin") return "Full access";
		if (role === "user") return "Limited access";
		if (role === "guest") return "Guest access";
		return "No access";
	}
}
{
	//   문제 5: 상품 상태
	// 주어진 코드:
	enum StatusEnum {
		PENDING = 1,
		SHIPPED = 2,
		DELIVERED = 3,
	}

	function getProductStatus(status: StatusEnum): string {
		if (status === StatusEnum.PENDING) return "Pending";
		if (status === StatusEnum.SHIPPED) return "Shipped";
		if (status === StatusEnum.DELIVERED) return "Delivered";
		return "Unknown Status";
	}
}
{
	//   문제 6: 주문 상태
	// 주어진 코드:
	enum StatusEnum {
		ORDER_PLACED = "Order Placed",
		PAYMENT_PENDING = "Payment Pending",
		SHIPPED = "Shipped",
		DELIVERED = "Delivered",
	}

	function getOrderStatus(status: StatusEnum): string {
		if (status === StatusEnum.ORDER_PLACED) return "Your order has been placed.";
		if (status === StatusEnum.PAYMENT_PENDING) return "Payment is pending.";
		if (status === StatusEnum.SHIPPED) return "Your order has been shipped.";
		if (status === StatusEnum.DELIVERED) return "Your order has been delivered.";
		return "Unknown Status";
	}
}
{
	// ❌
	//   문제 7: 상태 변경
	// 주어진 코드:
	enum StatusEnum {
		IS_ACTIVE = true,
		IS_INACTIVE = true,
	}

	function toggleStatus(status: StatusEnum): boolean {
		return !status;
	}

	console.log(toggleStatus(true));
}
{
	//   문제 8: 선택지 값
	// 주어진 코드:
	enum OptionEnum {
		OPTION_ONE = "Option 1",
		OPTION_TWO = "Option 2",
		OPTION_THREE = "Option 3",
	}

	function getOptionValue(option: OptionEnum): string {
		if (option === OptionEnum.OPTION_ONE) return "You selected Option 1.";
		if (option === OptionEnum.OPTION_TWO) return "You selected Option 2.";
		if (option === OptionEnum.OPTION_THREE) return "You selected Option 3.";
		return "Invalid option";
	}
}
{
	//   문제 9: 식사 시간
	// 주어진 코드:
	enum MealEnum {
		BREAKFAST = "Breakfast",
		LUNCH = "Lunch",
		DINNER = "Dinner",
	}

	function getMealTime(meal: MealEnum): string {
		if (meal === MealEnum.BREAKFAST) return "Good morning, it's breakfast time!";
		if (meal === MealEnum.LUNCH) return "Good afternoon, it's lunch time!";
		if (meal === MealEnum.DINNER) return "Good evening, it's dinner time!";
		return "Invalid meal time";
	}
}
{
	// ❌
	//   문제 10: 로그인 상태
	// 주어진 코드:
	enum StatusEnum {
		LOGGED_IN = true,
		LOGGED_OUT = false,
	}

	function checkLoginStatus(status: StatusEnum): string {
		if (status === StatusEnum.LOGGED_IN) return "You are logged in.";
		if (status === StatusEnum.LOGGED_OUT) return "You are logged out.";
		return "Unknown status";
	}
}

// 연습문제++
{
	//   문제 1: 사용자 인증 상태
	// 주어진 코드:
	enum StatusEnum {
		UNVERIFIED = "UNVERIFIED",
		PENDING = "PENDING",
		VERIFIED = "VERIFIED",
	}

	function getUserStatus(status: StatusEnum): string {
		if (status === StatusEnum.UNVERIFIED) return "User is unverified";
		if (status === StatusEnum.PENDING) return "User verification is pending";
		if (status === StatusEnum.VERIFIED) return "User is verified";
		return "Unknown status";
	}

	console.log(getUserStatus(StatusEnum.UNVERIFIED));
}
{
	//   문제 2: 주문 처리 상태 (다양한 상태)
	// 주어진 코드:
	enum StateEnum {
		INITIATED = 0,
		PROCESSING = 1,
		SHIPPED = 2,
		DELIVERED = 3,
		CANCELLED = 4,
	}

	function getOrderState(state: StateEnum): string {
		if (state === StateEnum.INITIATED) return "Order initiated";
		if (state === StateEnum.PROCESSING) return "Order being processed";
		if (state === StateEnum.SHIPPED) return "Order shipped";
		if (state === StateEnum.DELIVERED) return "Order delivered";
		if (state === StateEnum.CANCELLED) return "Order cancelled";
		return "Unknown state";
	}
}
{
	//   문제 3: 레벨별 사용자 경험
	// 주어진 코드:
	enum LevelEnum {
		BEGINNER = "BEGINNER",
		INTERMEDIATE = "INTERMEDIATE",
		EXPERT = "EXPERT",
	}

	function getUserLevel(level: LevelEnum): string {
		if (level === LevelEnum.BEGINNER) return "Beginner user";
		if (level === LevelEnum.INTERMEDIATE) return "Intermediate user";
		if (level === LevelEnum.EXPERT) return "Expert user";
		return "Unknown level";
	}
}
{
	//   문제 4: 결제 상태
	// 주어진 코드:
	enum StatusEnum {
		NOT_STARTED = 0,
		IN_PROGRESS = 1,
		COMPLETED = 2,
		FAILED = 3,
	}

	function getPaymentStatus(status: StatusEnum): string {
		if (status === StatusEnum.NOT_STARTED) return "Payment not started";
		if (status === StatusEnum.IN_PROGRESS) return "Payment in progress";
		if (status === StatusEnum.COMPLETED) return "Payment completed";
		if (status === StatusEnum.FAILED) return "Payment failed";
		return "Unknown status";
	}
}
{
	//   문제 5: 회원 가입 단계
	// 주어진 코드:
	enum StepEnum {
		STEP_ONE = "STEP_ONE",
		STEP_TWO = "STEP_TWO",
		STEP_THREE = "STEP_THREE",
	}

	function getSignupStep(step: StepEnum): string {
		if (step === StepEnum.STEP_ONE) return "Step 1: Enter details";
		if (step === StepEnum.STEP_TWO) return "Step 2: Confirm email";
		if (step === StepEnum.STEP_THREE) return "Step 3: Complete registration";
		return "Unknown step";
	}
}
{
	// 문제 6: 차종별 가격
	// 주어진 코드:
	enum TypeEnum {
		SEDAN = "SEDAN",
		SUV = "SUV",
		TRUCK = "TRUCK",
	}

	function getPriceByCarType(type: TypeEnum): number {
		if (type === TypeEnum.SEDAN) return 30000;
		if (type === TypeEnum.SUV) return 40000;
		if (type === TypeEnum.TRUCK) return 50000;
		return 0;
	}
}
{
	//   문제 7: 채팅 메시지 유형
	// 주어진 코드:
	enum TypeEnum {
		TEXT = "TEXT",
		IMAGE = "IMAGE",
		VIDEO = "VIDEO",
		FILE = "FILE",
	}

	function getMessageType(type: TypeEnum): string {
		if (type === TypeEnum.TEXT) return "Text message";
		if (type === TypeEnum.IMAGE) return "Image message";
		if (type === TypeEnum.VIDEO) return "Video message";
		if (type === TypeEnum.FILE) return "File message";
		return "Unknown message type";
	}
}
{
	//   문제 8: 시스템 로그 레벨
	// 주어진 코드:
	enum LevelEnum {
		INFO = "INFO",
		WARN = "WARN",
		ERROR = "ERROR",
		DEBUG = "DEBUG",
	}

	function logMessage(level: LevelEnum, message: string): void {
		if (level === LevelEnum.INFO) console.log("INFO: " + message);
		if (level === LevelEnum.WARN) console.warn("WARN: " + message);
		if (level === LevelEnum.ERROR) console.error("ERROR: " + message);
		if (level === LevelEnum.DEBUG) console.debug("DEBUG: " + message);
	}
}
{
	//   문제 9: 날짜 유형 (일반, 휴일)
	// 주어진 코드:
	enum DayEnum {
		WEEKDAY = "WEEKDAY",
		WEEKEND = "WEEKEND",
	}

	function getDayType(day: DayEnum): string {
		if (day === DayEnum.WEEKDAY) return "It's a weekday";
		if (day === DayEnum.WEEKEND) return "It's a weekend";
		return "Unknown day type";
	}
}
{
	//   문제 10: 마케팅 캠페인 유형
	// 주어진 코드:
	enum TypeEnum {
		DISCOUNT = "DISCOUNT",
		PROMOTION = "PROMOTION",
		GIVEAWAY = "GIVEAWAY",
	}

	function getCampaignType(type: TypeEnum): string {
		if (type === TypeEnum.DISCOUNT) return "Discount campaign";
		if (type === TypeEnum.PROMOTION) return "Promotion campaign";
		if (type === TypeEnum.GIVEAWAY) return "Giveaway campaign";
		return "Unknown campaign type";
	}
}
