	interface Vehicle {
		brand: string;
		model: string;
	}

	interface Electric {
		batteryLife: number;
	}

	interface ElectricCar extends Vehicle, Electric {
		charge(): void;
	}

	const tesla: ElectricCar = {
		brand: "포르쉐",
		model: "타이칸",
		batteryLife: 1000,
		charge() {
			console.log("Charging the car...");
		},
	};

	tesla.charge();