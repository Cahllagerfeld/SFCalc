export default class MissionCalc {

    constructor() { }

    private calcRatio(value1: number, value2: number): number {
        const ratio = value1 / value2
        return ratio
    }

    public calcOverall(money: number, xp: number, seconds: number, adventure: number): number {
        const moneyRatio = this.calcRatio(money, seconds)
        const xpRatio = this.calcRatio(xp, seconds)
        const overallRatio = moneyRatio + xpRatio
        const result = this.calcRatio(overallRatio, adventure)
        return result
    }

    public singleRatio(singleValue: number, seconds: number, adventure: number): number {
        const ratio = this.calcRatio(singleValue, seconds)
        const result = this.calcRatio(ratio, adventure)
        return result
    }


}
