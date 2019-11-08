export default class ArmstrongNumbers {
    
    public static isArmstrongNumber(num: number): boolean {
        const numbers = new String(num).split('');
        const res = numbers.reduce(
            (result: number, value: string): number => {
                result += parseInt(value) ** numbers.length;
                return result;
            },0);
        return num === res;
    }
}