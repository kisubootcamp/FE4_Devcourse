// enum 연습문제+2
{
  // 1. 사용자 인증 상태
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

  console.log(getUserStatus("UNVERIFIED"));
  console.log(getUserStatus("PENDING"));
  console.log(getUserStatus("VERIFIED"));
}

console.log("-------------------------------------");

{
  // 2. 주문 처리 상태 (다양한 상태)
  enum OrderStatus {
    INITIATED,
    PROCESSING,
    SHIPPED,
    DELIVERED,
    CANCELLED,
  }

  function getOrderState(state: number): string {
    if (state === OrderStatus.INITIATED) return "Order initiated";
    if (state === OrderStatus.PROCESSING) return "Order being processed";
    if (state === OrderStatus.SHIPPED) return "Order shipped";
    if (state === OrderStatus.DELIVERED) return "Order delivered";
    if (state === OrderStatus.CANCELLED) return "Order cancelled";
    return "Unknown state";
  }

  console.log(getOrderState(OrderStatus.INITIATED));
  console.log(getOrderState(OrderStatus.PROCESSING));
  console.log(getOrderState(OrderStatus.SHIPPED));
  console.log(getOrderState(OrderStatus.DELIVERED));
  console.log(getOrderState(OrderStatus.CANCELLED));
}

console.log("-------------------------------------");

{
  // 3. 레벨별 사용자 경험
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

  console.log(getUserLevel(UserLevel.BEGINNER));
  console.log(getUserLevel(UserLevel.INTERMEDIATE));
  console.log(getUserLevel(UserLevel.EXPERT));
}

console.log("-------------------------------------");

{
  // 4. 결제 상태
  enum PaymentStatus {
    NOT_STARTED,
    IN_PROGRESS,
    COMPLETED,
    FAILED,
  }

  function getPaymentStatus(status: number): string {
    if (status === PaymentStatus.NOT_STARTED) return "Payment not started";
    if (status === PaymentStatus.IN_PROGRESS) return "Payment in progress";
    if (status === PaymentStatus.COMPLETED) return "Payment completed";
    if (status === PaymentStatus.FAILED) return "Payment failed";
    return "Unknown status";
  }

  console.log(getPaymentStatus(PaymentStatus.NOT_STARTED));
  console.log(getPaymentStatus(PaymentStatus.IN_PROGRESS));
  console.log(getPaymentStatus(PaymentStatus.COMPLETED));
  console.log(getPaymentStatus(PaymentStatus.FAILED));
}

console.log("-------------------------------------");

{
  // 5. 회원 가입 단계
  enum SignupStep {
    STEP_ONE = "STEP_ONE",
    STEP_TWO = "STEP_TWO",
    STEP_THREE = "STEP_THREE",
  }

  function getSignupStep(step: string): string {
    if (step === SignupStep.STEP_ONE) return "Step 1: Enter details";
    if (step === SignupStep.STEP_TWO) return "Step 2: Confirm email";
    if (step === SignupStep.STEP_THREE) return "Step 3: Complete registration";
    return "Unknown step";
  }

  console.log(getSignupStep(SignupStep.STEP_ONE));
  console.log(getSignupStep(SignupStep.STEP_TWO));
  console.log(getSignupStep(SignupStep.STEP_THREE));
}

console.log("-------------------------------------");

{
  // 6. 차종별 가격
  enum PriceByCarType {
    SEDAN = "SEDAN",
    SUV = "SUV",
    TRUCK = "TRUCK",
  }

  function getPriceByCarType(type: string): number {
    if (type === PriceByCarType.SEDAN) return 30000;
    if (type === PriceByCarType.SUV) return 40000;
    if (type === PriceByCarType.TRUCK) return 50000;
    return 0;
  }

  console.log(getPriceByCarType(PriceByCarType.SEDAN));
  console.log(getPriceByCarType(PriceByCarType.SUV));
  console.log(getPriceByCarType(PriceByCarType.TRUCK));
}

console.log("-------------------------------------");

{
  // 7. 채팅 메시지 유형
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

  console.log(getMessageType(MessageType.TEXT));
  console.log(getMessageType(MessageType.IMAGE));
  console.log(getMessageType(MessageType.VIDEO));
  console.log(getMessageType(MessageType.FILE));
}

console.log("-------------------------------------");

{
  // 8. 시스템 로그 레벨
  enum LogMessage {
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    DEBUG = "DEBUG",
  }

  function logMessage(level: string, message: string): void {
    if (level === LogMessage.INFO) console.log("INFO: " + message);
    if (level === LogMessage.WARN) console.warn("WARN: " + message);
    if (level === LogMessage.ERROR) console.error("ERROR: " + message);
    if (level === LogMessage.DEBUG) console.debug("DEBUG: " + message);
  }

  console.log(logMessage(LogMessage.INFO, "INFO: Data is a true"));
  console.log(logMessage(LogMessage.WARN, "WARN: Data is not a 'string' type"));
  console.log(logMessage(LogMessage.ERROR, "ERROR: 'data' is not define"));
  console.log(logMessage(LogMessage.DEBUG, "DEBUG: "));
}

console.log("-------------------------------------");

{
  // 9. 날짜 유형 (일반, 휴일)
  enum DayType {
    WEEKDAY = "WEEKDAY",
    WEEKEND = "WEEKEND",
  }

  function getDayType(day: string): string {
    if (day === DayType.WEEKDAY) return "It's a weekday";
    if (day === DayType.WEEKEND) return "It's a weekend";
    return "Unknown day type";
  }

  console.log(getDayType(DayType.WEEKDAY));
  console.log(getDayType(DayType.WEEKEND));
}

console.log("-------------------------------------");

{
  // 10. 마케팅 캠페인 유형
  enum CampainType {
    DISCOUNT = "DISCOUNT",
    PROMOTION = "PROMOTION",
    GIVEAWAY = "GIVEAWAY",
  }

  function getCampaignType(type: string): string {
    if (type === CampainType.DISCOUNT) return "Discount campaign";
    if (type === CampainType.PROMOTION) return "Promotion campaign";
    if (type === CampainType.GIVEAWAY) return "Giveaway campaign";
    return "Unknown campaign type";
  }

  console.log(getCampaignType(CampainType.DISCOUNT));
  console.log(getCampaignType(CampainType.PROMOTION));
  console.log(getCampaignType(CampainType.GIVEAWAY));
}
