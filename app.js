import React from "react";
import ReactDOM from "react-dom/client";
//header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={require("./images/logo2.jpg")}></img>
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
// restaurant card
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating } = resData?.info;
  if (!resData || !resData.info) {
    return null; // or display some default content or an error message
  }
  return (
    <div id="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt="res-logo"
      ></img>
      <div className="content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4> {avgRating}</h4>
        <h4> {costForTwo}</h4>
      </div>
    </div>
  );
};
//data
const resObj = {
  restaurants: [
    {
      info: {
        id: "564359",
        name: "Dairy Day Ice Creams & Frozen Desserts",
        cloudinaryImageId: "b97f8c2a0faaf88ae26be5167b9d877e",
        locality: "Spot 18 Mall",
        areaName: "Pimple Saudagar",
        costForTwo: "₹400 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.6,
        veg: true,
        parentId: "436147",
        avgRatingString: "4.6",
        totalRatingsString: "100+",
        promoted: true,
        adTrackingId:
          "cid=10346047~p=1~eid=0000018c-c648-473e-0fec-bf0500f10144~srvts=1704133674814~45826",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 01:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=564359",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "289353",
        name: "BOX8 - Desi Meals",
        cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
        locality: "Kaspate Wasti",
        areaName: "Wakad",
        costForTwo: "₹250 for two",
        cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
        avgRating: 4.3,
        parentId: "10655",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 4.2,
          serviceability: "SERVICEABLE",
          slaString: "11-21 mins",
          lastMileTravelString: "4.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=289353",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "23728",
        name: "McDonald's",
        cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
        locality: "Santosh Nagar",
        areaName: "Dange Chowk",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.3,
        parentId: "630",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 58,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "58 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 02:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=23728",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "786350",
        name: "Balaji Chinese",
        cloudinaryImageId: "7c0554455339ba87a620e56abbb22ef1",
        locality: "Pimple Gurav",
        areaName: "Sangvi",
        costForTwo: "₹399 for two",
        cuisines: ["Chinese"],
        veg: true,
        parentId: "40592",
        avgRatingString: "NEW",
        promoted: true,
        adTrackingId:
          "cid=10038845~p=2~eid=0000018c-c648-473e-0fec-bf0600f10239~srvts=1704133674814~45826",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 6.1,
          serviceability: "SERVICEABLE",
          slaString: "33 mins",
          lastMileTravelString: "6.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=786350",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "411229",
        name: "Subway",
        cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
        locality: "Sambhaji Chowk",
        areaName: "Nigdi",
        costForTwo: "₹400 for two",
        cuisines: ["Beverages"],
        avgRating: 4.3,
        parentId: "2",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 6.7,
          serviceability: "SERVICEABLE",
          slaString: "30 mins",
          lastMileTravelString: "6.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 01:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=411229",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "643738",
        name: "WeFit-Bowls, Salads & Sandwiches",
        cloudinaryImageId: "727ee82703c6fa71d1c954ead91dc20d",
        locality: "Palash Plaza",
        areaName: "Kharadi",
        costForTwo: "₹250 for two",
        cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
        avgRating: 4.3,
        parentId: "355285",
        avgRatingString: "4.3",
        totalRatingsString: "20+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 4.2,
          serviceability: "SERVICEABLE",
          slaString: "16-26 mins",
          lastMileTravelString: "4.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "brand",
                  },
                },
              ],
            },
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=643738",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "435802",
        name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
        cloudinaryImageId: "rnznbibk85z3eilbqrha",
        locality: "Rahatani Road",
        areaName: "Pimple Saudagar",
        costForTwo: "₹300 for two",
        cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
        avgRating: 4.3,
        veg: true,
        parentId: "582",
        avgRatingString: "4.3",
        totalRatingsString: "50+",
        promoted: true,
        adTrackingId:
          "cid=10336206~p=3~eid=0000018c-c648-473e-0fec-bf0700f10361~srvts=1704133674814~45826",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 1,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "1.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 23:58:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=435802",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "622105",
        name: "MOJO Pizza - 2X Toppings",
        cloudinaryImageId: "59b64f9bb67234987652437f21d379c2",
        locality: "Palash Plaza",
        areaName: "Wakad",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
        avgRating: 4.5,
        parentId: "11329",
        avgRatingString: "4.5",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 4.2,
          serviceability: "SERVICEABLE",
          slaString: "16-26 mins",
          lastMileTravelString: "4.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "options available",
                  },
                },
              ],
            },
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=622105",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "24434",
        name: "Domino's Pizza",
        cloudinaryImageId: "dk5nnh5w4jdqdrmvwgji",
        locality: "Rahatani Road",
        areaName: "Pimple Saudagar",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.2,
        parentId: "2456",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 30,
          serviceability: "SERVICEABLE",
          slaString: "30 mins",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 02:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=24434",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "560848",
        name: "Kannu Ki Chai",
        cloudinaryImageId: "72c26c808a3b4769e7bbdc5be1ac7010",
        locality: "Jhamtani Impression",
        areaName: "Pimpri",
        costForTwo: "₹350 for two",
        cuisines: ["Beverages", "Snacks", "Pizzas", "Fast Food"],
        avgRating: 4.4,
        parentId: "114751",
        avgRatingString: "4.4",
        totalRatingsString: "100+",
        promoted: true,
        adTrackingId:
          "cid=10274428~p=5~eid=0000018c-c648-473e-0fec-bf0900f1057c~srvts=1704133674814~45826",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "36 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=560848",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "16061",
        name: "KFC",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        locality: "Spot 18 Mall",
        areaName: "Pimple Saudagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.1,
        parentId: "547",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=16061",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "325036",
        name: "Haldiram's Restaurant",
        cloudinaryImageId: "1abb89624b491497c8cff182d95ac457",
        locality: "Chinchwad Road",
        areaName: "Pimple Saudagar",
        costForTwo: "₹300 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Sweets",
          "Desserts",
          "Chaat",
        ],
        avgRating: 4.3,
        veg: true,
        parentId: "351771",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "UPTO ₹40",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=325036",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "43799",
        name: "Food At Night",
        cloudinaryImageId: "h7gaogno8i258vzcewpz",
        locality: "Baban Kalapure Chawl",
        areaName: "Pimpri",
        costForTwo: "₹300 for two",
        cuisines: ["Biryani", "North Indian", "Mughlai"],
        avgRating: 3.7,
        parentId: "80955",
        avgRatingString: "3.7",
        totalRatingsString: "500+",
        promoted: true,
        adTrackingId:
          "cid=10141623~p=6~eid=0000018c-c648-473e-0fec-bf0a00f10617~srvts=1704133674814~45826",
        sla: {
          deliveryTime: 37,
          lastMileTravel: 5.6,
          serviceability: "SERVICEABLE",
          slaString: "37 mins",
          lastMileTravelString: "5.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          exclusiveOfferMessage: "EXTRA 15% OFF",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=43799",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "9115",
        name: "Cream Stone Ice Cream",
        cloudinaryImageId: "e6af7ef8b8ad04f12d748f144b602c0f",
        locality: "Shri Ram Colony",
        areaName: "Pimple Saudagar",
        costForTwo: "₹200 for two",
        cuisines: ["Ice Cream", "Desserts", "Beverages"],
        avgRating: 4.2,
        veg: true,
        parentId: "289",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.5,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "2.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=9115",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "20966",
        name: "Mad Over Donuts",
        cloudinaryImageId: "524b746adaa25814f5d4f16745cbbc6b",
        locality: "Rahatani",
        areaName: "Pimple Saudagar",
        costForTwo: "₹200 for two",
        cuisines: ["Desserts", "Sweets", "Bakery"],
        avgRating: 4.3,
        veg: true,
        parentId: "611",
        avgRatingString: "4.3",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "33 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 00:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=20966",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "191281",
        name: "The Biryani Life",
        cloudinaryImageId: "yndkwhgsqlyxircpiwfh",
        locality: "Near Shivar Garden",
        areaName: "Pimple Saudagar",
        costForTwo: "₹250 for two",
        cuisines: [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages",
        ],
        avgRating: 3.9,
        parentId: "8496",
        avgRatingString: "3.9",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "29 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹110",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=191281",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "14779",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Jarvari Road",
        areaName: "Pimple Saudagar",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4,
        parentId: "721",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 47,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "47 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 05:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹179",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=14779",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "33937",
        name: "Firangi Bake",
        cloudinaryImageId: "xr1j06xaq63sstq7xvyz",
        locality: "Near Shivar Garden",
        areaName: "Pimple Saudagar",
        costForTwo: "₹400 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
          "Mexican",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.1,
        parentId: "3952",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "30 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=33937",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "396721",
        name: "Chai Point",
        cloudinaryImageId: "f9ekvewefxolboyrurxs",
        locality: "Rahatani Road",
        areaName: "Pimple Saudagar",
        costForTwo: "₹150 for two",
        cuisines: [
          "Bakery",
          "Beverages",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "South Indian",
          "Punjabi",
          "Chaat",
          "Indian",
          "American",
          "North Indian",
          "Fast Food",
          "Desserts",
          "Cafe",
          "Healthy Food",
          "Home Food",
        ],
        avgRating: 4.5,
        parentId: "1607",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "31 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-08 00:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                  },
                },
              ],
            },
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          exclusiveOfferMessage: "EXTRA 10% OFF",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=396721",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "9808",
        name: "Rolls Mania",
        cloudinaryImageId: "vjyjbqiazx6rbpndng39",
        locality: "Mithila Nagar",
        areaName: "Pimple Saudagar",
        costForTwo: "₹200 for two",
        cuisines: ["Rolls & Wraps"],
        avgRating: 4.2,
        parentId: "171118",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          exclusiveOfferMessage: "EXTRA 10% OFF",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=9808",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "680867",
        name: "Polar Bear",
        cloudinaryImageId: "57262fe3839f0bff174f3d7e7cc8a2b4",
        locality: "Rajveer Palace",
        areaName: "Pimple Saudagar",
        costForTwo: "₹350 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.4,
        veg: true,
        parentId: "726",
        avgRatingString: "4.4",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=680867",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "357908",
        name: "NIC Ice Creams",
        cloudinaryImageId: "85825a6d74b1059a63a9b688de9f67ce",
        locality: "kalate Nagar",
        areaName: "Wakad",
        costForTwo: "₹120 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.6,
        veg: true,
        parentId: "6249",
        avgRatingString: "4.6",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 45,
          lastMileTravel: 4,
          serviceability: "SERVICEABLE",
          slaString: "45 mins",
          lastMileTravelString: "4.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                    shortDescription: "brand",
                    fontColor: "#7E808C",
                  },
                },
              ],
            },
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹149",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=357908",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "545713",
        name: "CakeZone",
        cloudinaryImageId: "63970c0e51adaacf3abd27858df8fee8",
        locality: "LINK ROAD",
        areaName: "Bhat Nagar",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
        avgRating: 4.3,
        parentId: "7003",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 4.6,
          serviceability: "SERVICEABLE",
          slaString: "35 mins",
          lastMileTravelString: "4.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          exclusiveOfferMessage: "EXTRA 10% OFF",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=545713",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "32453",
        name: "Natural Ice Cream",
        cloudinaryImageId: "cyz5si3y9wkl8h6si5wa",
        locality: "Anand Nagar",
        areaName: "Chinchwad",
        costForTwo: "₹150 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.6,
        veg: true,
        parentId: "2093",
        avgRatingString: "4.6",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 5.9,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "5.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 00:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹175 OFF",
          subHeader: "ABOVE ₹899",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=32453",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "51897",
        name: "Desi Handi",
        cloudinaryImageId: "ubmvl7kidxsloj6qxtny",
        locality: "Bhavani Super Market",
        areaName: "Pimpri",
        costForTwo: "₹350 for two",
        cuisines: ["North Indian", "Biryani", "Chinese"],
        avgRating: 3.7,
        parentId: "22163",
        avgRatingString: "3.7",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "36 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 00:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=51897",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  ],
};
console.log(resObj);
//body of the app
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>

      <div className="res-container">
        {resObj.restaurants.map((restaurant) => {
          // mapping over restaurants array list
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
