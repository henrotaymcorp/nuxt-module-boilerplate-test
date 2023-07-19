import { EndpointFactory, ModelType } from "../../lib";

const useEndpoint = <TModelType extends ModelType>(modelType: TModelType) =>
  new EndpointFactory().create(modelType);

export default useEndpoint;
