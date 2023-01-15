import React from "react";

import { Text, Img, Button } from "components";

const BlogPostsFivePage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[120px] sm:p-[15px] md:p-[84px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[946px] mb-[10px] sm:mb-[5px] md:mb-[7px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] sm:pt-[4px] md:pt-[6px] pt-[9px] w-[100%]">
          <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
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
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[28px] md:mt-[36px] mt-[52px] w-[100%]">
            <div className="bg-white_A700 flex flex-col items-center justify-start md:mt-[109px] mt-[154px] sm:mt-[84px] sm:mx-[0] sm:pb-[15px] md:pb-[16px] pb-[24px] rounded-radius4 shadow-bs sm:w-[100%] w-[28%]">
              <Img
                src="images/img_bitmap.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap"
              />
              <div className="flex flex-col items-center justify-start sm:mt-[14px] md:mt-[19px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Text
                    className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by John Doe
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                    alt="Thirteen"
                  />
                  <Text
                    className="font-normal mb-[1px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_900 w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-start sm:mx-[0] sm:pb-[15px] md:pb-[16px] pb-[24px] rounded-radius4 shadow-bs sm:w-[100%] w-[39%]">
              <Img
                src="images/img_bitmap_236X360.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap One"
              />
              <div className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
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
                    alt="Fourteen"
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
                <Text
                  className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
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
            <div className="bg-white_A700 flex flex-col items-center justify-start md:mb-[109px] mb-[154px] sm:mb-[84px] sm:mx-[0] sm:pb-[15px] md:pb-[16px] pb-[24px] rounded-radius4 shadow-bs sm:w-[100%] w-[28%]">
              <Img
                src="images/img_bitmap_1.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap Two"
              />
              <div className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Text
                    className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    by John Doe
                  </Text>
                  <Img
                    src="images/img_.svg"
                    className="md:h-[3px] sm:h-[3px] h-[4px] max-w-[100%] mt-[4px] md:w-[2px] sm:w-[2px] w-[4px]"
                    alt="Fifteen"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_600 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="font-bold leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[96%]"
                  as="h3"
                  variant="h3"
                >
                  How to Design Your Site to Make it Super-fast
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsFivePage;
