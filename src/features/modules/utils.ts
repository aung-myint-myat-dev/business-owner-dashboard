import { getProductName } from "../products/utils";

export function getProductNames(ids: number[]): string[] {
  return ids.map((id) => getProductName(id));
}