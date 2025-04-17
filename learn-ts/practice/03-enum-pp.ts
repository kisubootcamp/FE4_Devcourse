{
  // 1. 사용자 인증 상태
  enum us {
    UNVERIFIED = 'UNVERIFIED',
    PENDING = 'PENDING',
    VERIFIED = 'VERIFIED',
  }

  function getUserStarus(status: string): string {
    if (status === us.UNVERIFIED) return 'User is unverified';
    if (status === us.PENDING) return 'User verification is pending';
    if (status === us.VERIFIED) return 'User is verified';
    return 'Unknown status';
  }
}

{
  // 2. 주문 처리 상태 (다양한 상태)
  enum order {
    INITIATED = 0,
    PROCESSING,
    SHIPPED,
    DELIVERED,
    CANCELLED,
  }

  function getOrderState(state: number): string {
    if (state === order.INITIATED) return 'Order initiated';
    if (state === order.PROCESSING) return 'Order being processed';
    if (state === order.SHIPPED) return 'Order shipped';
    if (state === order.DELIVERED) return 'Order delivered';
    if (state === order.CANCELLED) return 'Order cancelled';
    return 'Unknown state';
  }
}

{
  // 3. 레벨별 사용자 경험
  enum exp {
    BEGINNER = 'BEGINNER',
    INTERMEDIATE = 'INTERMEDIATE',
    EXPERT = 'EXPERT',
  }

  function getUserLevel(level: string): string {
    if (level === exp.BEGINNER) return 'Beginner user';
    if (level === exp.INTERMEDIATE) return 'Intermediate user';
    if (level === exp.EXPERT) return 'Expert user';
    return 'Unknown level';
  }
}

{
  // 4. 결제 상태
  enum pay {
    NOT_STARTED = 0,
    IN_PROGRESS,
    COMPLETED,
    FAILED,
  }

  function getPaymentStatus(status: number): string {
    if (status === pay.NOT_STARTED) return 'Payment not started';
    if (status === pay.IN_PROGRESS) return 'Payment in progress';
    if (status === pay.COMPLETED) return 'Payment completed';
    if (status === pay.FAILED) return 'Payment failed';
    return 'Unknown status';
  }
}

{
  // 5. 회원 가입 단계
  enum detail {
    STEP_ONE = 'STEP_ONE',
    STEP_TWO = 'STEP_TWO',
    STEP_THREE = 'STEP_THREE',
  }

  function getSignupStep(step: string): string {
    if (step === detail.STEP_ONE) return 'Step 1: Enter details';
    if (step === detail.STEP_TWO) return 'Step 2: Confirm email';
    if (step === detail.STEP_THREE) return 'Step 3: Complete registration';
    return 'Unknown step';
  }
}

{
  // 6. 차종별 가격
  enum car {
    SEDAN = 'SEDAN',
    SUV = 'SUV',
    TRUCK = 'TRUCK',
  }

  function getPriceByCarType(type: string): number {
    if (type === car.SEDAN) return 30000;
    if (type === car.SUV) return 40000;
    if (type === car.TRUCK) return 50000;
    return 0;
  }
}

{
  // 7. 채팅 메시지 유형
  enum message {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    FILE = 'FILE',
  }

  function getMessageType(type: string): string {
    if (type === message.TEXT) return 'Text message';
    if (type === message.IMAGE) return 'Image message';
    if (type === message.VIDEO) return 'Video message';
    if (type === message.FILE) return 'File message';
    return 'Unknown message type';
  }
}

{
  // 8. 시스템 로그 레벨
  enum system {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    DEBUG = 'DEBUG',
  }

  function logMessage(level: string, message: string): void {
    if (level === system.INFO) console.log('INFO: ' + message);
    if (level === system.WARN) console.warn('WARN: ' + message);
    if (level === system.ERROR) console.error('ERROR: ' + message);
    if (level === system.DEBUG) console.debug('DEBUG: ' + message);
  }
}

{
  // 9. 날짜 유형 (일반, 휴일)
  enum general {
    WEEKDAY = 'WEEKDAY',
    WEEKEND = 'WEEKEND',
  }

  function getDayType(day: string): string {
    if (day === general.WEEKDAY) return "It's a weekday";
    if (day === general.WEEKEND) return "It's a weekend";
    return 'Unknown day type';
  }
}

{
  // 10. 마케팅 캠페인 유형
  enum marketing {
    DISCOUNT = 'DISCOUNT',
    PROMOTION = 'PROMOTION',
    GIVEAWAY = 'GIVEAWAY',
  }

  function getCampaignType(type: string): string {
    if (type === marketing.DISCOUNT) return 'Discount campaign';
    if (type === marketing.PROMOTION) return 'Promotion campaign';
    if (type === marketing.GIVEAWAY) return 'Giveaway campaign';
    return 'Unknown campaign type';
  }
}
