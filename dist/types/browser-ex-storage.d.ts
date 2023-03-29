interface S {
    get<T extends string>(key: T): Promise<{
        [key in T]: any;
    }>;
    get<T extends string[]>(keys: T): Promise<{
        [key in T[number]]: any;
    }>;
    set: (obj: {
        [key: string]: any;
    }) => Promise<undefined>;
    remove: (key: string) => Promise<undefined>;
    clear: () => Promise<undefined>;
}
type EnvType = 'chrome-ex' | 'browser';
declare const browserExStorage: (type: EnvType) => S;
export default browserExStorage;
