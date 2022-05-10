// import { createClient, createImageUrlBuilder } from "next-sanity";

// export const config = {
//   projectId: "j94uj3w7",
//   dataset: "production",
//   apiVersion: "v2021-10-21",
//   useCdn: true,
// };
// export const sanityClient = createClient(config);
// export const urlFor = (source) => createImageUrlBuilder(config).image(source);
//token:
// "skXxM3CozpJXvXxq8bs3os12pZeo6FqiNjdctMUXi6igvQJt1daEXBTcwXA0aGYwDRgG0x2bdqgCk5tmFqJDp5rwp0pEeA0YJOPDNSWswlOsDJoG0X4OM2sIkeseRG0bawunKJlRMlycxK0vcUaI9PXzBvkmTrbuyjQ6BBlGQ7Oeve6Wzxkw",

import imageUrlBuilder from "@sanity/image-url";
import SanityClient from "@sanity/client";
export const client = SanityClient({
  projectId: "j94uj3w7",
  dataset: "production",
  apiVersion: "2022-04-02",

  useCdn: true,
  token:
    "skXxM3CozpJXvXxq8bs3os12pZeo6FqiNjdctMUXi6igvQJt1daEXBTcwXA0aGYwDRgG0x2bdqgCk5tmFqJDp5rwp0pEeA0YJOPDNSWswlOsDJoG0X4OM2sIkeseRG0bawunKJlRMlycxK0vcUaI9PXzBvkmTrbuyjQ6BBlGQ7Oeve6Wzxkw",
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
