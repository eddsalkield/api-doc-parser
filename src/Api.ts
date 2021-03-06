import { Resource } from "./Resource";
import { assignSealed } from "./utils/assignSealed";

export interface ApiOptions
  extends Nullable<{
    title?: string;
    resources?: Resource[];
  }> {}

export interface Api extends ApiOptions {}
export class Api {
  constructor(public entrypoint: string, options: ApiOptions = {}) {
    assignSealed(this, options);
  }
}
