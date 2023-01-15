import React from "react";

import { Text, List, Img } from "components";

const BlogPostsSixPage = () => {
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
          <List
            className="sm:gap-[16px] md:gap-[21px] gap-[30px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[28px] md:mt-[36px] mt-[52px] w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[16px] pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap"
              />
              <div className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] text-bluegray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
                <Text
                  className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius24 w-[100%]">
                  <Img
                    src="images/img_ovalcopy4.png"
                    className="sm:h-[27px] md:h-[34px] h-[48px] rounded-radius50 sm:w-[26px] md:w-[33px] w-[48px]"
                    alt="OvalCopyFour"
                  />
                  <Text
                    className="font-light sm:ml-[3px] md:ml-[4px] ml-[7px] text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Jane Phillips
                  </Text>
                  <Text
                    className="font-light ml-[141px] sm:ml-[77px] md:ml-[99px] text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    15 March, 2022
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[16px] pb-[24px] rounded-radius4 shadow-bs w-[100%]">
              <Img
                src="images/img_bitmap_1.png"
                className="max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                alt="Bitmap One"
              />
              <div className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                <Text
                  className="font-bold leading-[27.00px] md:leading-[normal] sm:leading-[normal] text-bluegray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  How to Design Your Site to Make it Super-fast
                </Text>
                <Text
                  className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_600 w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius24 w-[100%]">
                  <Img
                    src="images/img_ovalcopy4_48X48.png"
                    className="sm:h-[27px] md:h-[34px] h-[48px] rounded-radius50 sm:w-[26px] md:w-[33px] w-[48px]"
                    alt="OvalCopyFour One"
                  />
                  <Text
                    className="font-light sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Wade Warren
                  </Text>
                  <Text
                    className="font-light ml-[131px] sm:ml-[71px] md:ml-[92px] text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    15 March, 2022
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default BlogPostsSixPage;
