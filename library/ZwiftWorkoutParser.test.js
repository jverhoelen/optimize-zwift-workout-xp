import { ZwiftWorkoutParser } from "./ZwiftWorkoutParser.js";
import * as fs from "fs";

const removeTags = (val) => val.replace(/<tags>.*<\/tags>/, "<tags/>");

describe("ZwiftWorkoutParser", () => {
  it("should parse zwo file contents to an object structure that preserves sorting, type and attribute of workout segments", () => {
    const workout = ZwiftWorkoutParser.parseZwoFile(
      fs.readFileSync("./sample.zwo")
    );
    expect(workout.contents).toMatchSnapshot();
  });

  it("should re-create the same zwo file contents when parsing it and generating it again without changes", () => {
    const originalFileBuffer = fs.readFileSync("./sample.zwo");
    const originalFileContentsWithoutWhitespaces = originalFileBuffer
      .toString()
      .replace(/\s/g, "");
    const workout = ZwiftWorkoutParser.parseZwoFile(originalFileBuffer);

    const targetFileContents = ZwiftWorkoutParser.assembleZwoFile(workout);
    const targetFileContentsWithoutWhitespaces = targetFileContents.replace(
      /\s/g,
      ""
    );

    expect(removeTags(originalFileContentsWithoutWhitespaces)).toEqual(
      removeTags(targetFileContentsWithoutWhitespaces)
    );

    const workoutFromReGeneratedZwoFile = ZwiftWorkoutParser.parseZwoFile(
      Buffer.from(targetFileContents)
    );

    expect(workout.contents).toEqual(workoutFromReGeneratedZwoFile.contents);
  });
});
