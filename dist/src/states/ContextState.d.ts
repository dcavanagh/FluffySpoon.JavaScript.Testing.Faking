import { Context } from "src/Context";
export declare type PropertyKey = string | number | symbol;
export interface ContextState {
    onSwitchedTo?(context: Context): void;
    apply(context: Context, args: any[]): any;
    set(context: Context, property: PropertyKey, value: any): void;
    get(context: Context, property: PropertyKey): any;
}
