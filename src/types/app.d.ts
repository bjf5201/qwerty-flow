export interface TestResult {
  wpm: number;
  accuracy: number;
  time: number;
  errors: number;
}

export interface TestText {
  description: string;
  name: string;
}