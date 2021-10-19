export default class MissionCalc {
	constructor() {}

	private calcRatio(value1: number, value2: number): number {
		const ratio = value1 / value2;
		return ratio;
	}

	public calcOverall(
		money: number,
		xp: number,
		seconds: number
	): { money: number; xp: number; overall: number } {
		const moneyRatio = this.calcRatio(money, seconds);
		const xpRatio = this.calcRatio(xp, seconds);
		const overallRatio = moneyRatio + xpRatio;
		return {
			money: moneyRatio,
			xp: xpRatio,
			overall: overallRatio
		};
	}

	public singleRatio(singleValue: number, seconds: number): number {
		const ratio = this.calcRatio(singleValue, seconds);
		return ratio;
	}
}
