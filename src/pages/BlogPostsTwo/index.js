import React from "react";

import { Img, Text, Grid } from "components";

const BlogPostsTwoPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy items-center justify-start mx-[auto] sm:p-[15px] md:p-[67px] p-[95px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[951px] sm:mb-[18px] md:mb-[24px] mb-[34px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Img
            src="images/img_line3.svg"
            className="max-w-[100%] w-[6%]"
            alt="LineThree"
          />
          <Text
            className="sm:mt-[13px] md:mt-[16px] mt-[24px] text-bluegray_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Our Latest Posts
          </Text>
          <div className="flex flex-col font-montserrat items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
            <Grid className="sm:gap-[16px] md:gap-[21px] gap-[31px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
              <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_bitmap_160X460.png"
                  className="max-w-[100%] w-[100%]"
                  alt="Bitmap"
                />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[13px] md:mt-[16px] mt-[24px] sm:px-[0] py-[1px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                    <Text
                      className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      by Virgie Patterson
                    </Text>
                    <Img
                      src="images/img_.svg"
                      className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                      alt="Four"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      UX WRITING
                    </Text>
                  </div>
                  <Text
                    className="font-normal mt-[3px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_bitmap_2.png"
                  className="max-w-[100%] w-[100%]"
                  alt="Bitmap One"
                />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[13px] md:mt-[16px] mt-[24px] sm:px-[0] py-[1px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                    <Text
                      className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      by Virgie Patterson
                    </Text>
                    <Img
                      src="images/img_.svg"
                      className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                      alt="Five"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      UX WRITING
                    </Text>
                  </div>
                  <Text
                    className="font-normal mt-[3px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  How Snapchat and Netflix Break UX Design Principles
                  <br />
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_bitmap_3.png"
                  className="max-w-[100%] w-[100%]"
                  alt="Bitmap Two"
                />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[13px] md:mt-[16px] mt-[24px] pt-[3px] sm:px-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                    <Text
                      className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      by Virgie Patterson
                    </Text>
                    <Img
                      src="images/img_.svg"
                      className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                      alt="Six"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      UX WRITING
                    </Text>
                  </div>
                  <Text
                    className="font-normal my-[1px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  Designing Content for Readability, Legibility and Clarity.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_bitmap_4.png"
                  className="max-w-[100%] w-[100%]"
                  alt="Bitmap Three"
                />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[13px] md:mt-[16px] mt-[24px] pt-[3px] sm:px-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                    <Text
                      className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      by Virgie Patterson
                    </Text>
                    <Img
                      src="images/img_.svg"
                      className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                      alt="Seven"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      UX WRITING
                    </Text>
                  </div>
                  <Text
                    className="font-normal my-[1px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  Survey: UX, Interactive Designer or Full-Stack Developer - Who
                  are you?
                </Text>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsTwoPage;
