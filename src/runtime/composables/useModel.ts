import { ModelFactory, ModelType } from "../../lib";

const useModel = <TModelType extends ModelType>(modelType: TModelType) =>
  new ModelFactory().create(modelType);

export default useModel;
