import type { TestText } from "../types/app";

export function useTestText(): TestText {
  return {
    description: "Test description",
    name: "Test Agency"
  }
}