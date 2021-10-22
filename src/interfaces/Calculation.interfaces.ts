export interface CalculationResult {
    money: number;
    xp: number;
    overall: number;
}

export interface CalculationSort extends CalculationResult {
    id: number
}
