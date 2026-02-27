export type Day = {
	open: string;
	close: string;
};

type DayGroup = {
	start: number;
	end: number;
	hours: Day;
};

export default class OpeningHoursFormatter {
	private readonly weekdayFormatter: Intl.DateTimeFormat;
	private readonly timeFormatter: Intl.DateTimeFormat;
	private readonly baseDate = new Date(2024, 0, 1); // Monday reference

	constructor(private readonly locale: string) {
		this.weekdayFormatter = new Intl.DateTimeFormat(locale, {
			weekday: 'short',
		});

		this.timeFormatter = new Intl.DateTimeFormat(locale, {
			hour: 'numeric',
			minute: '2-digit',
		});
	}

	private capitalize(value: string): string {
		const [first = '', ...rest] = value;
		return [first.toLocaleUpperCase(this.locale), ...rest].join('');
	}

	formatTime(time: string): string | null {
		if (time === '00:00') return null;

		const [hours, minutes] = time.split(':').map(Number);
		const date = new Date();
		date.setHours(hours, minutes, 0, 0);

		return this.timeFormatter.format(date);
	}

	getWeekday(index: number): string {
		const date = new Date(this.baseDate);
		date.setDate(this.baseDate.getDate() + index);

		const weekday = this.weekdayFormatter.format(date);
		return this.capitalize(weekday);
	}

	isClosed({ open, close }: Day): boolean {
		return open === '00:00' && close === '00:00';
	}

	groupDays(hours: Day[]): DayGroup[] {
		if (!hours.length) return [];

		const groups: DayGroup[] = [];
		let currentGroup: DayGroup = {
			start: 0,
			end: 0,
			hours: hours[0],
		};

		for (let i = 1; i < hours.length; i++) {
			const sameHours =
				hours[i].open === currentGroup.hours.open && hours[i].close === currentGroup.hours.close;

			if (sameHours) {
				currentGroup.end = i;
			} else {
				groups.push(currentGroup);
				currentGroup = {
					start: i,
					end: i,
					hours: hours[i],
				};
			}
		}

		groups.push(currentGroup);
		return groups;
	}
}
