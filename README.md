# hydrate-mongodb-shortid
ShortID Generator for hydrate-mongodb

## Install

```bash
npm install --save @edcarroll/hydrate-mongodb-shortid
```

## Example

```ts
import {Configuration} from "@edcarroll/hydrate-mongodb";
import {ShortIDGenerator} from "@edcarroll/hydrate-mongodb-shortid"

let dbConfig = new Configuration();

dbConfig.identityGenerator = new ShortIDGenerator();
```
