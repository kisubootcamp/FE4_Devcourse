{
  // 문제 1: 사용자 인증 상태
  const UNVERIFIED = "UNVERIFIED";
  const PENDING = "PENDING";
  const VERIFIED = "VERIFIED";

  function getUserStatus(status: string): string {
    if (status === UNVERIFIED) return "User is unverified";
    if (status === PENDING) return "User verification is pending";
    if (status === VERIFIED) return "User is verified";
    return "Unknown status";
  }
  console.log(getUserStatus("UNVERIFIED"));
}

{
  // 문제 2: 주문 처리 상태 (다양한 상태)
  const INITIATED = 0;
  const PROCESSING = 1;
  const SHIPPED = 2;
  const DELIVERED = 3;
  const CANCELLED = 4;

  function getOrderState(state: number): string {
    if (state === INITIATED) return "Order initiated";
    if (state === PROCESSING) return "Order being processed";
    if (state === SHIPPED) return "Order shipped";
    if (state === DELIVERED) return "Order delivered";
    if (state === CANCELLED) return "Order cancelled";
    return "Unknown state";
  }

  console.log(getOrderState(4));
}

{
  // 문제 3: 레벨별 사용자 경험
  const BEGINNER = "BEGINNER";
  const INTERMEDIATE = "INTERMEDIATE";
  const EXPERT = "EXPERT";

  function getUserLevel(level: string): string {
    if (level === BEGINNER) return "Beginner user";
    if (level === INTERMEDIATE) return "Intermediate user";
    if (level === EXPERT) return "Expert user";
    return "Unknown level";
  }

  console.log(getUserLevel("INTERMEDIATE"));
}

{
  // 문제 4: 결제 상태
  const NOT_STARTED = 0;
  const IN_PROGRESS = 1;
  const COMPLETED = 2;
  const FAILED = 3;

  function getPaymentStatus(status: number): string {
    if (status === NOT_STARTED) return "Payment not started";
    if (status === IN_PROGRESS) return "Payment in progress";
    if (status === COMPLETED) return "Payment completed";
    if (status === FAILED) return "Payment failed";
    return "Unknown status";
  }
  console.log(getPaymentStatus(0));
}

{
  // 문제 5: 회원 가입 단계
  const STEP_ONE = "STEP_ONE";
  const STEP_TWO = "STEP_TWO";
  const STEP_THREE = "STEP_THREE";

  function getSignupStep(step: string): string {
    if (step === STEP_ONE) return "Step 1: Enter details";
    if (step === STEP_TWO) return "Step 2: Confirm email";
    if (step === STEP_THREE) return "Step 3: Complete registration";
    return "Unknown step";
  }

  console.log(getSignupStep("STEP_THREE"));
}

{
  // 문제 6: 차종별 가격

  const SEDAN = "SEDAN";
  const SUV = "SUV";
  const TRUCK = "TRUCK";

  function getPriceByCarType(type: string): number {
    if (type === SEDAN) return 30000;
    if (type === SUV) return 40000;
    if (type === TRUCK) return 50000;
    return 0;
  }

  console.log(getPriceByCarType("SUV"));
}

{
  // 문제 7: 채팅 메시지 유형
  const TEXT = "TEXT";
  const IMAGE = "IMAGE";
  const VIDEO = "VIDEO";
  const FILE = "FILE";

  function getMessageType(type: string): string {
    if (type === TEXT) return "Text message";
    if (type === IMAGE) return "Image message";
    if (type === VIDEO) return "Video message";
    if (type === FILE) return "File message";
    return "Unknown message type";
  }
  console.log(getMessageType("VIDEO"));
}

{
  // 문제 8: 시스템 로그 레벨
  const INFO = "INFO";
  const WARN = "WARN";
  const ERROR = "ERROR";
  const DEBUG = "DEBUG";

  function logMessage(level: string, message: string): void {
    if (level === INFO) console.log("INFO: " + message);
    if (level === WARN) console.warn("WARN: " + message);
    if (level === ERROR) console.error("ERROR: " + message);
    if (level === DEBUG) console.debug("DEBUG: " + message);
  }
  logMessage("INFO", "correct");
}

{
  // 문제 9: 날짜 유형 (일반, 휴일)
  const WEEKDAY = "WEEKDAY";
  const WEEKEND = "WEEKEND";

  function getDayType(day: string): string {
    if (day === WEEKDAY) return "It's a weekday";
    if (day === WEEKEND) return "It's a weekend";
    return "Unknown day type";
  }
  console.log(getDayType("WEEKDAY"));
}

{
  // 문제 10: 마케팅 캠페인 유형
  const DISCOUNT = "DISCOUNT";
  const PROMOTION = "PROMOTION";
  const GIVEAWAY = "GIVEAWAY";

  function getCampaignType(type: string): string {
    if (type === DISCOUNT) return "Discount campaign";
    if (type === PROMOTION) return "Promotion campaign";
    if (type === GIVEAWAY) return "Giveaway campaign";
    return "Unknown campaign type";
  }
  console.log(getCampaignType("PROMOTION"));
}
