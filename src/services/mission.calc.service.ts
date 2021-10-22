import type { CalculationResult, CalculationSort } from "../interfaces/Calculation.interfaces";

export default class MissionCalc {
	constructor() { }

	private calcRatio(value1: number, value2: number): number {
		const ratio = value1 / value2;
		return ratio;
	}

	public calcOverall(
		money: number,
		xp: number,
		seconds: number
	): CalculationResult {
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

	public sortCalculation(calcResult: CalculationSort[], radio: number): number {
		let maxValue: number = null;
		let result: CalculationSort = null;
		switch (radio) {
			case 1:
				maxValue = Math.max(...calcResult.map(element => element.money))
				result = calcResult.find(obj => {
					return obj.money === maxValue
				})
				return result.id
			case 2:
				maxValue = Math.max(...calcResult.map(element => element.xp))
				result = calcResult.find(obj => {
					return obj.xp === maxValue
				})
				return result.id;
			case 3:
				maxValue = Math.max(...calcResult.map(element => element.overall))
				result = calcResult.find(obj => {
					return obj.overall === maxValue
				})
				return result.id;
			default:
				break;
		}


	}
}
