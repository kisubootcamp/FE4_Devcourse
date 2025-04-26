	enum StatusEnum {
		IS_ACTIVE = 0,
		IS_INACTIVE = 1,
	}

	function toggleStatus(status: number): boolean {
		return !status;
	}

	console.log(toggleStatus(0));