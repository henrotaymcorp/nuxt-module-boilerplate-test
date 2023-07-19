import { Enum } from "../types";

export const MODEL_TYPE = {
  WORKSITE: "worksite",
  INVOICE: "invoice",
} as const;

export type ModelType = Enum<typeof MODEL_TYPE>;
