{
  // 이넘(enum) - 열거형, 관련된 타입을 묶어 놓는 것

  enum StatusEnum {
    Loading = 'loading',
    Success = 'success',
    Error = 'error',
  }
  function showStatus(status: StatusEnum) {
    if (status === 'loading') {
      console.log('로딩 중...');
    } else if (status === 'success') {
      console.log('성공');
    } else if (status === 'error') {
      console.log('실패');
    }
  }
  showStatus(StatusEnum.Success);
}

{
  type StatusType = 'loading' | 'success' | 'error';
  function showStatusType(status: StatusType) {}
  showStatusType('success');
}
