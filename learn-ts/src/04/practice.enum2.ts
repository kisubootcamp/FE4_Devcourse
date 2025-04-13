// Q1
{
  enum Status {
    UNVERIFIED = "UNVERIFIED",
    PENDING = "PENDING",
    VERIFIED = "VERIFIED",
  }

  function getUserStatus(status: Status): string {
    if (status === Status.UNVERIFIED) return "User is unverified";
    if (status === Status.PENDING) return "User verification is pending";
    if (status === Status.VERIFIED) return "User is verified";
    return "Unknown status";
  }
}

// Q2
{
  enum State {
    INITIATED = 0,
    PROCESSING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
    CANCELLED = 4,
  }
  function getOrderState(state: State): string {
    if (state === State.INITIATED) return "Order initiated";
    if (state === State.PROCESSING) return "Order being processed";
    if (state === State.SHIPPED) return "Order shipped";
    if (state === State.DELIVERED) return "Order delivered";
    if (state === State.CANCELLED) return "Order cancelled";
    return "Unknown state";
  }
}

// Q3
{
  enum Level {
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    EXPERT = "EXPERT",
  }

  function getUserLevel(level: Level): string {
    if (level === Level.BEGINNER) return "Beginner user";
    if (level === Level.INTERMEDIATE) return "Intermediate user";
    if (level === Level.EXPERT) return "Expert user";
    return "Unknown level";
  }
}

// Q4
{
  enum Status {
    NOT_STARTED = 0,
    IN_PROGRESS = 1,
    COMPLETED = 2,
    FAILED = 3,
  }

  function getPaymentStatus(status: Status): string {
    if (status === Status.NOT_STARTED) return "Payment not started";
    if (status === Status.IN_PROGRESS) return "Payment in progress";
    if (status === Status.COMPLETED) return "Payment completed";
    if (status === Status.FAILED) return "Payment failed";
    return "Unknown status";
  }
}

// Q5
{
  enum Step {
    STEP_ONE = "STEP_ONE",
    STEP_TWO = "STEP_TWO",
    STEP_THREE = "STEP_THREE",
  }

  function getSignupStep(step: Step): string {
    if (step === Step.STEP_ONE) return "Step 1: Enter details";
    if (step === Step.STEP_TWO) return "Step 2: Confirm email";
    if (step === Step.STEP_THREE) return "Step 3: Complete registration";
    return "Unknown step";
  }
}

// Q6
{
  enum Type {
    SEDAN = "SEDAN",
    SUV = "SUV",
    TRUCK = "TRUCK",
  }

  function getPriceByCarType(type: Type): number {
    if (type === Type.SEDAN) return 30000;
    if (type === Type.SUV) return 40000;
    if (type === Type.TRUCK) return 50000;
    return 0;
  }
}

// Q7
{
  enum Type {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    FILE = "FILE",
  }

  function getMessageType(type: Type): string {
    if (type === Type.TEXT) return "Text message";
    if (type === Type.IMAGE) return "Image message";
    if (type === Type.VIDEO) return "Video message";
    if (type === Type.FILE) return "File message";
    return "Unknown message type";
  }
}

// Q8
{
  enum Level {
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    DEBUG = "DEBUG",
  }

  function logMessage(level: Level, message: string): void {
    if (level === Level.INFO) console.log("INFO: " + message);
    if (level === Level.WARN) console.warn("WARN: " + message);
    if (level === Level.ERROR) console.error("ERROR: " + message);
    if (level === Level.DEBUG) console.debug("DEBUG: " + message);
  }
}

// Q9
{
  enum Day {
    WEEKDAY = "WEEKDAY",
    WEEKEND = "WEEKEND",
  }

  function getDayType(day: Day): string {
    if (day === Day.WEEKDAY) return "It's a weekday";
    if (day === Day.WEEKEND) return "It's a weekend";
    return "Unknown day type";
  }
}

// Q10
{
  enum Type {
    DISCOUNT = "DISCOUNT",
    PROMOTION = "PROMOTION",
    GIVEAWAY = "GIVEAWAY",
  }

  function getCampaignType(type: Type): string {
    if (type === Type.DISCOUNT) return "Discount campaign";
    if (type === Type.PROMOTION) return "Promotion campaign";
    if (type === Type.GIVEAWAY) return "Giveaway campaign";
    return "Unknown campaign type";
  }
}
