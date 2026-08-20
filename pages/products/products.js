const products = [
    {
        id: "qPancakes",
        category: "Breakfast",
        name: "Quantum-Pancakes",
        price: 8.50,
        itemDescription: "Fluffy stacked pancakes infused with a shimmering blueberry compote that seems to shift color with every bite. Made from a proprietary batter blend, they're light, airy, and subtly sweet. Served warm with a drizzle of holographic-shine maple syrup.",
        shortDescription: "Fluffy stacked pancakes with a shimmering blueberry compote and a drizzle of maple syrup.",
        featured: true
    },

    {
        category: "Breakfast",
        name: "Pixel-Waffles",
        price: 9.00,
        itemDescription: "Crisp waffles with a perfect grid pattern, golden on the outside and soft within. Topped with a scoop of vanilla cream and a dusting of powdered sugar. A playful nod to retro gaming, reimagined for the breakfast table.",
        shortDescription: "Golden grid-pattern waffles topped with vanilla cream and powdered sugar.",
        featured: false
    },

    {
        category: "Breakfast",
        name: "Cyber-Omelet",
        price: 14.71,
        itemDescription: "A vibrant bowl layered with quinoa, roasted vegetables, and a soft poached egg. Bright, colorful, and packed with nutrients to start the day right. Finished with a light citrus drizzle for a fresh pop of flavor.",
        shortDescription: "A vibrant bowl of quinoa, roasted veggies, and a poached egg with citrus drizzle.",
        featured: false
    },

    {
        category: "Breakfast",
        name: "Neon-Breakfast-Bowl",
        price: 7.50,
        itemDescription: "A vibrant bowl layered with quinoa, roasted vegetables, and a soft poached egg. Bright, colorful, and packed with nutrients to start the day right. Finished with a light citrus drizzle for a fresh pop of flavor.",
        shortDescription: "A vibrant bowl of quinoa, roasted veggies, and a poached egg with citrus drizzle.",
        featured: false
    },

    {
        category: "Breakfast",
        name: "Circuit-French-Toast",
        price: 11.50,
        itemDescription: "Thick-cut brioche soaked in a cinnamon-vanilla custard and grilled to golden perfection. Layered with fresh berries and a dusting of powdered sugar. A comforting classic with a futuristic twist.",
        shortDescription: "Thick brioche French toast with fresh berries and powdered sugar.",
        featured: true
    },

    {
        category: "Lunch",
        name: "Glitch-Burger",
        price: 14.00,
        itemDescription: "A juicy beef patty stacked with melted cheese, crisp lettuce, and tangy pickles. Served on a toasted bun with a side of secret sauce. Bold, messy, and endlessly satisfying.",
        shortDescription: "A juicy beef patty with cheese, lettuce, pickles, and secret sauce.",
        featured: true
    },

    {
        category: "Lunch",
        name: "A.I Chicken Sandwich",
        price: 14.00,
        itemDescription: "A crispy fried chicken breast seasoned with a smoky spice blend, layered with fresh slaw. Served on a soft brioche bun with a tangy house sauce. Every bite is precision-crafted flavor.",
        shortDescription: "Crispy fried chicken with slaw and tangy sauce on a brioche bun.",
        featured: false
    },

    {
        category: "Lunch",
        name: "Quantum Wrap",
        price: 9.44,
        itemDescription: "A soft tortilla wrapped around grilled chicken, fresh greens, and a creamy avocado spread. Light yet filling, with a balance of textures in every bite. A quick, flavorful option for those on the move.",
        shortDescription: "A soft wrap with grilled chicken, greens, and creamy avocado spread.",
        featured: false
    },

    {
        category: "Lunch",
        name: "Fusion Ramen Bowl",
        price: 21.14,
        itemDescription: "Rich, slow-simmered broth loaded with tender noodles, soft-boiled egg, and fresh scallions. A fusion of traditional technique and bold, modern flavor. Comforting, savory, and deeply satisfying.",
        shortDescription: "Rich ramen broth with tender noodles, soft-boiled egg, and scallions.",
        featured: true
    },

    {
        category: "Lunch",
        name: "Hologram Club Sandwich",
        price: 14.00,
        itemDescription: "A triple-decker classic stacked with turkey, bacon, lettuce, and tomato. Toasted to a golden crisp and held together with a smear of garlic aioli. A timeless favorite with a bold new look.",
        shortDescription: "A triple-decker sandwich with turkey, bacon, lettuce, and tomato.",
        featured: false
    },

    {
        category: "Dinner",
        name: "Plasma Steak",
        price: 33.80,
        itemDescription: "A perfectly seared cut of steak with a caramelized crust and juicy, tender center. Seasoned simply to let the quality of the meat shine through. Served sizzling for maximum impact.",
        shortDescription: "A perfectly seared steak with a caramelized crust and juicy center.",
        featured: true
    },

    {
        category: "Dinner",
        name: "Binary Salmon",
        price: 25.30,
        itemDescription: "Flaky, pan-seared salmon finished with a light citrus glaze. Cooked to a delicate, buttery texture with crisp skin. A clean, elegant plate that balances richness and freshness.",
        shortDescription: "Pan-seared salmon with a light citrus glaze and crisp skin.",
        featured: false
    },

    {
        category: "Dinner",
        name: "Quantum Noodle Bowl",
        price: 21.14,
        itemDescription: "Chewy noodles tossed in a savory umami sauce with fresh vegetables and herbs. Quick-cooked for maximum flavor and texture contrast. A satisfying bowl that's both simple and bold.",
        shortDescription: "Chewy noodles tossed in savory umami sauce with fresh vegetables.",
        featured: true
    },

    {
        category: "Dinner",
        name: "Neon Teriyaki Chicken",
        price: 15.16,
        itemDescription: "Tender grilled chicken glazed in a sweet-and-savory teriyaki sauce. Served over steamed rice with a sprinkle of sesame seeds. Bright, bold, and full of flavor.",
        shortDescription: "Grilled chicken glazed in sweet-savory teriyaki sauce over rice.",
        featured: false
    },

    {
        category: "Dinner",
        name: "Cyber Rice Plate",
        price: 14.00,
        itemDescription: "A hearty plate of seasoned rice topped with your choice of protein and fresh vegetables. Balanced, filling, and endlessly customizable. A dependable favorite built for energy.",
        shortDescription: "Seasoned rice topped with protein and fresh vegetables.",
        featured: false
    },

    {
        category: "Desert",
        name: "Data Cube Cheesecake",
        price: 5.99,
        itemDescription: "A dense, creamy cheesecake with a buttery graham cracker crust. Cut into clean, precise squares for easy sharing. Rich, smooth, and irresistibly indulgent.",
        shortDescription: "A dense, creamy cheesecake with a buttery graham cracker crust.",
        featured: false
    },

    {
        category: "Desert",
        name: "Pixel Ice Cream",
        price: 5.99,
        itemDescription: "Smooth, creamy scoops of ice cream in a rotating lineup of bold flavors. Served in a signature blocky presentation for a playful twist. Cold, sweet, and perfectly satisfying.",
        shortDescription: "Smooth, creamy ice cream scoops in a playful blocky presentation.",
        featured: false
    },

    {
        category: "Desert",
        name: "Neon Cheesecake",
        price: 5.99,
        itemDescription: "A silky cheesecake swirled with vibrant fruit compote for a burst of color and flavor. Rich and creamy with a buttery crust base. A dessert as eye-catching as it is delicious.",
        shortDescription: "A silky cheesecake swirled with vibrant fruit compote.",
        featured: false
    },

    {
        category: "Desert",
        name: "Quantum Cookie Sundae",
        price: 4.50,
        itemDescription: "A warm, gooey cookie topped with a generous scoop of vanilla ice cream. Finished with chocolate drizzle and a sprinkle of crushed cookie bits. Comfort food taken to the next level.",
        shortDescription: "A warm cookie topped with vanilla ice cream and chocolate drizzle.",
        featured: false
    },

    {
        category: "Desert",
        name: "Hologram Brownie",
        price: 4.50,
        itemDescription: "A rich, fudgy brownie with a crackly top and dense, chocolatey center. Served warm for that perfect melt-in-your-mouth texture. Simple, decadent, and always a crowd-pleaser.",
        shortDescription: "A rich, fudgy brownie with a crackly top and dense center.",
        featured: false
    },

    {
        category: "Drinks",
        name: "Blue Screen Lemonade",
        price: 2.99,
        itemDescription: "A bright, tangy lemonade with a vivid blue hue and a refreshing citrus punch. Lightly sweetened and served ice-cold. The perfect cooler for a hot afternoon.",
        shortDescription: "A bright, tangy blue-hued lemonade served ice-cold.",
        featured: false
    },

    {
        category: "Drinks",
        name: "RGB Energy Soda",
        price: 2.99,
        itemDescription: "A fizzy, colorful soda bursting with fruity flavor and a light caffeine kick. Refreshing and vibrant, perfect for an afternoon boost. Bold color, bold taste.",
        shortDescription: "A fizzy, fruity soda with a light caffeine kick.",
        featured: false
    },

    {
        category: "Drinks",
        name: "Liquid Lighting",
        price: 2.99,
        itemDescription: "An electrifying citrus-based drink with a sharp, energizing kick. Light, fizzy, and served ice-cold for maximum refreshment. Built to jolt you awake.",
        shortDescription: "An electrifying, fizzy citrus drink served ice-cold.",
        featured: false
    },

    {
        category: "Drinks",
        name: "Nano Tea",
        price: 2.99,
        itemDescription: "A delicately brewed tea with subtle floral notes and a smooth finish. Served hot or iced, depending on preference. Calming, light, and quietly satisfying.",
        shortDescription: "A delicately brewed tea with subtle floral notes.",
        featured: false
    },

    {
        category: "Drinks",
        name: "Quantum Shake",
        price: 2.99,
        itemDescription: "A thick, creamy milkshake blended to velvety perfection. Topped with whipped cream and a classic cherry. Rich, indulgent, and endlessly nostalgic.",
        shortDescription: "A thick, creamy milkshake topped with whipped cream and a cherry.",
        featured: false
    },
]