export interface ITestResult {
  wpm: number;
  accuracy: number;
  time: number;
  errors: number;
}

export interface ITestText {
  name: string;
  description: string;
}

export interface ITestTextPromise {
  (): Promise<ITestText>;
}