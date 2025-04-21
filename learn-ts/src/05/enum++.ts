{
  //1. 사용자 인증상태
  enum UserStatus {
    UNVERIFIED = "UNVERIFIED",
    PENDING = "PENDING",
    VERIFIED = "VERIFIED",
  }

  function getUserStatus(status: string): string {
    if (status === UserStatus.UNVERIFIED) return "User is unverified";
    if (status === UserStatus.PENDING) return "User verification is pending";
    if (status === UserStatus.VERIFIED) return "User is verified";
    return "Unknown status";
  }

  console.log(getUserStatus("PENDING"));
  console.log(getUserStatus("바보"));
}
{
  //2. 주문 처리상태(다양한 상태)
  enum ProductStatus {
    INITIATED = 0,
    PROCESSING,
    SHIPPED,
    DELIVERED,
    CANCELLED,
  }

  function getOrderState(state: number): string {
    if (state === 0) return "Order initiated";
    if (state === 1) return "Order being processed";
    if (state === 2) return "Order shipped";
    if (state === 3) return "Order delivered";
    if (state === 4) return "Order cancelled";
    return "Unknown state";
  }

  console.log(getOrderState(2)); //"Order shipped"
  console.log(getOrderState(5)); //"Unknown state"
}
{
  //3. 레벨별 사용자 경험
  enum UserLevel {
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    EXPERT = "EXPERT",
  }

  function getUserLevel(level: string): string {
    if (level === UserLevel.BEGINNER) return "Beginner user";
    if (level === UserLevel.INTERMEDIATE) return "Intermediate user";
    if (level === UserLevel.EXPERT) return "Expert user";
    return "Unknown level";
  }

  console.log(getUserLevel("EXPERT"));
  console.log(getUserLevel("xxxxxx"));
}
{
  //4. 결제상태
  enum PaymentStatus {
    NOT_STARTED, //0
    IN_PROGRESS, //1
    COMPLETED, //2
    FAILED, //3
  }
  function getPaymentStatus(status: number): string {
    if (status === PaymentStatus.NOT_STARTED) return "Payment not started";
    if (status === PaymentStatus.IN_PROGRESS) return "Payment in progress";
    if (status === PaymentStatus.COMPLETED) return "Payment completed";
    if (status === PaymentStatus.FAILED) return "Payment failed";
    return "Unknown status";
  }

  console.log(getPaymentStatus(4)); //"Unknown status"
  console.log(getPaymentStatus(3));
}
{
  //5. 회원가입 단계
  enum SignStep {
    STEP_ONE = "STEP_ONE",
    STEP_TWO = "STEP_TWO",
    STEP_THREE = "STEP_THREE",
  }

  function getSignupStep(step: string): string {
    if (step === SignStep.STEP_ONE) return "Step 1: Enter details";
    if (step === SignStep.STEP_TWO) return "Step 2: Confirm email";
    if (step === SignStep.STEP_THREE) return "Step 3: Complete registration";
    return "Unknown step";
  }

  console.log(getSignupStep("STEP_ONE"));
  console.log(getSignupStep("STEP_FIVE")); //"Unknown step"
}
{
  //6. 차종별 가격
  enum CarType {
    SEDAN = "SEDAN",
    SUV = "SUV",
    TRUCK = "TRUCK",
  }

  function getPriceByCarType(type: string): number {
    if (type === CarType.SEDAN) return 30000;
    if (type === CarType.SUV) return 40000;
    if (type === CarType.TRUCK) return 50000;
    return 0;
  }

  console.log(getPriceByCarType("SUV"));
  console.log(getPriceByCarType("DAMAS")); //0
}
{
  // 7. 채팅 메세지 유형
  enum MessageType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    FILE = "FILE",
  }
  function getMessageType(type: string): string {
    if (type === MessageType.TEXT) return "Text message";
    if (type === MessageType.IMAGE) return "Image message";
    if (type === MessageType.VIDEO) return "Video message";
    if (type === MessageType.FILE) return "File message";
    return "Unknown message type";
  }

  console.log(getMessageType("FILE"));
  console.log(getMessageType("PHOTO")); //"Unknown message type"
}
{
  //8. 시스템 로그 레벨
  enum LogLevel {
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    DEBUG = "DEBUG",
  }

  function logMessage(level: string, message: string): void {
    if (level === LogLevel.INFO) console.log("INFO: " + message);
    if (level === LogLevel.WARN) console.warn("WARN: " + message);
    if (level === LogLevel.ERROR) console.error("ERROR: " + message);
    if (level === LogLevel.DEBUG) console.debug("DEBUG: " + message);
  }

  logMessage("INFO", "안녕하세요.");
  logMessage("ERROR", "공습경보! 에러발생!");
}
{
  //9. 날짜유형(일반, 휴일)
  enum DayType {
    WEEKDAY = "WEEKDAY",
    WEEKEND = "WEEKEND",
  }
  function getDayType(day: string): string {
    if (day === DayType.WEEKDAY) return "It's a weekday";
    if (day === DayType.WEEKEND) return "It's a weekend";
    return "Unknown day type";
  }
  console.log(getDayType("WEEKDAY"));
  console.log(getDayType("WEEKEND"));
}

{
  //10. 마케팅 켐페인 유형
  enum CampaignType {
    DISCOUNT = "DISCOUNT",
    PROMOTION = "PROMOTION",
    GIVEAWAY = "GIVEAWAY",
  }

  function getCampaignType(type: string): string {
    if (type === CampaignType.DISCOUNT) return "Discount campaign";
    if (type === CampaignType.PROMOTION) return "Promotion campaign";
    if (type === CampaignType.GIVEAWAY) return "Giveaway campaign";
    return "Unknown campaign type";
  }

  console.log(getCampaignType("DISCOUNT"));
  console.log(getCampaignType("THANKGIVING")); // "Unknown campaign type"
}
