import React from "react";

import { Stack, Img, Text, List, Button } from "components";

const BlogPostsThreePage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-montserrat items-center justify-start mx-[auto] sm:p-[15px] md:p-[67px] p-[95px] w-[100%]">
        <Stack className="h-[710px] max-w-[1140px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] right-[9%] top-[2%] sm:w-[100%] w-[23%]">
            <Img
              src="images/img_line.svg"
              className="flex-shrink-0 max-w-[100%] w-[11%]"
              alt="Line"
            />
            <Text
              className="flex-grow font-bold ml-[14px] sm:ml-[7px] md:ml-[9px] text-bluegray_900"
              as="h3"
              variant="h3"
            >
              Read our latest blog posts
            </Text>
          </div>
          <List
            className="absolute sm:gap-[16px] md:gap-[21px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-col items-center justify-start sm:mb-[122px] md:mb-[157px] mb-[223px] rounded-radius4 shadow-bs w-[100%]">
              <div className="flex flex-col items-end justify-start w-[100%]">
                <Img
                  src="images/img_bitmap.png"
                  className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                  alt="Bitmap"
                />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                  <div className="flex flex-col justify-start sm:mb-[10px] md:mb-[14px] mb-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[39%] text-[12px] text-blue_A700 text-center uppercase w-[max-content]"
                      shape="CircleBorder13"
                    >
                      UX WRITING
                    </Button>
                    <Text
                      className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] text-bluegray_900 w-[100%]"
                      as="h2"
                      variant="h2"
                    >
                      How to create a UX Writing portfolio as a beginner
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
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
                        alt="Eight"
                      />
                      <Text
                        className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_600 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        15 March, 2022
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex sm:h-[31px] md:h-[40px] h-[56px] items-center justify-center md:ml-[12px] ml-[18px] sm:ml-[9px] mt-[100px] sm:mt-[54px] md:mt-[70px] sm:w-[30px] md:w-[39px] w-[56px]"
                    size="smIcn"
                    variant="icbFillBlueA700"
                  >
                    <Img
                      src="images/img_arrowright_white_A700.svg"
                      className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-start my-[111px] sm:my-[60px] md:my-[78px] rounded-radius4 shadow-bs w-[100%]">
              <div className="flex flex-col items-end justify-start w-[100%]">
                <Img
                  src="images/img_bitmap_236X360.png"
                  className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                  alt="Bitmap One"
                />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                  <div className="flex flex-col justify-start sm:mb-[10px] md:mb-[14px] mb-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius13 sm:w-[100%] w-[75%]">
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
                    <Text
                      className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] text-bluegray_900 w-[100%]"
                      as="h2"
                      variant="h2"
                    >
                      How Snapchat and Netflix Break UX Design Principles
                      <br />
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
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
                        alt="Nine"
                      />
                      <Text
                        className="font-normal mb-[1px] sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_600 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        15 March, 2022
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex sm:h-[31px] md:h-[40px] h-[56px] items-center justify-center md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[100px] sm:mt-[54px] md:mt-[70px] sm:w-[30px] md:w-[39px] w-[56px]"
                    size="smIcn"
                    variant="icbFillBlueA700"
                  >
                    <Img
                      src="images/img_arrowright_white_A700.svg"
                      className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                      alt="arrowright One"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[122px] md:mt-[157px] mt-[223px] rounded-radius4 shadow-bs w-[100%]">
              <div className="flex flex-col items-end justify-start w-[100%]">
                <Img
                  src="images/img_bitmap_1.png"
                  className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                  alt="Bitmap Two"
                />
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                  <div className="flex flex-col justify-start sm:mb-[10px] md:mb-[14px] mb-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[43%] text-[12px] text-blue_A700 text-center uppercase w-[max-content]"
                      shape="CircleBorder13"
                    >
                      WEB DESIGN
                    </Button>
                    <Text
                      className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] text-bluegray_900 w-[100%]"
                      as="h2"
                      variant="h2"
                    >
                      How to Design Your Site to Make it Super-fast
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
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
                        alt="Ten"
                      />
                      <Text
                        className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_600 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        15 March, 2022
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex sm:h-[31px] md:h-[40px] h-[56px] items-center justify-center md:ml-[12px] ml-[18px] sm:ml-[9px] mt-[100px] sm:mt-[54px] md:mt-[70px] sm:w-[30px] md:w-[39px] w-[56px]"
                    size="smIcn"
                    variant="icbFillBlueA700"
                  >
                    <Img
                      src="images/img_arrowright_white_A700.svg"
                      className="h-[32px] sm:h-[18px] md:h-[23px] flex items-center justify-center"
                      alt="arrowright Two"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </List>
        </Stack>
      </div>
    </>
  );
};

export default BlogPostsThreePage;
