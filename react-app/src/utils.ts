import * as React from "react";

type RC = React.SFC | React.ComponentClass | any;

type HOC = (C: RC) => RC;

export const compose = (Component: RC, ...hocs: Array<HOC>) =>
	hocs.reduce((C, hoc) => hoc(C), Component);



type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export function omit<T extends object, K extends keyof T>(target: T, ...omitKeys: K[]): Omit<T, K> {
	return (Object.keys(target) as K[]).reduce(
		(res, key) => {
			if (!omitKeys.includes(key)) {
				res[key] = target[key];
			}
			return res;
		},
		{} as any
	);
}
