import React from "react";

import { Text, List, Img, Button } from "components";

const BlogPostsOnePage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[120px] sm:p-[15px] md:p-[84px] w-[100%]">
        <div className="flex flex-col items-center justify-end max-w-[1140px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] py-[2px] w-[100%]">
          <div className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
            <Text className="text-bluegray_900 w-[auto]" as="h1" variant="h1">
              Our Latest Posts
            </Text>
            <Text
              className="font-light leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[17px] sm:mt-[9px] text-bluegray_600 text-center w-[100%]"
              as="h2"
              variant="h2"
            >
              Adwords Keyword research for beginners when you embark on your
              first PPC journey, you need to keep a small number of keywords at
              first.
            </Text>
          </div>
          <List
            className="sm:gap-[16px] md:gap-[21px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[30px] md:mt-[38px] mt-[55px] w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[16px] pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap"
              />
              <div className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                  <Text
                    className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by John Doe
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                    alt="One"
                  />
                  <Text
                    className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] text-bluegray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[33%] md:mt-[11px] mt-[16px] sm:mt-[8px] text-[12px] text-blue_A700 text-center uppercase w-[max-content]"
                  shape="CircleBorder13"
                >
                  UX WRITING
                </Button>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[16px] pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap_236X360.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap One"
              />
              <div className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                  <Text
                    className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by John Doe
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] ml-[2px] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                    alt="Two"
                  />
                  <Text
                    className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] text-bluegray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  How Snapchat and Netflix Break UX Design Principles
                  <br />
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius13 sm:w-[100%] w-[64%]">
                  <Button
                    className="cursor-pointer font-medium min-w-[47%] text-[12px] text-blue_A700 text-center uppercase w-[max-content]"
                    shape="CircleBorder13"
                  >
                    UX DESIGN
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[47%] ml-[12px] sm:ml-[6px] md:ml-[8px] text-[12px] text-center text-red_700 uppercase w-[max-content]"
                    shape="CircleBorder13"
                  >
                    UI DESIGN
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[16px] pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap_1.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap Two"
              />
              <div className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                  <Text
                    className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by John Doe
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] ml-[2px] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                    alt="Three"
                  />
                  <Text
                    className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] text-bluegray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  How to Design Your Site to Make it Super-fast
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[36%] md:mt-[11px] mt-[16px] sm:mt-[8px] text-[12px] text-blue_A700 text-center uppercase w-[max-content]"
                  shape="CircleBorder13"
                >
                  WEB DESIGN
                </Button>
              </div>
            </div>
          </List>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[28px] md:mt-[36px] mt-[52px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
            <Text
              className="flex-grow font-semibold text-blue_A700"
              as="h2"
              variant="h2"
            >
              READ MORE
            </Text>
            <Img
              src="images/img_arrowright.svg"
              className="flex-shrink-0 sm:h-[14px] md:h-[17px] h-[24px] max-w-[100%] ml-[4px] sm:w-[13px] md:w-[16px] w-[24px]"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsOnePage;
