import { MODEL_TYPE, ModelType } from "../../enums";
import { Invoice, Worksite } from "../../models";

const ENDPOINT = {
  [MODEL_TYPE.WORKSITE]: new Worksite(),
  [MODEL_TYPE.INVOICE]: new Invoice(),
} as const;

export default class ModelFactory {
  public create<TModelType extends ModelType>(modelType: TModelType) {
    return ENDPOINT[modelType];
  }
}
