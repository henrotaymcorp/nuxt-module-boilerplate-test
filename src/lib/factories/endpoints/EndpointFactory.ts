import { InvoiceEndpoint, WorksiteEndpoint } from "../../endpoints";
import { MODEL_TYPE, ModelType } from "../../enums";

const ENDPOINT = {
  [MODEL_TYPE.WORKSITE]: new WorksiteEndpoint(),
  [MODEL_TYPE.INVOICE]: new InvoiceEndpoint(),
} as const;

export default class EndpointFactory {
  public create<TModelType extends ModelType>(modelType: TModelType) {
    return ENDPOINT[modelType];
  }
}
