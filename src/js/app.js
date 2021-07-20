export default function canIterate(obj) {
    try {
        obj[Symbol.iterator]();
        return 'obj is enumerable';
    } catch (e) {
        return 'obj is not enumerable';
    }
}
