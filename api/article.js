/**
 * Mock data from the Article API
 * @returns Promise
 */
export const getArticle = () => {
  return Promise.resolve([
    {
      _id: "O23JTX787658I7CD6U3235ENM",
      content:
        "Space suddenly seems a little more reachable — at least, for those who have cash to burn.",
      type: "header",
      level: 1,
      originalIdx: 1,
    },
    {
      _id: "O23JTX787658I7CD6U32YUTEXS",
      content: "At least, for those who have cash to burn.",
      type: "header",
      level: 2,
      originalIdx: 2,
    },
    {
      _id: "O23JTQDNJZBLBI7CD6U3235ENM",
      content:
        "Space suddenly seems a little more reachable — at least, for those who have cash to burn.",
      type: "text",
      originalIdx: 3,
    },
    {
      _id: "AF73UZELANBEHOM3YZA6Y6HSJM",
      content:
        "Virgin Galactic’s announcement Tuesday that it is going public through a merger with an investment firm came with an update that the company is preparing to send its first customers into space within a year, CNBC reported. More than 600 people have placed deposits topping $80 million in total, chairman Chamath Palihapitiya told the network, and another 2,500 want to get in line.",
      type: "text",
      originalIdx: 4,
    },
    {
      _id: "67VJ3WYZWJHWHKG4SQM5GUDMGM",
      content:
        "Virgin isn’t alone in the space race: Blue Origin, Jeff Bezos’s space exploration company, is promoting “the largest windows in space” on its New Shepard capsule, although test flights with humans onboard have not yet taken place. (Bezos owns The Washington Post.) Elon Musk announced last year that his company, SpaceX, has a customer lined up who will pay to fly around the moon. Last month, NASA made a change in policy and said it would allow space tourists to visit the International Space Station as soon as next year. The agency said logistics would have to be arranged by SpaceX and Boeing, which NASA has tapped to get crews to the space station.",
      type: "text",
      originalIdx: 5,
    },
    {
      _id: "PSZ77YVHDFAZXFVQ7F2YNOMI4E",
      content:
        "So will we all be jetting around space with our cameras, orbital passports and zero-gravity fanny packs in a decade? Not so fast. Here’s what potential space explorers need to know.",
      type: "text",
      originalIdx: 6,
    },
    {
      _id: "X4O3EFY7FBC5BJOX23FPLGVOHQ",
      content: "What does space tourism involve?",
      type: "text",
      originalIdx: 7,
    },
    {
      _id: "WGQAN7EXLZDUVO3M73TWA7AJZQ",
      content:
        "The most widely touted versions involve rocketing passengers more than 50 miles into the atmosphere and achieving minutes of weightlessness and witnessing Earth views before returning to land. Virgin Galactic and Blue Origin differ in the details of how they will get to space and the altitude they’ll reach, but they are promoting relatively similar experiences and plan to carry six passengers at once.",
      type: "text",
      originalIdx: 8,
    },
  ]);
};
