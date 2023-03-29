## browser-ex-storage  

抹平各个环境`storage api`的差异,目前支持 chrome 插件环境和浏览器环境，提供 `promise api`

## useage

```shell

npm i browser-ex-storage

```

```javascript

import browserExStorage from 'browser-ex-storage'

// 注意此处的环境判断不能直接用，得根据你项目情况来
export const storage  = env ==='browser' ? browserExStorage('browser'):browserExStorage('chrome-ex')

await storage.get('key')

await storage.get(['key','key2'])

await storage.set({
    a:1,
    b:[1]
})

// total types

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



```