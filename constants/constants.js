const promoTabs = [
    {
        id: 1,
        title: "Scan in store",
    },
    {
        id: 2,
        title: "Drink of the Day",
    },
    {
        id: 3,
        title: "Deals",
    },
]

const onboarding_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/favourite_food.png"),
        title: "Choose a Favourite Tea",
        description: "When you order GrabTea, we’ll hook you up with exclusive coupon, specials and rewards"
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/background_02.png"),
        bannerImage: require("../assets/images/hot_delivery.png"),
        title: "Hot Delivery to Home",
        description: "We make ordering faster, simple and free-no matter if you order online or cash"
    },
    {
        id: 3,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/great_food.png"),
        title: "Receive the Great Food",
        description: "You’ll receive the great food within a hour. And get free delivery credits for every order."
    }
]
const constants = {
    promoTabs, 
    onboarding_screens
};
export default constants;