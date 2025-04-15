// TS 이넘 연습문제++

// 주어진 코드를 enum으로 리팩토링 해보세요

// 문제 1: 사용자 인증 상태
{
  const UNVERIFIED = "UNVERIFIED";
  const PENDING = "PENDING";
  const VERIFIED = "VERIFIED";

  function getUserStatus(status: string): string {
    if (status === UNVERIFIED) return "User is unverified";
    if (status === PENDING) return "User verification is pending";
    if (status === VERIFIED) return "User is verified";
    return "Unknown status";
  }
}
{
  enum Status {
    UNVERIFIED = "UNVERIFIED",
    PENDING = "PENDING",
    VERIFIED = "VERIFIED",
  }

  const StatusMessage: Record<Status, string> = {
    [Status.UNVERIFIED]: "User is unverified",
    [Status.PENDING]: "User verification is pending",
    [Status.VERIFIED]: "User is verified",
  };

  function getUserStatus(status: Status): string {
    return StatusMessage[status] ?? "Unknown status";
  }
}

// 문제 2: 주문 처리 상태 (다양한 상태)
{
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
}
{
  enum State {
    INITIATED = 0,
    PROCESSING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
    CANCELLED = 4,
  }

  const StateMessage: Record<State, string> = {
    [State.INITIATED]: "Order initiated",
    [State.PROCESSING]: "Order being processed",
    [State.SHIPPED]: "Order shipped",
    [State.DELIVERED]: "Order delivered",
    [State.CANCELLED]: "Order cancelled",
  };

  function getOrderState(state: State): string {
    return StateMessage[state] ?? "Unknown state";
  }
}

// 문제 3: 레벨별 사용자 경험
{
  const BEGINNER = "BEGINNER";
  const INTERMEDIATE = "INTERMEDIATE";
  const EXPERT = "EXPERT";

  function getUserLevel(level: string): string {
    if (level === BEGINNER) return "Beginner user";
    if (level === INTERMEDIATE) return "Intermediate user";
    if (level === EXPERT) return "Expert user";
    return "Unknown level";
  }
}
{
  enum Level {
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    EXPERT = "EXPERT",
  }

  function getUserLevel(level: Level): string {
    switch (level) {
      case Level.BEGINNER:
        return "Beginner user";
      case Level.INTERMEDIATE:
        return "Intermediate user";
      case Level.EXPERT:
        return "Expert user";
      default:
        return "Unknown level";
    }
  }
}

// 문제 4: 결제 상태
{
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
}
{
  enum Status {
    NOT_STARTED = 0,
    IN_PROGRESS,
    COMPLETED,
    FAILED,
  }

  function getPaymentStatus(status: Status): string {
    switch (status) {
      case Status.NOT_STARTED:
        return "Payment not started";
      case Status.IN_PROGRESS:
        return "Payment in progress";
      case Status.COMPLETED:
        return "Payment completed";
      case Status.FAILED:
        return "Payment failed";
      default:
        return "Unknown status";
    }
  }
}

// 문제 5: 회원 가입 단계
{
  const STEP_ONE = "STEP_ONE";
  const STEP_TWO = "STEP_TWO";
  const STEP_THREE = "STEP_THREE";

  function getSignupStep(step: string): string {
    if (step === STEP_ONE) return "Step 1: Enter details";
    if (step === STEP_TWO) return "Step 2: Confirm email";
    if (step === STEP_THREE) return "Step 3: Complete registration";
    return "Unknown step";
  }
}
{
  enum Step {
    STEP_ONE = "STEP_ONE",
    STEP_TWO = "STEP_TWO",
    STEP_THREE = "STEP_THREE",
  }

  const StepMessage: Record<Step, string> = {
    [Step.STEP_ONE]: "Step 1: Enter details",
    [Step.STEP_TWO]: "Step 2: Confirm email",
    [Step.STEP_THREE]: "Step 3: Complete registration",
  };
  function getSignupStep(step: Step): string {
    return StepMessage[step] ?? "Unknown step";
  }
}

// 문제 6: 차종별 가격
{
  const SEDAN = "SEDAN";
  const SUV = "SUV";
  const TRUCK = "TRUCK";

  function getPriceByCarType(type: string): number {
    if (type === SEDAN) return 30000;
    if (type === SUV) return 40000;
    if (type === TRUCK) return 50000;
    return 0;
  }
}
{
  enum Type {
    SEDAN = "SEDAN",
    SUV = "SUV",
    TRUCK = "TRUCK",
  }

  const carPrice: Record<Type, number> = {
    [Type.SEDAN]: 30000,
    [Type.SUV]: 40000,
    [Type.TRUCK]: 50000,
  };

  function getPriceByCarType(type: Type): number {
    return carPrice[type] ?? 0;
  }
}

// 문제 7: 채팅 메시지 유형
{
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
}
{
  enum Type {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    FILE = "FILE",
  }

  function getMessageType(type: Type): string {
    switch (type) {
      case Type.TEXT:
        return "Text message";
      case Type.IMAGE:
        return "Image message";
      case Type.VIDEO:
        return "Video message";
      case Type.FILE:
        return "File message";
      default:
        return "Unknown message type";
    }
  }
}

// 문제 8: 시스템 로그 레벨
{
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
}
{
  enum Level {
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    DEBUG = "DEBUG",
  }

  const levelMsg: Record<Level, (msg: string) => void> = {
    [Level.INFO]: (msg) => console.log(`INFO: ${msg}`),
    [Level.WARN]: (msg) => console.log(`WARN: ${msg}`),
    [Level.ERROR]: (msg) => console.log(`ERROR: ${msg}`),
    [Level.DEBUG]: (msg) => console.log(`DEBUG: ${msg}`),
  };

  function logMessage(level: Level, message: string): void {
    const logFn = levelMsg[level];
    if (logFn) {
      logFn(message);
    } else {
      console.log("UNKNOWN LEVEL: " + message);
    }
  }
}

// 문제 9: 날짜 유형 (일반, 휴일)
{
  const WEEKDAY = "WEEKDAY";
  const WEEKEND = "WEEKEND";

  function getDayType(day: string): string {
    if (day === WEEKDAY) return "It's a weekday";
    if (day === WEEKEND) return "It's a weekend";
    return "Unknown day type";
  }
}
{
  enum Day {
    WEEKDAY = "WEEKDAY",
    WEEKEND = "WEEKEND",
  }

  const Daymsg: Record<Day, string> = {
    [Day.WEEKDAY]: "It's a weekday",
    [Day.WEEKEND]: "It's a weekend",
  };

  function getDayType(day: Day): string {
    return Daymsg[day] ?? "Unknown day type";
  }
}

// 문제 10: 마케팅 캠페인 유형
{
  const DISCOUNT = "DISCOUNT";
  const PROMOTION = "PROMOTION";
  const GIVEAWAY = "GIVEAWAY";

  function getCampaignType(type: string): string {
    if (type === DISCOUNT) return "Discount campaign";
    if (type === PROMOTION) return "Promotion campaign";
    if (type === GIVEAWAY) return "Giveaway campaign";
    return "Unknown campaign type";
  }
}
{
  enum Type {
    DISCOUNT = "DISCOUNT",
    PROMOTION = "PROMOTION",
    GIVEAWAY = "GIVEAWAY",
  }

  const TypeMsg: Record<Type, string> = {
    [Type.DISCOUNT]: "Discount campaign",
    [Type.PROMOTION]: "Promotion campaign",
    [Type.GIVEAWAY]: "Giveaway campaign",
  };

  function getCampaignType(type: Type): string {
    return TypeMsg[type] ?? "Unknown campaign type";
  }
}
