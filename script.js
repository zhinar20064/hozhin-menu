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

/* =========================================================
   9. HELPERS
   ========================================================= */

function t(key) {

    return (
        translations[state.language]?.[key] ||
        translations.fa[key] ||
        key
    );

}


function getLocalizedText(value) {

    if (
        typeof value === "object" &&
        value !== null
    ) {

        return (
            value[state.language] ||
            value.fa ||
            value.en ||
            ""
        );

    }

    return value || "";

}


function formatPrice(price) {

    if (
        price === null ||
        price === undefined ||
        price === ""
    ) {

        return t("priceNotSet");

    }

    return (
        new Intl.NumberFormat(
            state.language === "fa"
                ? "fa-IR"
                : "en-US"
        ).format(price)
        + (
            state.language === "fa"
                ? " تومان"
                : " Toman"
        )
    );

}


/* =========================================================
   10. IMAGE FALLBACK
   ========================================================= */

function handleImageError(image) {

    image.onerror = null;

    image.src =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600 600"
            >
                <rect
                    width="600"
                    height="600"
                    fill="#111111"
                />

                <text
                    x="50%"
                    y="48%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    fill="#c9a45c"
                    font-size="48"
                    font-family="Georgia"
                >
                    HOZHIN
                </text>

                <text
                    x="50%"
                    y="56%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    fill="#77736c"
                    font-size="20"
                    font-family="Arial"
                    letter-spacing="5"
                >
                    CAFE
                </text>
            </svg>
        `);

}


/* =========================================================
   11. SAVE STATE
   ========================================================= */

function saveState() {

    localStorage.setItem(
        "hozhin-language",
        state.language
    );

    localStorage.setItem(
        "hozhin-theme",
        state.theme
    );

    localStorage.setItem(
        "hozhin-cart",
        JSON.stringify(state.cart)
    );

}


/* =========================================================
   12. RENDER CATEGORIES
   ========================================================= */

function renderCategories() {

    if (!elements.categoryList) {
        return;
    }

    elements.categoryList.innerHTML = "";

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "category-button";

        if (
            category.id ===
            state.currentCategory
        ) {

            button.classList.add("active");

        }

        button.textContent =
            getLocalizedText(category.name);

        button.addEventListener(
            "click",
            () => {

                state.currentCategory =
                    category.id;

                renderCategories();

                renderProducts();

            }
        );

        elements.categoryList.appendChild(button);

    });

    }

/* =========================================================
   13. RENDER PRODUCTS
   ========================================================= */

function renderProducts() {

    if (!elements.productsGrid) {
        return;
    }

    elements.productsGrid.innerHTML = "";

    const categoryProducts =
        products
            .filter(product =>
                product.category ===
                state.currentCategory
            )
            .sort(
                (a, b) =>
                    a.sortOrder -
                    b.sortOrder
            );


    if (categoryProducts.length === 0) {

        elements.productsGrid.innerHTML = `
            <div class="cart-empty">
                ${t("emptyCart")}
            </div>
        `;

        return;

    }


    categoryProducts.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "product-card";


        if (!product.available) {

            card.style.opacity = "0.55";

        }


        const price =
            formatPrice(product.price);


        card.innerHTML = `

            <div class="product-card-image">

                <img
                    src="${product.image}"
                    alt="${getLocalizedText(product.name)}"
                    loading="lazy"
                >

            </div>

            <div class="product-card-content">

                <div class="product-card-name">
                    ${getLocalizedText(product.name)}
                </div>

                ${
                    product.available
                        ? `
                            <div class="product-card-price">
                                ${price}
                            </div>
                        `
                        : `
                            <div class="product-card-unavailable">
                                ${t("unavailable")}
                            </div>
                        `
                }

            </div>

        `;


        const image =
            card.querySelector("img");

        if (image) {

            image.addEventListener(
                "error",
                () => handleImageError(image)
            );

        }


        card.addEventListener(
            "click",
            () => {

                if (!product.available) {

                    showToast(
                        t("unavailable")
                    );

                    return;

                }

                openProductModal(product);

            }
        );


        elements.productsGrid.appendChild(card);

    });

}


/* =========================================================
   14. OPEN PRODUCT MODAL
   ========================================================= */

function openProductModal(product) {

    state.selectedProduct = product;

    state.quantity = 1;

    elements.productDetailImage.src =
        product.image;

    elements.productDetailImage.alt =
        getLocalizedText(product.name);

    elements.productDetailCategory.textContent =
        getCategoryName(product.category);

    elements.productDetailName.textContent =
        getLocalizedText(product.name);

    elements.productDetailDescription.textContent =
        getLocalizedText(product.description);

    elements.productDetailPrice.textContent =
        formatPrice(product.price);

    elements.quantityValue.textContent =
        state.quantity;

    elements.productModal.classList.add("active");

    elements.productModal.setAttribute(
        "aria-hidden",
        "false"
    );


    elements.productDetailImage.onerror =
        () => {

            handleImageError(
                elements.productDetailImage
            );

        };

}


/* =========================================================
   15. CLOSE PRODUCT MODAL
   ========================================================= */

function closeProductModal() {

    elements.productModal.classList.remove(
        "active"
    );

    elements.productModal.setAttribute(
        "aria-hidden",
        "true"
    );

    state.selectedProduct = null;

}


/* =========================================================
   16. CATEGORY NAME
   ========================================================= */

function getCategoryName(categoryId) {

    const category =
        categories.find(
            item =>
                item.id === categoryId
        );

    if (!category) {
        return "";
    }

    return getLocalizedText(
        category.name
    );

}


/* =========================================================
   17. QUANTITY
   ========================================================= */

function increaseQuantity() {

    state.quantity++;

    elements.quantityValue.textContent =
        state.quantity;

}


function decreaseQuantity() {

    if (state.quantity <= 1) {
        return;
    }

    state.quantity--;

    elements.quantityValue.textContent =
        state.quantity;

}


/* =========================================================
   18. ADD TO CART
   ========================================================= */

function addToCart() {

    const product =
        state.selectedProduct;

    if (!product) {
        return;
    }


    const existingItem =
        state.cart.find(
            item =>
                item.productId ===
                product.id
        );


    if (existingItem) {

        existingItem.quantity +=
            state.quantity;

    } else {

        state.cart.push({

            productId:
                product.id,

            quantity:
                state.quantity

        });

    }


    saveState();

    updateCartCount();

    closeProductModal();

    showToast(
        t("orderAdded")
    );

}


/* =========================================================
   19. CART PRODUCTS
   ========================================================= */

function getCartDetailedItems() {

    return state.cart
        .map(item => {

            const product =
                products.find(
                    product =>
                        product.id ===
                        item.productId
                );

            if (!product) {
                return null;
            }

            return {

                ...item,

                product

            };

        })
        .filter(Boolean);

}


/* =========================================================
   20. CART COUNT
   ========================================================= */

function updateCartCount() {

    const count =
        state.cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    elements.cartCount.textContent =
        count;

}


/* =========================================================
   21. CART TOTAL
   ========================================================= */

function calculateCartTotal() {

    return getCartDetailedItems()
        .reduce(
            (total, item) => {

                if (
                    typeof item.product.price !==
                    "number"
                ) {

                    return total;

                }

                return (
                    total +
                    item.product.price *
                    item.quantity
                );

            },
            0
        );

               }


/* =========================================================
   22. RENDER CART
   ========================================================= */

function renderCart() {

    if (!elements.cartItems) {
        return;
    }

    const items =
        getCartDetailedItems();


    if (items.length === 0) {

        elements.cartItems.innerHTML = `
            <div class="cart-empty">
                ${t("emptyCart")}
            </div>
        `;

    } else {

        elements.cartItems.innerHTML = "";


        items.forEach(item => {

            const product =
                item.product;


            const cartItem =
                document.createElement("div");

            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${product.image}"
                        alt="${getLocalizedText(product.name)}"
                    >

                </div>


                <div class="cart-item-info">

                    <div class="cart-item-name">
                        ${getLocalizedText(product.name)}
                    </div>

                    <div class="cart-item-price">
                        ${formatPrice(product.price)}
                    </div>

                </div>


                <div class="cart-item-controls">

                    <button
                        type="button"
                        data-action="minus"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        type="button"
                        data-action="plus"
                    >
                        +
                    </button>

                </div>

            `;


            const image =
                cartItem.querySelector("img");

            if (image) {

                image.addEventListener(
                    "error",
                    () => handleImageError(image)
                );

            }


            const minusButton =
                cartItem.querySelector(
                    '[data-action="minus"]'
                );

            const plusButton =
                cartItem.querySelector(
                    '[data-action="plus"]'
                );


            minusButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    changeCartQuantity(
                        product.id,
                        -1
                    );

                }
            );


            plusButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    changeCartQuantity(
                        product.id,
                        1
                    );

                }
            );


            elements.cartItems.appendChild(
                cartItem
            );

        });

    }


    elements.cartTotal.textContent =
        formatPrice(
            calculateCartTotal()
        );

}


/* =========================================================
   23. CHANGE CART QUANTITY
   ========================================================= */

function changeCartQuantity(
    productId,
    amount
) {

    const item =
        state.cart.find(
            cartItem =>
                cartItem.productId ===
                productId
        );


    if (!item) {
        return;
    }


    item.quantity += amount;


    if (item.quantity <= 0) {

        state.cart =
            state.cart.filter(
                cartItem =>
                    cartItem.productId !==
                    productId
            );

    }


    saveState();

    updateCartCount();

    renderCart();

}


/* =========================================================
   24. OPEN CART
   ========================================================= */

function openCart() {

    renderCart();

    elements.cartModal.classList.add(
        "active"
    );

    elements.cartModal.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* =========================================================
   25. CLOSE CART
   ========================================================= */

function closeCart() {

    elements.cartModal.classList.remove(
        "active"
    );

    elements.cartModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   26. CLEAR CART
   ========================================================= */

function clearCart() {

    state.cart = [];

    saveState();

    updateCartCount();

    renderCart();

    showToast(
        t("orderCleared")
    );

}


/* =========================================================
   27. SUBMIT ORDER
   ========================================================= */

function submitOrder() {

    if (state.cart.length === 0) {

        showToast(
            t("emptyCart")
        );

        return;

    }


    const orderId =
        "HZ-" +
        Date.now()
            .toString()
            .slice(-6);


    const order = {

        id: orderId,

        createdAt:
            new Date().toISOString(),

        items:
            getCartDetailedItems()
                .map(item => ({

                    productId:
                        item.product.id,

                    name:
                        getLocalizedText(
                            item.product.name
                        ),

                    quantity:
                        item.quantity,

                    price:
                        item.product.price

                })),

        total:
            calculateCartTotal()

    };


    /*
       فعلاً سفارش در مرورگر ذخیره می‌شود.

       بعداً این قسمت با Firebase
       جایگزین می‌شود.
    */

    const localOrders =
        JSON.parse(
            localStorage.getItem(
                "hozhin-orders"
            ) || "[]"
        );


    localOrders.push(order);


    localStorage.setItem(
        "hozhin-orders",
        JSON.stringify(localOrders)
    );


    elements.orderResult.innerHTML = `
        <strong>
            ${t("orderSubmitted")}
        </strong>
        <br>
        ${orderId}
    `;


    state.cart = [];

    saveState();

    updateCartCount();

    renderCart();

}


/* =========================================================
   28. SHOW TOAST
   ========================================================= */

let toastTimer = null;


function showToast(message) {

    if (!elements.toast) {
        return;
    }

    elements.toast.textContent =
        message;

    elements.toast.classList.add(
        "active"
    );


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {

                elements.toast.classList.remove(
                    "active"
                );

            },
            2200
        );

}


/* =========================================================
   29. OPEN MENU PAGE
   ========================================================= */

function showMenuPage() {

    state.currentPage = "menu";

    elements.homePage.classList.remove(
        "active"
    );

    elements.menuPage.classList.add(
        "active"
    );

    renderCategories();

    renderProducts();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

                       }


/* =========================================================
   30. SHOW HOME PAGE
   ========================================================= */

function showHomePage() {

    state.currentPage = "home";

    elements.menuPage.classList.remove(
        "active"
    );

    elements.homePage.classList.add(
        "active"
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   31. SIDE MENU
   ========================================================= */

function openSideMenu() {

    elements.sideMenu.classList.add(
        "active"
    );

    elements.sideMenuOverlay.classList.add(
        "active"
    );

    elements.sideMenu.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closeSideMenu() {

    elements.sideMenu.classList.remove(
        "active"
    );

    elements.sideMenuOverlay.classList.remove(
        "active"
    );

    elements.sideMenu.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   32. LANGUAGE
   ========================================================= */

function toggleLanguage() {

    state.language =
        state.language === "fa"
            ? "en"
            : "fa";


    document.documentElement.lang =
        state.language;


    document.documentElement.dir =
        state.language === "fa"
            ? "rtl"
            : "ltr";


    saveState();

    updateInterface();

}


/* =========================================================
   33. THEME
   ========================================================= */

function toggleTheme() {

    state.theme =
        state.theme === "dark"
            ? "dark-gold"
            : "dark";


    document.body.dataset.theme =
        state.theme;

    saveState();

}


/* =========================================================
   34. UPDATE INTERFACE
   ========================================================= */

function updateInterface() {

    elements.languageLabel.textContent =
        state.language === "fa"
            ? t("persian")
            : t("english");


    elements.showMenuButton.textContent =
        t("showMenu");


    document.getElementById(
        "menuTitle"
    ).textContent =
        t("menuTitle");


    document.getElementById(
        "menuSubtitle"
    ).textContent =
        t("menuSubtitle");


    document.getElementById(
        "cartTitle"
    ).textContent =
        t("order");


    document.getElementById(
        "cartTotalLabel"
    ).textContent =
        t("total");


    document.getElementById(
        "submitOrderButton"
    ).textContent =
        t("submitOrder");


    document.getElementById(
        "clearCartButton"
    ).textContent =
        t("clearOrder");


    document.getElementById(
        "cartNotice"
    ).textContent =
        t("orderNotice");


    renderCategories();

    renderProducts();

    renderCart();

}


/* =========================================================
   35. INFORMATION POPUP DATA
   ========================================================= */

const informationData = {

    phone: {

        icon: `
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M6.6 3.5 9.2 3c.7-.1 1.3.3 1.5 1l1 3c.2.5 0 1.1-.4 1.4l-1.8 1.2c1 2.1 2.7 3.8 4.8 4.8l1.2-1.8c.3-.4.9-.6 1.4-.4l3 1c.7.2 1.1.8 1 1.5l-.5 2.6c-.1.7-.7 1.2-1.4 1.2C11.3 18.5 5.5 12.7 4.9 6.1c-.1-.7.4-1.3 1.1-1.4Z"/>
            </svg>
        `,

        value:
            cafeConfig.phone,

        action:
            `tel:${cafeConfig.phone}`,

        actionText: {
            fa: "تماس",
            en: "Call"
        }

    },


    address: {

        icon: `
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M12 21s7-6.2 7-12A7 7 0 1 0 5 9c0 5.8 7 12 7 12Z"/>
                <circle
                    cx="12"
                    cy="9"
                    r="2.3"
                />
            </svg>
        `,

        value:
            cafeConfig.address,

        action:
            "https://www.google.com/maps/search/?api=1&query=Hozhin%20Cafe%20Bukan%20Varzesh%20Street%20Osta%209",

        actionText: {
            fa: "مشاهده روی نقشه",
            en: "Open Map"
        }

    },


    instagram: {

        icon: `
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                />

                <circle
                    cx="12"
                    cy="12"
                    r="4"
                />

                <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                />
            </svg>
        `,

        value:
            cafeConfig.instagram,

        action:
            cafeConfig.instagramUrl,

        actionText: {
            fa: "مشاهده اینستاگرام",
            en: "Open Instagram"
        }

    }

};


/* =========================================================
   36. INFORMATION POPUP
   ========================================================= */

function openInformationPopup(type) {

    const data =
        informationData[type];

    if (!data) {
        return;
    }


    elements.informationPopupIcon.innerHTML =
        data.icon;


    elements.informationPopupLabel.textContent =
        t(type);


    elements.informationPopupValue.textContent =
        getLocalizedText(data.value);


    elements.informationPopupAction.href =
        data.action;


    elements.informationPopupAction.textContent =
        getLocalizedText(
            data.actionText
        );


    if (type === "instagram") {

        elements.informationPopupAction.target =
            "_blank";

        elements.informationPopupAction.rel =
            "noopener noreferrer";

    } else if (type === "address") {

        elements.informationPopupAction.target =
            "_blank";

        elements.informationPopupAction.rel =
            "noopener noreferrer";

    } else {

        elements.informationPopupAction.removeAttribute(
            "target"
        );

        elements.informationPopupAction.removeAttribute(
            "rel"
        );

    }


    elements.informationPopup.classList.add(
        "active"
    );

    elements.informationPopup.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closeInformationPopup() {

    elements.informationPopup.classList.remove(
        "active"
    );

    elements.informationPopup.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   37. EVENT LISTENERS
   ========================================================= */


/* SHOW MENU */

elements.showMenuButton.addEventListener(
    "click",
    showMenuPage
);


/* HAMBURGER */

elements.menuButton.addEventListener(
    "click",
    openSideMenu
);


/* CLOSE SIDE MENU */

elements.closeSideMenu.addEventListener(
    "click",
    closeSideMenu
);


/* SIDE MENU OVERLAY */

elements.sideMenuOverlay.addEventListener(
    "click",
    closeSideMenu
);


/* LANGUAGE */

elements.languageButton.addEventListener(
    "click",
    toggleLanguage
);


/* THEME */

elements.themeButton.addEventListener(
    "click",
    toggleTheme
);


/* CART */

elements.cartButton.addEventListener(
    "click",
    openCart
);


/* CLOSE CART */

elements.cartModalClose.addEventListener(
    "click",
    closeCart
);


/* PRODUCT CLOSE */

elements.productModalClose.addEventListener(
    "click",
    closeProductModal
);


/* QUANTITY + */

elements.quantityPlus.addEventListener(
    "click",
    increaseQuantity
);


/* QUANTITY - */

elements.quantityMinus.addEventListener(
    "click",
    decreaseQuantity
);


/* ADD TO CART */

elements.addToCartButton.addEventListener(
    "click",
    addToCart
);


/* CLEAR CART */

elements.clearCartButton.addEventListener(
    "click",
    clearCart
);


/* SUBMIT ORDER */

elements.submitOrderButton.addEventListener(
    "click",
    submitOrder
);


/* INFORMATION ICONS */

document
    .querySelectorAll(
        ".information-icon-button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openInformationPopup(
                    button.dataset.info
                );

            }
        );

    });


/* INFORMATION CLOSE */

elements.informationPopupClose.addEventListener(
    "click",
    closeInformationPopup
);


/* INFORMATION OUTSIDE */

elements.informationPopup.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            elements.informationPopup
        ) {

            closeInformationPopup();

        }

    }
);


/* ESCAPE */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }

        closeInformationPopup();

        closeProductModal();

        closeCart();

        closeSideMenu();

    }
);


/* =========================================================
   38. INITIALIZATION
   ========================================================= */

function initializeApp() {

    document.documentElement.lang =
        state.language;

    document.documentElement.dir =
        state.language === "fa"
            ? "rtl"
            : "ltr";


    document.body.dataset.theme =
        state.theme;


    updateCartCount();

    updateInterface();

}


initializeApp();

