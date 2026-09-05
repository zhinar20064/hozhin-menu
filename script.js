/* =========================================================
   HOZHIN CAFE
   MAIN JAVASCRIPT
   LOCAL DATA + FIREBASE READY
   ========================================================= */


/* =========================================================
   1. CAFE CONFIG
   ========================================================= */

const cafeConfig = {

    name: "HOZHIN",

    phone: "09147852447",

    address: {
        fa: "بوکان، خیابان ورزش، نبش کوچه اوستا 9، کافه هوژین",
        en: "Hozhin Cafe, Osta 9 Alley, Varzesh Street, Bukan"
    },

    instagram: "Caffee_hozhin",

    instagramUrl: "https://instagram.com/Caffee_hozhin"

};


/* =========================================================
   2. DATA SOURCE
   =========================================================
   
   LOCAL   = اطلاعات از همین فایل JavaScript
   FIREBASE = اطلاعات از Firebase
   
   فعلاً LOCAL است.
   بعداً فقط این مقدار را تغییر می‌دهیم.
   ========================================================= */

const DATA_SOURCE = "LOCAL";


/* =========================================================
   3. CATEGORIES
   ========================================================= */

const categories = [

    {
        id: "coffee",
        name: {
            fa: "نوشیدنی گرم بر پایه قهوه",
            en: "Hot Coffee"
        }
    },

    {
        id: "icecoffee",
        name: {
            fa: "آیس کافی‌ها",
            en: "Iced Coffee"
        }
    },

    {
        id: "hot",
        name: {
            fa: "نوشیدنی گرم",
            en: "Hot Drinks"
        }
    },

    {
        id: "shake",
        name: {
            fa: "شیک",
            en: "Shakes"
        }
    },

    {
        id: "mocktail",
        name: {
            fa: "ماکتیل‌ها",
            en: "Mocktails"
        }
    },

    {
        id: "smoothie",
        name: {
            fa: "اسموتی‌ها",
            en: "Smoothies"
        }
    },

    {
        id: "juice",
        name: {
            fa: "آبمیوه طبیعی",
            en: "Fresh Juices"
        }
    },

    {
        id: "dessert",
        name: {
            fa: "کیک و دسر",
            en: "Desserts"
        }
    },

    {
        id: "food",
        name: {
            fa: "فست فود",
            en: "Fast Food"
        }
    },

    {
        id: "hookah",
        name: {
            fa: "قلیان‌ها",
            en: "Hookah"
        }
    }

];


/* =========================================================
   4. LOCAL PRODUCTS DATABASE
   =========================================================
   
   تمام محصولات فعلاً اینجا هستند.
   
   برای عکس:
   images/category/file-name.jpg
   
   بعداً Firebase همین ساختار را تحویل برنامه می‌دهد.
   ========================================================= */

const localProducts = [

    /* -----------------------------------------------------
       HOT COFFEE
    ----------------------------------------------------- */

    {
        id: "espresso-double",
        category: "coffee",

        name: {
            fa: "اسپرسو دبل",
            en: "Double Espresso"
        },

        image: "images/coffee/espresso-double.jpg",

        price: null,

        description: {
            fa: "اسپرسو دبل",
            en: "Double espresso"
        },

        available: true,
        sortOrder: 1
    },

    {
        id: "espresso-single",
        category: "coffee",

        name: {
            fa: "اسپرسو تک",
            en: "Single Espresso"
        },

        image: "images/coffee/espresso-single.jpg",

        price: null,

        description: {
            fa: "اسپرسو تک",
            en: "Single espresso"
        },

        available: true,
        sortOrder: 2
    },

    {
        id: "mocha",
        category: "coffee",

        name: {
            fa: "موکا",
            en: "Mocha"
        },

        image: "images/coffee/mocha.jpg",

        price: null,

        description: {
            fa: "ترکیب قهوه و شکلات",
            en: "Coffee and chocolate"
        },

        available: true,
        sortOrder: 3
    },

    {
        id: "lungo",
        category: "coffee",

        name: {
            fa: "لانگو",
            en: "Lungo"
        },

        image: "images/coffee/lungo.jpg",

        price: null,

        description: {
            fa: "لانگو",
            en: "Lungo coffee"
        },

        available: true,
        sortOrder: 4
    },

    {
        id: "latte",
        category: "coffee",

        name: {
            fa: "لاته",
            en: "Latte"
        },

        image: "images/coffee/latte.jpg",

        price: null,

        description: {
            fa: "قهوه اسپرسو با شیر",
            en: "Espresso with milk"
        },

        available: true,
        sortOrder: 5
    },

    {
        id: "americano",
        category: "coffee",

        name: {
            fa: "آمریکانو",
            en: "Americano"
        },

        image: "images/coffee/americano.jpg",

        price: null,

        description: {
            fa: "اسپرسو و آب",
            en: "Espresso and water"
        },

        available: true,
        sortOrder: 6
    },

    {
        id: "macchiato",
        category: "coffee",

        name: {
            fa: "ماکیاتو",
            en: "Macchiato"
        },

        image: "images/coffee/macchiato.jpg",

        price: null,

        description: {
            fa: "اسپرسو با مقدار کمی شیر",
            en: "Espresso with a touch of milk"
        },

        available: true,
        sortOrder: 7
    },

    {
        id: "romano",
        category: "coffee",

        name: {
            fa: "رومانو",
            en: "Romano"
        },

        image: "images/coffee/romano.jpg",

        price: null,

        description: {
            fa: "اسپرسو با لیمو",
            en: "Espresso with lemon"
        },

        available: true,
        sortOrder: 8
    },

    {
        id: "affogato",
        category: "coffee",

        name: {
            fa: "آفوگاتو",
            en: "Affogato"
        },

        image: "images/coffee/affogato.jpg",

        price: null,

        description: {
            fa: "اسپرسو و بستنی",
            en: "Espresso with ice cream"
        },

        available: true,
        sortOrder: 9
    },

    {
        id: "turkish-coffee",
        category: "coffee",

        name: {
            fa: "ترک",
            en: "Turkish Coffee"
        },

        image: "images/coffee/turkish-coffee.jpg",

        price: null,

        description: {
            fa: "قهوه ترک",
            en: "Traditional Turkish coffee"
        },

        available: true,
        sortOrder: 10
    },

    {
        id: "sunrise",
        category: "coffee",

        name: {
            fa: "سان رایس",
            en: "Sunrise"
        },

        image: "images/coffee/sunrise.jpg",

        price: null,

        description: {
            fa: "سان رایس",
            en: "Sunrise coffee"
        },

        available: true,
        sortOrder: 11
    },

    {
        id: "french-coffee",
        category: "coffee",

        name: {
            fa: "فرانسه",
            en: "French Coffee"
        },

        image: "images/coffee/french-coffee.jpg",

        price: null,

        description: {
            fa: "قهوه فرانسه",
            en: "French coffee"
        },

        available: true,
        sortOrder: 12
    },

    {
        id: "greek-coffee",
        category: "coffee",

        name: {
            fa: "یونانی",
            en: "Greek Coffee"
        },

        image: "images/coffee/greek-coffee.jpg",

        price: null,

        description: {
            fa: "قهوه یونانی",
            en: "Greek coffee"
        },

        available: true,
        sortOrder: 13
    },

    {
        id: "cubano",
        category: "coffee",

        name: {
            fa: "کوبانو",
            en: "Cubano"
        },

        image: "images/coffee/cubano.jpg",

        price: null,

        description: {
            fa: "قهوه کوبانو",
            en: "Cubano coffee"
        },

        available: true,
        sortOrder: 14
    },

      /* -----------------------------------------------------
       ICED COFFEE
    ----------------------------------------------------- */

    {
        id: "iced-latte",
        category: "icecoffee",

        name: {
            fa: "آیس لاته",
            en: "Iced Latte"
        },

        image: "images/ice-coffee/iced-latte.jpg",

        price: null,

        description: {
            fa: "لاته سرد",
            en: "Cold latte"
        },

        available: true,
        sortOrder: 1
    },

    {
        id: "iced-americano",
        category: "icecoffee",

        name: {
            fa: "آیس آمریکانو",
            en: "Iced Americano"
        },

        image: "images/ice-coffee/iced-americano.jpg",

        price: null,

        description: {
            fa: "آمریکانو سرد",
            en: "Cold americano"
        },

        available: true,
        sortOrder: 2
    },

    {
        id: "iced-caramel-macchiato",
        category: "icecoffee",

        name: {
            fa: "آیس کارامل ماکیاتو",
            en: "Iced Caramel Macchiato"
        },

        image: "images/ice-coffee/iced-caramel-macchiato.jpg",

        price: null,

        description: {
            fa: "آیس کارامل ماکیاتو",
            en: "Iced caramel macchiato"
        },

        available: true,
        sortOrder: 3
    },

    {
        id: "iced-mocha",
        category: "icecoffee",

        name: {
            fa: "آیس موکا",
            en: "Iced Mocha"
        },

        image: "images/ice-coffee/iced-mocha.jpg",

        price: null,

        description: {
            fa: "موکای سرد",
            en: "Cold mocha"
        },

        available: true,
        sortOrder: 4
    },

    {
        id: "cold-brew",
        category: "icecoffee",

        name: {
            fa: "کلد برو",
            en: "Cold Brew"
        },

        image: "images/ice-coffee/cold-brew.jpg",

        price: null,

        description: {
            fa: "قهوه کلد برو",
            en: "Cold brew coffee"
        },

        available: true,
        sortOrder: 5
    },

    {
        id: "iced-dami",
        category: "icecoffee",

        name: {
            fa: "آیس دمی",
            en: "Iced Dami Coffee"
        },

        image: "images/ice-coffee/iced-dami.jpg",

        price: null,

        description: {
            fa: "قهوه دمی سرد",
            en: "Cold brewed coffee"
        },

        available: true,
        sortOrder: 6
    },

    {
        id: "iced-tea-lemon",
        category: "icecoffee",

        name: {
            fa: "آیس تی لیمو",
            en: "Lemon Iced Tea"
        },

        image: "images/ice-coffee/iced-tea-lemon.jpg",

        price: null,

        description: {
            fa: "چای سرد با لیمو",
            en: "Iced tea with lemon"
        },

        available: true,
        sortOrder: 7
    },

    {
        id: "iced-sunrise",
        category: "icecoffee",

        name: {
            fa: "آیس سان رایس",
            en: "Iced Sunrise"
        },

        image: "images/ice-coffee/iced-sunrise.jpg",

        price: null,

        description: {
            fa: "آیس سان رایس",
            en: "Iced sunrise"
        },

        available: true,
        sortOrder: 8
    },


    /* -----------------------------------------------------
       HOT DRINKS
    ----------------------------------------------------- */

    {
        id: "hot-chocolate",
        category: "hot",

        name: {
            fa: "هات چاکلت",
            en: "Hot Chocolate"
        },

        image: "images/hot-drinks/hot-chocolate.jpg",

        price: null,

        description: {
            fa: "شکلات داغ",
            en: "Hot chocolate"
        },

        available: true,
        sortOrder: 1
    },

    {
        id: "white-chocolate",
        category: "hot",

        name: {
            fa: "وایت چاکلت",
            en: "White Chocolate"
        },

        image: "images/hot-drinks/white-chocolate.jpg",

        price: null,

        description: {
            fa: "شکلات سفید داغ",
            en: "Hot white chocolate"
        },

        available: true,
        sortOrder: 2
    },

    {
        id: "pistachio-saffron-hot",
        category: "hot",

        name: {
            fa: "هات پسته زعفران",
            en: "Pistachio Saffron Hot Drink"
        },

        image: "images/hot-drinks/pistachio-saffron.jpg",

        price: null,

        description: {
            fa: "نوشیدنی گرم پسته و زعفران",
            en: "Hot pistachio and saffron drink"
        },

        available: true,
        sortOrder: 3
    },

    {
        id: "pink-chocolate",
        category: "hot",

        name: {
            fa: "پینک چاکلت",
            en: "Pink Chocolate"
        },

        image: "images/hot-drinks/pink-chocolate.jpg",

        price: null,

        description: {
            fa: "شکلات صورتی",
            en: "Pink chocolate"
        },

        available: true,
        sortOrder: 4
    },

    {
        id: "nescafe",
        category: "hot",

        name: {
            fa: "نسکافه",
            en: "Nescafe"
        },

        image: "images/hot-drinks/nescafe.jpg",

        price: null,

        description: {
            fa: "نسکافه",
            en: "Nescafe"
        },

        available: true,
        sortOrder: 5
    },

    {
        id: "cappuccino",
        category: "hot",

        name: {
            fa: "کاپوچینو",
            en: "Cappuccino"
        },

        image: "images/hot-drinks/cappuccino.jpg",

        price: null,

        description: {
            fa: "کاپوچینو",
            en: "Cappuccino"
        },

        available: true,
        sortOrder: 6
    },

    {
        id: "cocoa-milk",
        category: "hot",

        name: {
            fa: "شیر کاکائو",
            en: "Cocoa Milk"
        },

        image: "images/hot-drinks/cocoa-milk.jpg",

        price: null,

        description: {
            fa: "شیر کاکائو",
            en: "Cocoa milk"
        },

        available: true,
        sortOrder: 7
    },


    /* -----------------------------------------------------
       SHAKES
    ----------------------------------------------------- */

    {
        id: "vanilla-shake",
        category: "shake",

        name: {
            fa: "شیک وانیل",
            en: "Vanilla Shake"
        },

        image: "images/shakes/vanilla.jpg",

        price: null,

        description: {
            fa: "شیک وانیل",
            en: "Vanilla shake"
        },

        available: true,
        sortOrder: 1
    },

    {
        id: "chocolate-shake",
        category: "shake",

        name: {
            fa: "شیک شکلات",
            en: "Chocolate Shake"
        },

        image: "images/shakes/chocolate.jpg",

        price: null,

        description: {
            fa: "شیک شکلات",
            en: "Chocolate shake"
        },

        available: true,
        sortOrder: 2
    },

    {
        id: "mango-shake",
        category: "shake",

        name: {
            fa: "شیک انبه",
            en: "Mango Shake"
        },

        image: "images/shakes/mango.jpg",

        price: null,

        description: {
            fa: "شیک انبه",
            en: "Mango shake"
        },

        available: true,
        sortOrder: 3
    },

    {
        id: "lotus-shake",
        category: "shake",

        name: {
            fa: "شیک لوتوس",
            en: "Lotus Shake"
        },

        image: "images/shakes/lotus.jpg",

        price: null,

        description: {
            fa: "شیک لوتوس",
            en: "Lotus shake"
        },

        available: true,
        sortOrder: 4
    },

    {
        id: "nutella-shake",
        category: "shake",

        name: {
            fa: "شیک نوتلا",
            en: "Nutella Shake"
        },

        image: "images/shakes/nutella.jpg",

        price: null,

        description: {
            fa: "شیک نوتلا",
            en: "Nutella shake"
        },

        available: true,
        sortOrder: 5
    },

    {
        id: "oreo-shake",
        category: "shake",

        name: {
            fa: "شیک اورئو",
            en: "Oreo Shake"
        },

        image: "images/shakes/oreo.jpg",

        price: null,

        description: {
            fa: "شیک اورئو",
            en: "Oreo shake"
        },

        available: true,
        sortOrder: 6
    },

    {
        id: "strawberry-shake",
        category: "shake",

        name: {
            fa: "شیک توت فرنگی",
            en: "Strawberry Shake"
        },

        image: "images/shakes/strawberry.jpg",

        price: null,

        description: {
            fa: "شیک توت فرنگی",
            en: "Strawberry shake"
        },

        available: true,
        sortOrder: 7
    },

    {
        id: "pistachio-shake",
        category: "shake",

        name: {
            fa: "شیک پسته",
            en: "Pistachio Shake"
        },

        image: "images/shakes/pistachio.jpg",

        price: null,

        description: {
            fa: "شیک پسته",
            en: "Pistachio shake"
        },

        available: true,
        sortOrder: 8
    },

    {
        id: "peanut-shake",
        category: "shake",

        name: {
            fa: "شیک بادام زمینی",
            en: "Peanut Shake"
        },

        image: "images/shakes/peanut.jpg",

        price: null,

        description: {
            fa: "شیک بادام زمینی",
            en: "Peanut shake"
        },

        available: true,
        sortOrder: 9
    },

    {
        id: "coffee-shake",
        category: "shake",

        name: {
            fa: "شیک قهوه",
            en: "Coffee Shake"
        },

        image: "images/shakes/coffee.jpg",

        price: null,

        description: {
            fa: "شیک قهوه",
            en: "Coffee shake"
        },

        available: true,
        sortOrder: 10
    },

    {
        id: "nescafe-shake",
        category: "shake",

        name: {
            fa: "شیک نسکافه",
            en: "Nescafe Shake"
        },

        image: "images/shakes/nescafe.jpg",

        price: null,

        description: {
            fa: "شیک نسکافه",
            en: "Nescafe shake"
        },

        available: true,
        sortOrder: 11
    },

    {
        id: "biscuit-shake",
        category: "shake",

        name: {
            fa: "شیک بایکیت",
            en: "Biscuit Shake"
        },

        image: "images/shakes/biscuit.jpg",

        price: null,

        description: {
            fa: "شیک بیسکویتی",
            en: "Biscuit shake"
        },

        available: true,
        sortOrder: 12
    },

      
    /* -----------------------------------------------------
       MOCKTAILS
    ----------------------------------------------------- */

    {
        id: "mojito",
        category: "mocktail",

        name: {
            fa: "موهیتو",
            en: "Mojito"
        },

        image: "images/mocktails/mojito.jpg",

        price: null,

        description: {
            fa: "موهیتو",
            en: "Mojito"
        },

        available: true,
        sortOrder: 1
    },

    {
        id: "red-mojito",
        category: "mocktail",

        name: {
            fa: "رد موهیتو",
            en: "Red Mojito"
        },

        image: "images/mocktails/red-mojito.jpg",

        price: null,

        description: {
            fa: "رد موهیتو",
            en: "Red mojito"
        },

        available: true,
        sortOrder: 2
    },

    {
        id: "blue-mojito",
        category: "mocktail",

        name: {
            fa: "بلو موهیتو",
            en: "Blue Mojito"
        },

        image: "images/mocktails/blue-mojito.jpg",

        price: null,

        description: {
            fa: "بلو موهیتو",
            en: "Blue mojito"
        },

        available: true,
        sortOrder: 3
    },

    {
        id: "lemonade",
        category: "mocktail",

        name: {
            fa: "لیموناد",
            en: "Lemonade"
        },

        image: "images/mocktails/lemonade.jpg",

        price: null,

        description: {
            fa: "لیموناد",
            en: "Lemonade"
        },

        available: true,
        sortOrder: 4
    },

    {
        id: "pina-colada",
        category: "mocktail",

        name: {
            fa: "پیناکولادا",
            en: "Pina Colada"
        },

        image: "images/mocktails/pina-colada.jpg",

        price: null,

        description: {
            fa: "پیناکولادا",
            en: "Pina colada"
        },

        available: true,
        sortOrder: 5
    },

    {
        id: "blue-sky",
        category: "mocktail",

        name: {
            fa: "بلو اسکای",
            en: "Blue Sky"
        },

        image: "images/mocktails/blue-sky.jpg",

        price: null,

        description: {
            fa: "بلو اسکای",
            en: "Blue sky"
        },

        available: true,
        sortOrder: 6
    },


    /* -----------------------------------------------------
       SMOOTHIES
    ----------------------------------------------------- */

    {
        id: "watermelon-smoothie",
        category: "smoothie",

        name: {
            fa: "اسموتی هندوانه",
            en: "Watermelon Smoothie"
        },

        image: "images/smoothies/watermelon.jpg",

        price: null,

        description: {
            fa: "اسموتی هندوانه",
            en: "Watermelon smoothie"
        },

        available: true,
        sortOrder: 1
    },

    {
        id: "melon-smoothie",
        category: "smoothie",

        name: {
            fa: "اسموتی طالبی",
            en: "Melon Smoothie"
        },

        image: "images/smoothies/melon.jpg",

        price: null,

        description: {
            fa: "اسموتی طالبی",
            en: "Melon smoothie"
        },

        available: true,
        sortOrder: 2
    },

    {
        id: "mango-banana-smoothie",
        category: "smoothie",

        name: {
            fa: "اسموتی انبه موز",
            en: "Mango Banana Smoothie"
        },

        image: "images/smoothies/mango-banana.jpg",

        price: null,

        description: {
            fa: "اسموتی انبه و موز",
            en: "Mango and banana smoothie"
        },

        available: true,
        sortOrder: 3
    },

    {
        id: "kiwi-smoothie",
        category: "smoothie",

        name: {
            fa: "اسموتی کیوی",
            en: "Kiwi Smoothie"
        },

        image: "images/smoothies/kiwi.jpg",

        price: null,

        description: {
            fa: "اسموتی کیوی",
            en: "Kiwi smoothie"
        },

        available: true,
        sortOrder: 4
    },

    {
        id: "strawberry-smoothie",
        category: "smoothie",

        name: {
            fa: "اسموتی توت فرنگی",
            en: "Strawberry Smoothie"
        },

        image: "images/smoothies/strawberry.jpg",

        price: null,

        description: {
            fa: "اسموتی توت فرنگی",
            en: "Strawberry smoothie"
        },

        available: true,
        sortOrder: 5
    },

    {
        id: "watermelon-blackberry-smoothie",
        category: "smoothie",

        name: {
            fa: "اسموتی هندوانه شاتوت",
            en: "Watermelon Blackberry Smoothie"
        },

        image: "images/smoothies/watermelon-blackberry.jpg",

        price: null,

        description: {
            fa: "اسموتی هندوانه و شاتوت",
            en: "Watermelon and blackberry smoothie"
        },

        available: true,
        sortOrder: 6
    },


    /* -----------------------------------------------------
       FRESH JUICES
    ----------------------------------------------------- */

    {
        id: "banana-milk",
        category: "juice",

        name: {
            fa: "شیر موز",
            en: "Banana Milk"
        },

        image: "images/juices/banana-milk.jpg",

        price: null,

        description: {
            fa: "شیر موز",
            en: "Banana milk"
        },

        available: true,
        sortOrder: 1
    },

    {
        id: "mango-milk",
        category: "juice",

        name: {
            fa: "شیر انبه",
            en: "Mango Milk"
        },

        image: "images/juices/mango-milk.jpg",

        price: null,

        description: {
            fa: "شیر انبه",
            en: "Mango milk"
        },

        available: true,
        sortOrder: 2
    },

    {
        id: "strawberry-milk",
        category: "juice",

        name: {
            fa: "شیر توت فرنگی",
            en: "Strawberry Milk"
        },

        image: "images/juices/strawberry-milk.jpg",

        price: null,

        description: {
            fa: "شیر توت فرنگی",
            en: "Strawberry milk"
        },

        available: true,
        sortOrder: 3
    },

    {
        id: "orange-juice",
        category: "juice",

        name: {
            fa: "آب پرتقال",
            en: "Orange Juice"
        },

        image: "images/juices/orange.jpg",

        price: null,

        description: {
            fa: "آب پرتقال طبیعی",
            en: "Fresh orange juice"
        },

        available: true,
        sortOrder: 4
    },

    {
        id: "watermelon-juice",
        category: "juice",

        name: {
            fa: "آب هندوانه",
            en: "Watermelon Juice"
        },

        image: "images/juices/watermelon.jpg",

        price: null,

        description: {
            fa: "آب هندوانه طبیعی",
            en: "Fresh watermelon juice"
        },

        available: true,
        sortOrder: 5
    },

    {
        id: "apple-juice",
        category: "juice",

        name: {
            fa: "آب سیب",
            en: "Apple Juice"
        },

        image: "images/juices/apple.jpg",

        price: null,

        description: {
            fa: "آب سیب طبیعی",
            en: "Fresh apple juice"
        },

        available: true,
        sortOrder: 6
    },

    {
        id: "carrot-juice",
        category: "juice",

        name: {
            fa: "آب هویج",
            en: "Carrot Juice"
        },

        image: "images/juices/carrot.jpg",

        price: null,

        description: {
            fa: "آب هویج طبیعی",
            en: "Fresh carrot juice"
        },

        available: true,
        sortOrder: 7
    },

    {
        id: "melon-juice",
        category: "juice",

        name: {
            fa: "آب طالبی",
            en: "Melon Juice"
        },

        image: "images/juices/melon.jpg",

        price: null,

        description: {
            fa: "آب طالبی طبیعی",
            en: "Fresh melon juice"
        },

        available: true,
        sortOrder: 8
    },

      /* -----------------------------------------------------
       DESSERTS
    ----------------------------------------------------- */

    {
        id: "tres-leches",
        category: "dessert",

        name: {
            fa: "کیک سه شیر",
            en: "Tres Leches Cake"
        },

        image: "images/desserts/tres-leches.jpg",

        price: null,

        description: {
            fa: "کیک سه شیر",
            en: "Tres leches cake"
        },

        available: true,
        sortOrder: 1
    },

    {
        id: "chocolate-cake",
        category: "dessert",

        name: {
            fa: "کیک شکلاتی",
            en: "Chocolate Cake"
        },

        image: "images/desserts/chocolate-cake.jpg",

        price: null,

        description: {
            fa: "کیک شکلاتی",
            en: "Chocolate cake"
        },

        available: true,
        sortOrder: 2
    },

    {
        id: "tiramisu",
        category: "dessert",

        name: {
            fa: "تیرامیسو",
            en: "Tiramisu"
        },

        image: "images/desserts/tiramisu.jpg",

        price: null,

        description: {
            fa: "تیرامیسو",
            en: "Tiramisu"
        },

        available: true,
        sortOrder: 3
    },

    {
        id: "cookie",
        category: "dessert",

        name: {
            fa: "کوکی",
            en: "Cookie"
        },

        image: "images/desserts/cookie.jpg",

        price: null,

        description: {
            fa: "کوکی",
            en: "Cookie"
        },

        available: true,
        sortOrder: 4
    },


    /* -----------------------------------------------------
       FAST FOOD
    ----------------------------------------------------- */

    {
        id: "special-fries",
        category: "food",

        name: {
            fa: "سیب زمینی ویژه",
            en: "Special Fries"
        },

        image: "images/food/special-fries.jpg",

        price: null,

        description: {
            fa: "سیب زمینی ویژه",
            en: "Special fries"
        },

        available: true,
        sortOrder: 1
    },

    {
        id: "fries",
        category: "food",

        name: {
            fa: "سیب زمینی",
            en: "French Fries"
        },

        image: "images/food/fries.jpg",

        price: null,

        description: {
            fa: "سیب زمینی سرخ کرده",
            en: "French fries"
        },

        available: true,
        sortOrder: 2
    },

    {
        id: "alfredo-pasta",
        category: "food",

        name: {
            fa: "پاستا آلفردو",
            en: "Alfredo Pasta"
        },

        image: "images/food/alfredo-pasta.jpg",

        price: null,

        description: {
            fa: "پاستا آلفردو",
            en: "Alfredo pasta"
        },

        available: true,
        sortOrder: 3
    },

    {
        id: "caesar-salad",
        category: "food",

        name: {
            fa: "سالاد سیزار",
            en: "Caesar Salad"
        },

        image: "images/food/caesar-salad.jpg",

        price: null,

        description: {
            fa: "سالاد سیزار",
            en: "Caesar salad"
        },

        available: true,
        sortOrder: 4
    },


    /* -----------------------------------------------------
       HOOKAH
    ----------------------------------------------------- */

    {
        id: "lady-claire",
        category: "hookah",

        name: {
            fa: "لیدی کلر",
            en: "Lady Claire"
        },

        image: "images/hookah/lady-claire.jpg",

        price: null,

        description: {
            fa: "قلیان لیدی کلر",
            en: "Lady Claire hookah"
        },

        available: true,
        sortOrder: 1
    },

    {
        id: "ice-plum",
        category: "hookah",

        name: {
            fa: "آلو یخ",
            en: "Ice Plum"
        },

        image: "images/hookah/ice-plum.jpg",

        price: null,

        description: {
            fa: "قلیان آلو یخ",
            en: "Ice plum hookah"
        },

        available: true,
        sortOrder: 2
    },

    {
        id: "moscow-nights",
        category: "hookah",

        name: {
            fa: "شب های مسکو",
            en: "Moscow Nights"
        },

        image: "images/hookah/moscow-nights.jpg",

        price: null,

        description: {
            fa: "قلیان شب های مسکو",
            en: "Moscow Nights hookah"
        },

        available: true,
        sortOrder: 3
    },

    {
        id: "momento",
        category: "hookah",

        name: {
            fa: "مومینتو",
            en: "Momento"
        },

        image: "images/hookah/momento.jpg",

        price: null,

        description: {
            fa: "قلیان مومینتو",
            en: "Momento hookah"
        },

        available: true,
        sortOrder: 4
    },

    {
        id: "dijleh",
        category: "hookah",

        name: {
            fa: "دجله",
            en: "Dijleh"
        },

        image: "images/hookah/dijleh.jpg",

        price: null,

        description: {
            fa: "قلیان دجله",
            en: "Dijleh hookah"
        },

        available: true,
        sortOrder: 5
    },

    {
        id: "english-hookah",
        category: "hookah",

        name: {
            fa: "انگلیسی",
            en: "English"
        },

        image: "images/hookah/english.jpg",

        price: null,

        description: {
            fa: "قلیان انگلیسی",
            en: "English hookah"
        },

        available: true,
        sortOrder: 6
    },

    {
        id: "two-apples",
        category: "hookah",

        name: {
            fa: "دو سیب",
            en: "Two Apples"
        },

        image: "images/hookah/two-apples.jpg",

        price: null,

        description: {
            fa: "قلیان دو سیب",
            en: "Two apples hookah"
        },

        available: true,
        sortOrder: 7
    }

];

/* =========================================================
   5. APPLICATION STATE
   ========================================================= */

const state = {

    language:
        localStorage.getItem("hozhin-language") || "fa",

    theme:
        localStorage.getItem("hozhin-theme") || "dark",

    currentPage: "home",

    currentCategory: "coffee",

    selectedProduct: null,

    quantity: 1,

    cart:
        JSON.parse(
            localStorage.getItem("hozhin-cart") || "[]"
        )

};


/* =========================================================
   6. ACTIVE PRODUCTS
   ========================================================= */

let products = [...localProducts];


/* =========================================================
   7. DOM ELEMENTS
   ========================================================= */

const elements = {

    homePage:
        document.getElementById("homePage"),

    menuPage:
        document.getElementById("menuPage"),

    showMenuButton:
        document.getElementById("showMenuButton"),

    menuButton:
        document.getElementById("menuButton"),

    closeSideMenu:
        document.getElementById("closeSideMenu"),

    sideMenu:
        document.getElementById("sideMenu"),

    sideMenuOverlay:
        document.getElementById("sideMenuOverlay"),

    languageButton:
        document.getElementById("languageButton"),

    languageLabel:
        document.getElementById("languageLabel"),

    themeButton:
        document.getElementById("themeButton"),

    categoryList:
        document.getElementById("categoryList"),

    productsGrid:
        document.getElementById("productsGrid"),

    productModal:
        document.getElementById("productModal"),

    productModalClose:
        document.getElementById("productModalClose"),

    productDetailImage:
        document.getElementById("productDetailImage"),

    productDetailCategory:
        document.getElementById("productDetailCategory"),

    productDetailName:
        document.getElementById("productDetailName"),

    productDetailDescription:
        document.getElementById("productDetailDescription"),

    productDetailPrice:
        document.getElementById("productDetailPrice"),

    quantityMinus:
        document.getElementById("quantityMinus"),

    quantityPlus:
        document.getElementById("quantityPlus"),

    quantityValue:
        document.getElementById("quantityValue"),

    addToCartButton:
        document.getElementById("addToCartButton"),

    cartButton:
        document.getElementById("cartButton"),

    cartCount:
        document.getElementById("cartCount"),

    cartModal:
        document.getElementById("cartModal"),

    cartModalClose:
        document.getElementById("cartModalClose"),

    cartItems:
        document.getElementById("cartItems"),

    cartTotal:
        document.getElementById("cartTotal"),

    submitOrderButton:
        document.getElementById("submitOrderButton"),

    clearCartButton:
        document.getElementById("clearCartButton"),

    orderResult:
        document.getElementById("orderResult"),

    toast:
        document.getElementById("toast"),

    informationPopup:
        document.getElementById("informationPopup"),

    informationPopupClose:
        document.getElementById("informationPopupClose"),

    informationPopupIcon:
        document.getElementById("informationPopupIcon"),

    informationPopupLabel:
        document.getElementById("informationPopupLabel"),

    informationPopupValue:
        document.getElementById("informationPopupValue"),

    informationPopupAction:
        document.getElementById("informationPopupAction")

};


/* =========================================================
   8. TRANSLATIONS
   ========================================================= */

const translations = {

    fa: {

        menu: "منو",

        showMenu: "مشاهده منو",

        menuTitle: "منوی HOZHIN",

        menuSubtitle:
            "انتخاب کنید و سفارش دهید",

        order: "سفارش شما",

        total: "مبلغ کل",

        addToOrder:
            "افزودن به سفارش",

        submitOrder:
            "ثبت سفارش",

        clearOrder:
            "خالی کردن سفارش",

        orderNotice:
            "سفارش شما پس از ثبت برای کافه ارسال می‌شود.",

        emptyCart:
            "سبد سفارش شما خالی است.",

        priceNotSet:
            "قیمت ثبت نشده",

        unavailable:
            "ناموجود",

        phone:
            "تلفن",

        address:
            "آدرس",

        instagram:
            "اینستاگرام",

        call:
            "تماس",

        openMap:
            "مشاهده روی نقشه",

        openInstagram:
            "مشاهده اینستاگرام",

        language:
            "زبان",

        theme:
            "تم سایت",

        persian:
            "فارسی",

        english:
            "English",

        orderAdded:
            "به سفارش اضافه شد",

        orderCleared:
            "سفارش خالی شد",

        orderSubmitted:
            "سفارش با موفقیت ثبت شد"

    },


    en: {

        menu: "Menu",

        showMenu: "View Menu",

        menuTitle: "HOZHIN MENU",

        menuSubtitle:
            "Choose your favorite and order",

        order: "Your Order",

        total: "Total",

        addToOrder:
            "Add to Order",

        submitOrder:
            "Submit Order",

        clearOrder:
            "Clear Order",

        orderNotice:
            "Your order will be sent to the cafe after submission.",

        emptyCart:
            "Your order is empty.",

        priceNotSet:
            "Price not set",

        unavailable:
            "Unavailable",

        phone:
            "Phone",

        address:
            "Address",

        instagram:
            "Instagram",

        call:
            "Call",

        openMap:
            "Open Map",

        openInstagram:
            "Open Instagram",

        language:
            "Language",

        theme:
            "Theme",

        persian:
            "فارسی",

        english:
            "English",

        orderAdded:
            "Added to order",

        orderCleared:
            "Order cleared",

        orderSubmitted:
            "Order submitted successfully"

    }

        menu: "منو",

        showMenu: "مشاهده منو",

        menuTitle: "منوی HOZHIN",

        menuSubtitle:
            "انتخاب کنید و سفارش دهید",

        order: "سفارش شما",

        total: "مبلغ کل",

        addToOrder:
            "افزودن به سفارش",

        submitOrder:
            "ثبت سفارش",

        clearOrder:
            "خالی کردن سفارش",

        orderNotice:
            "سفارش شما پس از ثبت برای کافه ارسال می‌شود.",

        emptyCart:
            "سبد سفارش شما خالی است.",

        priceNotSet:
            "قیمت ثبت نشده",

        unavailable:
            "ناموجود",

        phone:
            "تلفن",

        address:
            "آدرس",

        instagram:
            "اینستاگرام",

        call:
            "تماس",

        openMap:
            "مشاهده روی نقشه",

        openInstagram:
            "مشاهده اینستاگرام",

        language:
            "زبان",

        theme:
            "تم سایت",

        persian:
            "فارسی",

        english:
            "English",

        orderAdded:
            "به سفارش اضافه شد",

        orderCleared:
            "سفارش خالی شد",

        orderSubmitted:
            "سفارش با موفقیت ثبت شد"

    },


    en: {

        menu: "Menu",

        showMenu: "View Menu",

        menuTitle: "HOZHIN MENU",

        menuSubtitle:
            "Choose your favorite and order",

        order: "Your Order",

        total: "Total",

        addToOrder:
            "Add to Order",

        submitOrder:
            "Submit Order",

        clearOrder:
            "Clear Order",

        orderNotice:
            "Your order will be sent to the cafe after submission.",

        emptyCart:
            "Your order is empty.",

        priceNotSet:
            "Price not set",

        unavailable:
            "Unavailable",

        phone:
            "Phone",

        address:
            "Address",

        instagram:
            "Instagram",

        call:
            "Call",

        openMap:
            "Open Map",

        openInstagram:
            "Open Instagram",

        language:
            "Language",

        theme:
            "Theme",

        persian:
            "فارسی",

        english:
            "English",

        orderAdded:
            "Added to order",

        orderCleared:
            "Order cleared",

        orderSubmitted:
            "Order submitted successfully"

    }

};
