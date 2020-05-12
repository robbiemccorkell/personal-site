jest.mock("fs");

import { getBlogManifest } from "../";
import { mocked } from "ts-jest/utils";
import fs from "fs";

let fsMock = mocked(fs, true);

const mockBlogs: Record<string, string> = {
  "a.mdx": `
import BlogPost from "@components/BlogPost";

export const meta = {
  title: "Programming a quantum computer: generating true random numbers",
  date: "2018-09-24T12:00:00.000Z",
  thumbnail: "ibm-q-computer.jpg",
  canonical:
    "https://blog.red-badger.com/2018/9/24/generate-true-random-numbers-with-a-quantum-computer"
};

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>;

Computers are deterministic
`,
  "b.mdx": `
import BlogPost from "@components/BlogPost";
import Codepen from "react-codepen-embed";

export const meta = {
  title: "React Native – The killer feature that nobody talks about",
  date: "2015-03-04T12:00:00.000Z",
  thumbnail: "react-banner.jpg",
  canonical:
    "https://blog.red-badger.com/2015/03/04/react-native-the-killer-feature-that-nobody-talks-about"
};

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>;

At the end of January I was lucky enough to
`
};

test("it returns blog manifest", () => {
  //@ts-ignore
  fsMock.readdirSync.mockImplementation(() => Object.keys(mockBlogs));
  fsMock.readFileSync.mockImplementation(filePath => {
    const splitFilePath = `${filePath}`.split("/");
    const fileName = splitFilePath[splitFilePath.length - 1];

    return mockBlogs[fileName];
  });

  const expected = [
    {
      fileName: "a.mdx",
      slug: "a",
      meta: {
        title: "Programming a quantum computer: generating true random numbers",
        date: "2018-09-24T12:00:00.000Z",
        thumbnail: "ibm-q-computer.jpg",
        canonical:
          "https://blog.red-badger.com/2018/9/24/generate-true-random-numbers-with-a-quantum-computer"
      }
    },
    {
      fileName: "b.mdx",
      meta: {
        canonical:
          "https://blog.red-badger.com/2015/03/04/react-native-the-killer-feature-that-nobody-talks-about",
        date: "2015-03-04T12:00:00.000Z",
        thumbnail: "react-banner.jpg",
        title: "React Native – The killer feature that nobody talks about"
      },
      slug: "b"
    }
  ];

  const manifest = getBlogManifest("./test/folder");

  expect(manifest).toEqual(expected);
});
