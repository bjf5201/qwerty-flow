import { useEffect, useState } from "react";
import type { ITestText, ITestTextPromise } from "../types/app";
import { agencies } from "../data/agencies";

export default function useTestText(): ITestText {
  const [testText, setTestText] = useState<ITestText>({ name: "", description: "" });

  useEffect(() => {
    async function startFetchingText() {
      setTestText({ name: "Loading...", description: "Loading..." });
      const text = await getTestText();
      if (!ignore) {
        setTestText(text);
      }
    }

    let ignore = false;
    startFetchingText();
    return () => { ignore = true; };
  }, []);

  return testText;
};

export async function getTestText(): Promise<ITestText> {

  const fetchText: ITestTextPromise = async () => {
    const testName = "Government Agency of Important Matters";
    const testDescription = "This is a test description for a government agency that does important things. It cannot be overstated how important these things are. They are very important. So important that you can't even imagine how important they are. They are that important. Have we mentioned that this is important work? Because it is. Very.";
    const agency = agencies[generateRandomNumber(0, agencies.length - 1)];
    try {
      const response = await fetch(`https://www.federalregister.gov/api/v1/agencies/${agency}`)
      const data = await response.json()
      const { name, description } = await data;
      return name && description ? { name, description } : { name: testName, description: testDescription };
    } catch (error) {
      console.error("Error fetching quote from API", error);
      console.error("Using default test text instead.");
      return { name: testName, description: testDescription };
    }
  }
  return fetchText();
}

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

