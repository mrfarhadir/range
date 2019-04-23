
export default class Ranger {
    static init(str: string) {
        let result = Ranger.parser(str)
        if (result) return Ranger.createArray(result)
        return 
            false
    }
    private static parser(str: string) {
        let p = str.split(":")
        if (p.length === 1) return false
        let obj = {
            start:      p[0],
            end:        p[1],
            step:       1
        }
        if (p.length === 3) 
            obj.step = parseFloat(p[2])
        
        return obj
    }
    private static createArray(obj: any): Array<any> {
        let arr: Array<any> = []
        let start = parseFloat(obj.start)
        let end = parseFloat(obj.end)
        let step = parseFloat(obj.step)
        let i = start

        if (start < end) {
            for( i ; i <= end ; i += step ) {
                arr.push(i)
            }
        }
        else {
            for( i ; i >= end ; i -= step ) {
                arr.push(i)
            }
        }
        return arr
    }
}