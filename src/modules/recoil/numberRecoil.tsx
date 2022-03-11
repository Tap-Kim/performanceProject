import { atom, selector, useRecoilState } from "recoil";

export const _num = atom<number>({
    key: '_num', //state를 구분하기 위한 key값
    default: 0, //state 초기값
});

export const _customNum = () => {
    const [num, setNum] = useRecoilState<number>(_num);
    return {
        num,
        increase: () => {
            if (num >= 10) {
                setNum(num + 1);
            } else {
                setNum(num + 3);
            }
        },
        decrease: () => {
            if (num >= 10) {
                setNum(num - 2);
            } else {
                setNum(num - 1);
            }
        }
    }
}

export const _selectorNum = selector<number>({
    key: '_selectorNum', // selector를 구분하기 위한 key 값
    get: ({ get }) => {
        const num = get(_num);
        return num * num;
    },
    set: ({ get, set }, payload) => {
        const num = get(_num);
        if (num >= 10 && payload === 1) { // num이 10이상이고 증가해야 될 경우
            set(_num, num + 1); // _num에 해당하는 atom에 num+1을 저장
        } else if (num < 10 && payload === 1) { // num이 10미만이고 증가해야 될 경우
            set(_num, num + 3); // _num에 해당하는 atom에 num+3을 저장
        } else if (num >= 10 && payload === -1) { // num이 10이상이고 감소해야 될 경우
            set(_num, num - 2); // _num에 해당하는 atom에 num-2를 저장
        } else if (num < 10 && payload === -1) { // num이 10미만이고 감소해야 될 경우
            set(_num, num - 1);// _num에 해당하는 atom에 num-1을 저장
        }
    }
});