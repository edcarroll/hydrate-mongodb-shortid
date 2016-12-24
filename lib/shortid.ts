import {IdentityGenerator} from "hydrate-mongodb";
import * as shortID from "shortid";

export class ShortIDGenerator implements IdentityGenerator {
    public generate() {
        return shortID.generate();
    }

    public fromString(value:string) {
        return value;
    }

    public validate(value:string) {
        return shortID.isValid(value);
    }

    public areEqual(first:string, second:string):boolean {
        return first == second;
    }
}