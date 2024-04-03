import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1702891826~exp=1702892426~hmac=4e906855afd156fd933175b550a67d2815b6ab1b59313c672a6a374958864ccd"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const ResturantCard = (props) => {
    const { resData } = props;
    console.log("resData", resData.info)

    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, deliveryTime } = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Min </h4>
        </div>
    )
}
const ResList = {
    "restaurants": [
        {
            "info": {
                "id": "10575",
                "name": "Pizza Hut",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "locality": "Shanti Nagar",
                "areaName": "Shanti Nagar",
                "costForTwo": "₹600 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4.1,
                "parentId": "721",
                "avgRatingString": "4.1",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 2.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "29 mins",
                    "lastMileTravelString": "2.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-20 01:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                            "shortDescription": "Kids Favourite options",
                            "fontColor": "#7E808C"
                        }
                    ]
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
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                        "shortDescription": "Kids Favourite options"
                                    }
                                }
                            ]
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
                "link": "https://www.swiggy.com/restaurants/pizza-hut-shanti-nagar-bangalore-10575",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "5938",
                "name": "Burger King",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "Tasker Town",
                "areaName": "Shivaji Nagar",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.2,
                "parentId": "166",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 2.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "33 mins",
                    "lastMileTravelString": "2.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-20 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                            "shortDescription": "Kids Favourite options",
                            "fontColor": "#7E808C"
                        }
                    ]
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
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                        "shortDescription": "Kids Favourite options"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹129"
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
                "link": "https://www.swiggy.com/restaurants/burger-king-tasker-town-shivaji-nagar-bangalore-5938",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "124178",
                "name": "Starbucks Coffee",
                "cloudinaryImageId": "0c958153eeb436db6d515ca36e47e8a4",
                "locality": "Ashok Nagar",
                "areaName": "Lavelle Road",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Beverages",
                    "Cafe",
                    "Snacks",
                    "Desserts",
                    "Bakery",
                    "Ice Cream"
                ],
                "avgRating": 4.3,
                "parentId": "195515",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 0.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20 mins",
                    "lastMileTravelString": "0.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 23:59:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
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
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
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
                "link": "https://www.swiggy.com/restaurants/starbucks-coffee-ashok-nagar-lavelle-road-bangalore-124178",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "347868",
                "name": "KFC",
                "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                "locality": "Cunnigham road",
                "areaName": "Vasanth Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                ],
                "avgRating": 4,
                "parentId": "547",
                "avgRatingString": "4.0",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "27 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-20 03:00:00",
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
                "link": "https://www.swiggy.com/restaurants/kfc-cunnigham-road-vasanth-nagar-bangalore-347868",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "43836",
                "name": "McDonald's",
                "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                "locality": "MG Road",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.2,
                "parentId": "630",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 0.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20 mins",
                    "lastMileTravelString": "0.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-20 02:45:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
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
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
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
                "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "281469",
                "name": "Lavonne",
                "cloudinaryImageId": "emlehbuwgsmryxhwzhvq",
                "locality": "St. Marks Road",
                "areaName": "St. Marks Road",
                "costForTwo": "₹750 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts"
                ],
                "avgRating": 4.6,
                "parentId": "10530",
                "avgRatingString": "4.6",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 2.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "27 mins",
                    "lastMileTravelString": "2.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 22:40:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ],
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
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
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {
                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
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
                "link": "https://www.swiggy.com/restaurants/lavonne-st-marks-road-bangalore-281469",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "23847",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "fjqcvqfgqlw6h0atques",
                "locality": "Rest House Road",
                "areaName": "Brigade Road",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "avgRating": 4.3,
                "parentId": "2456",
                "avgRatingString": "4.3",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 25,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 22:59:00",
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
                    "header": "₹150 OFF",
                    "subHeader": "ABOVE ₹299",
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
                "link": "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "69876",
                "name": "Subway",
                "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                "locality": "UB City",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Salads",
                    "Snacks",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "2",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 0.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "24 mins",
                    "lastMileTravelString": "0.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-20 01:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
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
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
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
                "link": "https://www.swiggy.com/restaurants/subway-ub-city-ashok-nagar-bangalore-69876",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "503961",
                "name": "Istah - The Mediterranean Way",
                "cloudinaryImageId": "9a01f2935fcb5ae05426db8264062102",
                "locality": "Akkithimanahalli",
                "areaName": "Santhi Nagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Mediterranean",
                    "Snacks",
                    "Biryani",
                    "Grill",
                    "Kebabs",
                    "Arabian",
                    "Lebanese",
                    "Beverages",
                    "Desserts",
                    "Italian",
                    "Turkish"
                ],
                "avgRating": 4.5,
                "parentId": "3518",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-20 00:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                        }
                    ],
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
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
                                        "description": "OnlyOnSwiggy",
                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {
                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹110"
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
                "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-akkithimanahalli-santhi-nagar-bangalore-503961",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "312660",
                "name": "Samosa Party",
                "cloudinaryImageId": "ixgxvfu6ggvw1w1awgr1",
                "locality": "Brigade Road",
                "areaName": "Brigade Road",
                "costForTwo": "₹150 for two",
                "cuisines": [
                    "Fast Food",
                    "Snacks",
                    "Beverages",
                    "Chaat",
                    "North Indian",
                    "Street Food",
                    "Sweets",
                    "Desserts",
                    "Punjabi",
                    "Bakery"
                ],
                "avgRating": 4.6,
                "parentId": "6364",
                "avgRatingString": "4.6",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 2.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "34 mins",
                    "lastMileTravelString": "2.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 22:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
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
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
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
                "link": "https://www.swiggy.com/restaurants/samosa-party-brigade-road-bangalore-312660",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "51835",
                "name": "Aubree",
                "cloudinaryImageId": "f21351377b116f70b3658264894feccc",
                "locality": "Timmaiah Road",
                "areaName": "Shivajinagar",
                "costForTwo": "₹700 for two",
                "cuisines": [
                    "Desserts",
                    "Bakery"
                ],
                "avgRating": 4.5,
                "veg": true,
                "parentId": "3807",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 2.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "29 mins",
                    "lastMileTravelString": "2.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 21:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "D",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
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
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
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
                "link": "https://www.swiggy.com/restaurants/aubree-timmaiah-road-shivajinagar-bangalore-51835",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "354531",
                "name": "Burger Seigneur",
                "cloudinaryImageId": "t8qo8yuimdpduzbozybj",
                "locality": "St. Marks Road",
                "areaName": "St. Marks Road",
                "costForTwo": "₹1200 for two",
                "cuisines": [
                    "American",
                    "Continental",
                    "Beverages"
                ],
                "avgRating": 4.5,
                "parentId": "12095",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "29 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-20 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ],
                    "textExtendedBadges": [
                        {
                            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                            "shortDescription": "Kids Favourite options",
                            "fontColor": "#7E808C"
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
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {
                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                        "shortDescription": "Kids Favourite options"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
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
                "link": "https://www.swiggy.com/restaurants/burger-seigneur-st-marks-road-bangalore-354531",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "32510",
                "name": "Toscano",
                "cloudinaryImageId": "f6idsoj8oevlwas80b9c",
                "locality": "Lavelle Road",
                "areaName": "UB City",
                "costForTwo": "₹1200 for two",
                "cuisines": [
                    "Italian",
                    "Pizzas",
                    "Pastas",
                    "Continental",
                    "Desserts",
                    "Bakery"
                ],
                "avgRating": 4.4,
                "parentId": "22481",
                "avgRatingString": "4.4",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 0.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35 mins",
                    "lastMileTravelString": "0.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
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
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
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
                "link": "https://www.swiggy.com/restaurants/toscano-lavelle-road-ub-city-bangalore-32510",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "342643",
                "name": "The Pizza Bakery",
                "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
                "locality": "Church Street",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹700 for two",
                "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Continental"
                ],
                "avgRating": 4.5,
                "parentId": "11108",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 28,
                    "lastMileTravel": 1.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "28 mins",
                    "lastMileTravelString": "1.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ],
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
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
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {
                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
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
                "link": "https://www.swiggy.com/restaurants/the-pizza-bakery-church-street-ashok-nagar-bangalore-342643",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "29063",
                "name": "Misu",
                "cloudinaryImageId": "lx0tpfgsbqygafwh30wh",
                "locality": "St. Marks Road",
                "areaName": "St. Marks Road",
                "costForTwo": "₹1300 for two",
                "cuisines": [
                    "Asian",
                    "Chinese",
                    "Vietnamese",
                    "Malaysian",
                    "Sushi",
                    "Singaporean",
                    "Desserts"
                ],
                "avgRating": 4.4,
                "parentId": "7415",
                "avgRatingString": "4.4",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 0.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "27 mins",
                    "lastMileTravelString": "0.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 23:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ],
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
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
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {
                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
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
                "link": "https://www.swiggy.com/restaurants/misu-st-marks-road-bangalore-29063",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "53503",
                "name": "Brik Oven - Original Sourdough Pizzas",
                "cloudinaryImageId": "49352a71022a5b08a8361306ba253892",
                "locality": "Church Street",
                "areaName": "Church Street",
                "costForTwo": "₹700 for two",
                "cuisines": [
                    "Italian",
                    "Pizzas",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.3,
                "parentId": "7389",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 1.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "33 mins",
                    "lastMileTravelString": "1.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 23:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ],
                    "textExtendedBadges": [
                        {
                            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                            "shortDescription": "Kids Favourite options",
                            "fontColor": "#7E808C"
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
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {
                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                        "shortDescription": "Kids Favourite options"
                                    }
                                }
                            ]
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
                "link": "https://www.swiggy.com/restaurants/brik-oven-original-sourdough-pizzas-church-street-bangalore-53503",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "105167",
                "name": "Bhartiya Jalpan",
                "cloudinaryImageId": "lpikismf7ulkpknsbw2h",
                "locality": "Tasker Town",
                "areaName": "Commercial Street",
                "costForTwo": "₹270 for two",
                "cuisines": [
                    "North Indian",
                    "Beverages",
                    "Chaat"
                ],
                "avgRating": 4.3,
                "veg": true,
                "parentId": "7518",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 21:30:00",
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
                "aggregatedDiscountInfoV2": {
                },
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
                "link": "https://www.swiggy.com/restaurants/bhartiya-jalpan-tasker-town-commercial-street-bangalore-105167",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "614642",
                "name": "Soul Rasa",
                "cloudinaryImageId": "v9fczzlua1wnrx63fh1g",
                "locality": "Akkithimanahalli",
                "areaName": "Shanti Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Indian",
                    "Healthy Food",
                    "Home Food",
                    "South Indian",
                    "North Indian"
                ],
                "avgRating": 4.6,
                "parentId": "239281",
                "avgRatingString": "4.6",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 23:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                        }
                    ],
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
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
                                        "description": "OnlyOnSwiggy",
                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {
                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "brand"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹110"
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
                "link": "https://www.swiggy.com/restaurants/soul-rasa-akkithimanahalli-shanti-nagar-bangalore-614642",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "12808",
                "name": "A2B - Adyar Ananda Bhavan",
                "cloudinaryImageId": "pdod4o1em9potwsd22rs",
                "locality": "Wilson Garden",
                "areaName": "Shanti Nagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "South Indian",
                    "North Indian",
                    "Sweets",
                    "Chinese"
                ],
                "avgRating": 4.5,
                "veg": true,
                "parentId": "22",
                "avgRatingString": "4.5",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "32 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 22:30:00",
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
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹499",
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
                "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-wilson-garden-shanti-nagar-bangalore-12808",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "396741",
                "name": "Faasos - Wraps, Rolls & Shawarma",
                "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
                "locality": "Residency Road",
                "areaName": "Shantinagar",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Kebabs",
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "American",
                    "Healthy Food",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.3,
                "parentId": "21809",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 2.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "33 mins",
                    "lastMileTravelString": "2.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-12-19 23:59:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
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
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "15% OFF",
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
                "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-residency-road-shantinagar-bangalore-396741",
                "type": "WEBLINK"
            }
        }
    ],
}
const Body = () => 
{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    
                    ResList.restaurants.map((data) => (
                        <ResturantCard key={data.info.id} resData={data} />
                    ))

                }


            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
