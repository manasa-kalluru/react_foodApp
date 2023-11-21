import React from "react";
import ReactDOM from "react-dom/client";

/*
App Component
- Header
- Body 
- Footer
Header Component
- Hamburger Button
- Logo
- Current Location
- Search Bar
- Cart
Body Component
- Resteraunt Container
  - Resteraunt Cards
     - Image
     - Resteraunt Name
     - Rating
     - Delivery Charges
     - Delivery time
Footer Component
- Logo
- Links
- Download from Appstore, Playstore
- Facebook, Twitter, Instagram
- Terms Links


*/

const resList = [
{
  "info": {
    "id": "119416",
    "name": "KFC",
    "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
    "locality": "Simhapuri Colony",
    "areaName": "New BusStand",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    "avgRating": 4,
    "feeDetails": {
      "restaurantId": "119416",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 300
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 300
    },
    "parentId": "547",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 1,
      "serviceability": "SERVICEABLE",
      "slaString": "19 mins",
      "lastMileTravelString": "1.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-11-20 23:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-simhapuri-colony-new-busstand-kadapa-119416",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "115989",
    "name": "Baskin Robbins - Ice Cream Desserts",
    "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
    "locality": "Ys Nagar",
    "areaName": "New BusStand",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "Desserts"
    ],
    "avgRating": 4.2,
    "veg": true,
    "feeDetails": {
      "restaurantId": "115989",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 500
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 500
    },
    "parentId": "5588",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 0.9,
      "serviceability": "SERVICEABLE",
      "slaString": "19 mins",
      "lastMileTravelString": "0.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-11-20 21:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "10% OFF",
      "subHeader": "ABOVE ₹1000",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-ys-nagar-new-busstand-kadapa-115989",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "499908",
    "name": "Andhra Spice (Original)",
    "cloudinaryImageId": "zmjgtcpnna9w1p0sx0pb",
    "locality": "RS Road",
    "areaName": "New BusStand",
    "costForTwo": "₹180 for two",
    "cuisines": [
      "Biryani",
      "North Indian",
      "Chinese",
      "South Indian",
      "Tandoor",
      "Thalis"
    ],
    "avgRating": 4,
    "feeDetails": {
      "restaurantId": "499908",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 300
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 300
    },
    "parentId": "454884",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 18,
      "lastMileTravel": 0.5,
      "serviceability": "SERVICEABLE",
      "slaString": "18 mins",
      "lastMileTravelString": "0.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-11-20 22:15:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/andhra-spice-original-rs-road-new-busstand-kadapa-499908",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "131374",
    "name": "Rayalaseema Spice Family Restaurant",
    "cloudinaryImageId": "36d223bbcf4c4b61942a35f4ebbdb2cf",
    "locality": "Ys Nagar",
    "areaName": "New BusStand",
    "costForTwo": "₹450 for two",
    "cuisines": [
      "Biryani",
      "South Indian",
      "North Indian",
      "Chinese"
    ],
    "avgRating": 4,
    "feeDetails": {
      "restaurantId": "131374",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 500
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 500
    },
    "parentId": "167852",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 0.9,
      "serviceability": "SERVICEABLE",
      "slaString": "19 mins",
      "lastMileTravelString": "0.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-11-20 22:30:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/rayalaseema-spice-family-restaurant-ys-nagar-new-busstand-kadapa-131374",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "550834",
    "name": "Streat Kitchen",
    "cloudinaryImageId": "jfsbywbn6bbyjujfqgws",
    "locality": "Kagithalapenta",
    "areaName": "New BusStand",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Chinese"
    ],
    "avgRating": 4,
    "feeDetails": {
      "restaurantId": "550834",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 500
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 500
    },
    "parentId": "195877",
    "avgRatingString": "4.0",
    "totalRatingsString": "500+",
    "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 1.1,
      "serviceability": "SERVICEABLE",
      "slaString": "19 mins",
      "lastMileTravelString": "1.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-11-20 23:30:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/streat-kitchen-kagithalapenta-new-busstand-kadapa-550834",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "116000",
    "name": "Yummy Fried Chicken",
    "cloudinaryImageId": "h3wfdbcnsns8rwspant0",
    "areaName": "New Busstand",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "Continental",
      "American",
      "Pizzas",
      "Italian"
    ],
    "avgRating": 3.6,
    "feeDetails": {
      "restaurantId": "116000",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 500
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 500
    },
    "parentId": "228659",
    "avgRatingString": "3.6",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 1.9,
      "serviceability": "SERVICEABLE",
      "slaString": "22 mins",
      "lastMileTravelString": "1.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-11-20 23:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/yummy-fried-chicken-new-busstand-kadapa-116000",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "332663",
    "name": "K.K. Bakery",
    "cloudinaryImageId": "sajv7ejpf2fsqk01eepf",
    "locality": "R.V Nagar",
    "areaName": "New BusStand",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Bakery",
      "Desserts",
      "Snacks",
      "Tandoor"
    ],
    "avgRating": 3.6,
    "feeDetails": {
      "restaurantId": "332663",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 500
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 500
    },
    "parentId": "112850",
    "avgRatingString": "3.6",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 0.8,
      "serviceability": "SERVICEABLE",
      "slaString": "19 mins",
      "lastMileTravelString": "0.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-11-20 22:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/k-k-bakery-r-v-nagar-new-busstand-kadapa-332663",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "131218",
    "name": "Hotel Maharaja",
    "cloudinaryImageId": "hswanzic5aswwxxjr3cr",
    "locality": "Koti Reddy Circle",
    "areaName": "New BusStand",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Biryani",
      "Tandoor",
      "South Indian"
    ],
    "avgRating": 3.7,
    "feeDetails": {
      "restaurantId": "131218",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 500
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 500
    },
    "parentId": "100047",
    "avgRatingString": "3.7",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 17,
      "lastMileTravel": 0.1,
      "serviceability": "SERVICEABLE",
      "slaString": "17 mins",
      "lastMileTravelString": "0.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-11-20 22:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/hotel-maharaja-koti-reddy-circle-new-busstand-kadapa-131218",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "554162",
    "name": "Firdouse Restaurant",
    "cloudinaryImageId": "mjgdd5d2cjuwi5vohzkv",
    "locality": "7 Road",
    "areaName": "New BusStand",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Biryani",
      "Arabian",
      "South Indian",
      "North Indian"
    ],
    "avgRating": 3.7,
    "feeDetails": {
      "restaurantId": "554162",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 500
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 500
    },
    "parentId": "333249",
    "avgRatingString": "3.7",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 1.1,
      "serviceability": "SERVICEABLE",
      "slaString": "19 mins",
      "lastMileTravelString": "1.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-11-20 23:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/firdouse-restaurant-7-road-new-busstand-kadapa-554162",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "233716",
    "name": "Chillies Food Paradise",
    "cloudinaryImageId": "my5l0wdqhd9uj8fwodzn",
    "locality": "Railway Station Rd",
    "areaName": "Kadapa Locality",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "North Indian",
      "South Indian"
    ],
    "avgRating": 4,
    "feeDetails": {
      "restaurantId": "233716",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 500
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 500
    },
    "parentId": "61165",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 20,
      "lastMileTravel": 1.3,
      "serviceability": "SERVICEABLE",
      "slaString": "20 mins",
      "lastMileTravelString": "1.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-11-20 22:30:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/chillies-food-paradise-railway-station-rd-kadapa-locality-kadapa-233716",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "559362",
    "name": "Manasa Inn",
    "cloudinaryImageId": "dzdy56zpdctqwjsjhol9",
    "locality": "RS Road",
    "areaName": "New BusStand",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Indian",
      "Andhra",
      "Seafood",
      "Biryani",
      "Chinese",
      "Fast Food",
      "Salads"
    ],
    "avgRating": 3.9,
    "feeDetails": {
      "restaurantId": "559362",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 500
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 500
    },
    "parentId": "250129",
    "avgRatingString": "3.9",
    "totalRatingsString": "500+",
    "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 1,
      "serviceability": "SERVICEABLE",
      "slaString": "19 mins",
      "lastMileTravelString": "1.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-11-20 22:15:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          "description": "OnlyOnSwiggy"
        },
        {
          "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          "description": "OnlyOnSwiggy"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "OnlyOnSwiggy",
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
              }
            },
            {
              "attributes": {
                "description": "OnlyOnSwiggy",
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/manasa-inn-rs-road-new-busstand-kadapa-559362",
    "type": "WEBLINK"
  }
}
];

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-items">
      <img className="sideNav" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" />
      <img className="logo" src="https://static.vecteezy.com/system/resources/thumbnails/008/480/741/small/burger-icon-simple-colored-burger-icon-fast-food-logo-free-png.png" />
      </div>
      <div className="nav-items">
      <ul>
        <li>Location</li>
        <li>SearchBar</li>
        <li>Cart</li>
      </ul>
      </div>
    </div>
  );
};
const Divider = () => {
  return (
    <hr className="divider"></hr>
  );
}

const imgLink = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const ResterauntCard = (props) => {
  const {resData} = props;
  const {name, avgRatingString, totalFee, costForTwo, cloudinaryImageId} = resData?.info;
  return (
    <div className="res-card">
      <img className="res-image" src={imgLink + cloudinaryImageId}/>
      <h3>{name}</h3>
      <h5>{avgRatingString}</h5>
      <h5>{totalFee}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
}

const Body = () => {
  return (
    <div className="resteraunt-container">
      {
        resList.map((res) => {
          return <ResterauntCard key = {res.info.id} resData = {res} />
        })
      }
      
    </div>
  );
}


const Footer = () => {
  return (
    <div className="footer">
      <img className="logo" src="https://static.vecteezy.com/system/resources/thumbnails/008/480/741/small/burger-icon-simple-colored-burger-icon-fast-food-logo-free-png.png" />
      <ul>
        <li><h4>About US</h4></li>
        <li><h4>Contact US</h4></li>
      </ul>
      </div>
  );
}

const AppComponent = () => {
  return (
    <div className="app-component">
      <HeaderComponent />
      <Divider />
      <Body />
      <Divider />
      <Footer />
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppComponent />);
