// --- 1. 黃金資料庫 (v2.9.3 Diet Boosted) ---
// 包含 150 項餐點，強化健康選項，並修正咖哩邏輯
const db = [
    // === 🇹🇼 台式 (tw) ===
    // 新增健康餐
    { n: "超商地瓜餐(茶葉蛋+豆漿)", s: "solo", h: "diet", t: "dry", p: "meal", e: "🍠", c: "tw" },
    { n: "燙滷味(全蔬菜/不喝湯)", s: "solo", h: "diet", t: "dry", p: "meal", e: "🥬", c: "tw" },
    
    // 原有清單
    { n: "大腸包小腸", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🌭", c: "tw" }, 
    { n: "脆皮臭豆腐", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🥢", c: "tw" }, 
    { n: "加熱滷味", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🥘", c: "tw" }, 
    { n: "炸雞排", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🐓", c: "tw" }, 
    { n: "鹹酥雞", s: "group", h: "heavy", t: "dry", p: "meal", e: "🥦", c: "tw" }, 
    { n: "滷肉飯專賣", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍚", c: "tw" },
    { n: "現炒炒飯", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🥘", c: "tw" },
    { n: "牛肉麵專賣", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍜", c: "tw" }, // 湯麵
    { n: "雞腿便當", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍱", c: "tw" },
    { n: "台南意麵", s: "solo", h: "light", t: "hot", p: "meal", e: "🍜", c: "tw" }, // 湯麵
    { n: "炸排骨飯", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🥩", c: "tw" },
    { n: "控肉飯", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍖", c: "tw" },
    { n: "嘉義火雞肉飯", s: "solo", h: "light", t: "dry", p: "meal", e: "🐓", c: "tw" },
    { n: "鵝肉飯專賣", s: "group", h: "normal", t: "dry", p: "meal", e: "🦢", c: "tw" },
    { n: "鴨肉飯", s: "solo", h: "normal", t: "dry", p: "meal", e: "🦆", c: "tw" },
    { n: "土魠魚羹麵", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🐟", c: "tw" }, // 羹湯
    { n: "蚵仔麵線", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🦪", c: "tw" }, // 麵線糊
    { n: "清粥小菜", s: "group", h: "diet", t: "hot", p: "meal", e: "🥣", c: "tw" }, // 粥
    { n: "熱炒店", s: "group", h: "heavy", t: "dry", p: "meal", e: "🍻", c: "tw" },
    { n: "藥燉排骨", s: "solo", h: "light", t: "hot", p: "meal", e: "🍲", c: "tw" }, // 湯
    { n: "潤餅捲", s: "solo", h: "diet", t: "cold", p: "meal", e: "🌯", c: "tw" },
    { n: "涼麵", s: "solo", h: "normal", t: "cold", p: "meal", e: "🧊", c: "tw" },
    { n: "什錦湯麵", s: "solo", h: "normal", t: "hot", p: "meal", e: "🍜", c: "tw" }, // 湯麵
    { n: "豬腳飯", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🐖", c: "tw" },
    { n: "筒仔米糕", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍮", c: "tw" },
    { n: "水餃專賣", s: "group", h: "normal", t: "dry", p: "meal", e: "🥟", c: "tw" },
    { n: "鍋貼專賣", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🥟", c: "tw" },
    { n: "舒肥健康餐盒", s: "solo", h: "diet", t: "cold", p: "meal", e: "🥦", c: "tw" },
    { n: "古早味蛋餅", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🥞", c: "tw" },
    { n: "虱目魚肚粥", s: "solo", h: "diet", t: "hot", p: "meal", e: "🐟", c: "tw" }, // 粥
    { n: "客家粄條", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍜", c: "tw" }, // 湯麵
    { n: "米粉湯", s: "solo", h: "light", t: "hot", p: "meal", e: "🥣", c: "tw" }, // 湯
    { n: "排骨酥麵", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍖", c: "tw" }, // 湯麵
    { n: "大滷麵", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍜", c: "tw" }, // 湯麵
    { n: "炒羊肉", s: "any", h: "heavy", t: "dry", p: "meal", e: "🐐", c: "tw" },
    { n: "紅油抄手", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🌶️", c: "tw" },
    { n: "鹹水雞", s: "solo", h: "diet", t: "cold", p: "meal", e: "🐔", c: "tw" },
    { n: "素食自助餐", s: "solo", h: "diet", t: "dry", p: "meal", e: "🥗", c: "tw" },
    { n: "牛肉捲餅", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🌯", c: "tw" },
    { n: "桶仔雞", s: "group", h: "normal", t: "dry", p: "meal", e: "🐔", c: "tw" },
    { n: "鮮魚湯", s: "solo", h: "diet", t: "hot", p: "meal", e: "🐟", c: "tw" }, // 湯
    { n: "台南牛肉湯", s: "solo", h: "diet", t: "hot", p: "meal", e: "🥩", c: "tw" }, // 湯
    { n: "鱔魚意麵", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍜", c: "tw" }, // 羹麵
    { n: "切仔麵", s: "solo", h: "light", t: "hot", p: "meal", e: "🍜", c: "tw" }, // 湯麵

    // === 🇭🇰 港式 (hk) ===
    { n: "港式燒臘", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍖", c: "hk" },
    { n: "港式飲茶", s: "group", h: "normal", t: "dry", p: "meal", e: "🥠", c: "hk" },
    { n: "廣東粥", s: "solo", h: "diet", t: "hot", p: "meal", e: "🥣", c: "hk" }, // 粥
    { n: "鮮蝦雲吞麵", s: "solo", h: "light", t: "hot", p: "meal", e: "🍤", c: "hk" }, // 湯麵
    { n: "茶餐廳", s: "group", h: "heavy", t: "dry", p: "meal", e: "🥪", c: "hk" },
    { n: "煲仔飯", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍲", c: "hk" },
    { n: "乾炒牛河", s: "heavy", t: "dry", p: "meal", e: "🍝", c: "hk" },
    { n: "廣東炒麵", s: "heavy", t: "dry", p: "meal", e: "🍝", c: "hk" },
    { n: "冰火菠蘿油+蛋塔", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🧈", c: "hk" },
    { n: "蘿蔔糕+腸粉", s: "solo", h: "normal", t: "dry", p: "meal", e: "🍘", c: "hk" },

    // === 🇯🇵 日式 (jp) ===
    // 新增健康餐
    { n: "烤鯖魚定食", s: "solo", h: "diet", t: "dry", p: "meal", e: "🐟", c: "jp" },
    { n: "日式茶泡飯", s: "solo", h: "diet", t: "hot", p: "meal", e: "🍵", c: "jp" },

    // 原有清單 (修正咖哩飯為 dry)
    { n: "章魚小丸子(大份)", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🐙", c: "jp" }, 
    { n: "日式拉麵", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍜", c: "jp" }, // 湯麵
    { n: "迴轉壽司", s: "group", h: "normal", t: "cold", p: "meal", e: "🍣", c: "jp" },
    { n: "日式豬排飯", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍱", c: "jp" },
    { n: "牛丼專賣", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍚", c: "jp" },
    { n: "日式咖哩飯", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍛", c: "jp" }, // 修正：乾食 (醬淋飯)
    { n: "烏龍麵", s: "solo", h: "light", t: "hot", p: "meal", e: "🍜", c: "jp" }, // 湯麵
    { n: "蕎麥麵", s: "solo", h: "diet", t: "cold", p: "meal", e: "🍜", c: "jp" },
    { n: "日式居酒屋", s: "group", h: "heavy", t: "dry", p: "meal", e: "🍶", c: "jp" },
    { n: "生魚片丼飯", s: "solo", h: "light", t: "cold", p: "meal", e: "🐟", c: "jp" },
    { n: "大阪燒", s: "group", h: "heavy", t: "dry", p: "meal", e: "🥞", c: "jp" },
    { n: "日式燒肉", s: "group", h: "heavy", t: "dry", p: "meal", e: "🥩", c: "jp" },
    { n: "唐揚雞定食", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍗", c: "jp" },
    { n: "鰻魚飯", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍱", c: "jp" },
    { n: "沾麵", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍜", c: "jp" }, // 沾湯熱
    { n: "漢堡排定食", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍔", c: "jp" },
    { n: "關東煮", s: "solo", h: "diet", t: "hot", p: "meal", e: "🍢", c: "jp" }, // 湯
    { n: "北海道湯咖哩", s: "solo", h: "normal", t: "hot", p: "meal", e: "🍲", c: "jp" }, // 湯
    { n: "日式炸牛排", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🥩", c: "jp" },
    { n: "沖繩塔可飯", s: "solo", h: "normal", t: "dry", p: "meal", e: "🌮", c: "jp" },

    // === 🇰🇷 韓式 (kr) ===
    // 新增健康餐
    { n: "韓式紫菜包飯(蔬菜)", s: "solo", h: "diet", t: "dry", p: "meal", e: "🍙", c: "kr" },
    { n: "韓式人蔘雞湯", s: "group", h: "diet", t: "hot", p: "meal", e: "🐔", c: "kr" },

    // 原有清單
    { n: "韓式炸雞", s: "group", h: "heavy", t: "dry", p: "meal", e: "🍗", c: "kr" }, 
    { n: "韓式豆腐鍋", s: "solo", h: "normal", t: "hot", p: "meal", e: "🍲", c: "kr" }, // 鍋
    { n: "石鍋拌飯", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🥘", c: "kr" }, // 鍋熱
    { n: "韓式烤肉", s: "group", h: "heavy", t: "dry", p: "meal", e: "🥓", c: "kr" },
    { n: "部隊鍋", s: "group", h: "heavy", t: "hot", p: "meal", e: "🥘", c: "kr" }, // 鍋
    { n: "辛拉麵", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍜", c: "kr" }, // 湯
    { n: "韓式炸醬麵", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍜", c: "kr" }, // 醬熱
    { n: "銅盤烤肉", s: "group", h: "heavy", t: "hot", p: "meal", e: "🥩", c: "kr" }, // 湯邊
    { n: "馬鈴薯排骨湯", s: "group", h: "heavy", t: "hot", p: "meal", e: "🍲", c: "kr" }, // 湯

    // === 🌏 東南亞 (sea) ===
    // 新增健康餐
    { n: "泰式涼拌青木瓜+烤雞", s: "group", h: "diet", t: "cold", p: "meal", e: "🥗", c: "sea" },

    // 原有清單
    { n: "越南河粉 (Pho)", s: "solo", h: "diet", t: "hot", p: "meal", e: "🍜", c: "sea" }, // 湯
    { n: "泰式打拋豬", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍛", c: "sea" },
    { n: "海南雞飯", s: "solo", h: "normal", t: "dry", p: "meal", e: "🐔", c: "sea" },
    { n: "泰式綠咖哩", s: "group", h: "heavy", t: "hot", p: "meal", e: "🍛", c: "sea" }, // 醬熱
    { n: "越式法國麵包", s: "solo", h: "normal", t: "cold", p: "meal", e: "🥖", c: "sea" },
    { n: "椒麻雞飯", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍗", c: "sea" },
    { n: "肉骨茶", s: "group", h: "normal", t: "hot", p: "meal", e: "🍲", c: "sea" }, // 湯
    { n: "螺螄粉", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍜", c: "sea" }, // 湯
    { n: "泰式船麵", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍜", c: "sea" }, // 湯
    { n: "月亮蝦餅", s: "group", h: "heavy", t: "dry", p: "meal", e: "🍤", c: "sea" },
    { n: "越式生春捲", s: "solo", h: "diet", t: "cold", p: "meal", e: "🥬", c: "sea" },
    { n: "星馬叻沙麵", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍜", c: "sea" }, // 湯
    { n: "印尼炒飯", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🥘", c: "sea" },

    // === 🇮🇹 義式 (it) ===
    // 新增健康餐
    { n: "義式烤蔬菜盤(佐麵包)", s: "solo", h: "diet", t: "dry", p: "meal", e: "🍆", c: "it" },
    { n: "清炒鮮蔬義大利麵", s: "solo", h: "diet", t: "dry", p: "meal", e: "🍝", c: "it" },

    // 原有清單
    { n: "義大利麵 (紅醬)", s: "solo", h: "normal", t: "dry", p: "meal", e: "🍝", c: "it" },
    { n: "培根蛋奶麵 (白醬)", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍝", c: "it" },
    { n: "青醬蛤蜊麵", s: "solo", h: "normal", t: "dry", p: "meal", e: "🍝", c: "it" },
    { n: "拿坡里披薩", s: "group", h: "heavy", t: "dry", p: "meal", e: "🍕", c: "it" },
    { n: "義式燉飯", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🥘", c: "it" },
    { n: "焗烤筆管麵", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🧀", c: "it" },
    { n: "千層麵", s: "group", h: "heavy", t: "dry", p: "meal", e: "🍝", c: "it" },
    { n: "義式麵疙瘩 (Gnocchi)", s: "solo", h: "normal", t: "dry", p: "meal", e: "🥔", c: "it" },
    { n: "墨魚麵", s: "solo", h: "normal", t: "dry", p: "meal", e: "🦑", c: "it" },
    { n: "瑪格麗特披薩", s: "solo", h: "normal", t: "dry", p: "meal", e: "🍕", c: "it" },

    // === 🇺🇸 歐美 (us) ===
    // 新增健康餐
    { n: "溫沙拉 (Warm Salad)", s: "solo", h: "diet", t: "dry", p: "meal", e: "🥗", c: "us" },
    { n: "希臘優格碗", s: "solo", h: "diet", t: "cold", p: "meal", e: "🥣", c: "us" },
    { n: "花椰菜米餐盒", s: "solo", h: "diet", t: "dry", p: "meal", e: "🥦", c: "us" },

    // 原有清單
    { n: "美式漢堡", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍔", c: "us" },
    { n: "花生醬培根堡", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🍔", c: "us" },
    { n: "炸雞全家餐", s: "group", h: "heavy", t: "dry", p: "meal", e: "🍗", c: "us" },
    { n: "牛排館", s: "group", h: "heavy", t: "dry", p: "meal", e: "🥩", c: "us" },
    { n: "Subway 潛艇堡", s: "solo", h: "diet", t: "cold", p: "meal", e: "🥪", c: "us" },
    { n: "夏威夷 Poke Bowl", s: "solo", h: "diet", t: "cold", p: "meal", e: "🥗", c: "us" },
    { n: "早午餐 (Brunch)", s: "group", h: "normal", t: "dry", p: "meal", e: "🥞", c: "us" },
    { n: "墨西哥塔可 (Taco)", s: "solo", h: "normal", t: "dry", p: "meal", e: "🌮", c: "us" },
    { n: "墨西哥捲餅 (Burrito)", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🌯", c: "us" },
    { n: "德國豬腳", s: "group", h: "heavy", t: "dry", p: "meal", e: "🍖", c: "us" },
    { n: "西班牙海鮮燉飯", s: "group", h: "normal", t: "dry", p: "meal", e: "🥘", c: "us" },
    { n: "炸魚薯條", s: "solo", h: "heavy", t: "dry", p: "meal", e: "🐟", c: "us" },
    { n: "煙燻豬肋排", s: "group", h: "heavy", t: "dry", p: "meal", e: "🍖", c: "us" },
    { n: "法式鹹派 (Quiche)", s: "solo", h: "normal", t: "dry", p: "meal", e: "🥧", c: "us" },
    { n: "班尼迪克蛋", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🥚", c: "us" }, // 溫熱
    { n: "水牛城辣雞翅餐", s: "group", h: "heavy", t: "dry", p: "meal", e: "🍗", c: "us" },
    { n: "費城牛肉堡", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🥪", c: "us" }, // 熱三明治
    { n: "貝果三明治", s: "solo", h: "normal", t: "cold", p: "meal", e: "🥯", c: "us" },
    { n: "凱薩沙拉 (含雞肉)", s: "solo", h: "diet", t: "cold", p: "meal", e: "🥗", c: "us" },
    { n: "古巴三明治", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🥪", c: "us" }, // 熱壓
    { n: "英式早餐盤", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🍳", c: "us" },
    { n: "威靈頓牛排", s: "group", h: "heavy", t: "hot", p: "meal", e: "🥩", c: "us" },

    // === 🍲 鍋物 (pot) ===
    // 全部 hot
    { n: "小火鍋 (三媽類)", s: "solo", h: "normal", t: "hot", p: "meal", e: "🍲", c: "pot" },
    { n: "麻辣鍋", s: "group", h: "heavy", t: "hot", p: "meal", e: "🌶️", c: "pot" },
    { n: "日式涮涮鍋", s: "group", h: "diet", t: "hot", p: "meal", e: "🥘", c: "pot" },
    { n: "壽喜燒", s: "group", h: "heavy", t: "hot", p: "meal", e: "🥩", c: "pot" },
    { n: "羊肉爐", s: "group", h: "heavy", t: "hot", p: "meal", e: "🐐", c: "pot" },
    { n: "薑母鴨", s: "group", h: "heavy", t: "hot", p: "meal", e: "🦆", c: "pot" },
    { n: "酸菜白肉鍋", s: "group", h: "normal", t: "hot", p: "meal", e: "🍲", c: "pot" },
    { n: "酸菜魚個人鍋", s: "solo", h: "heavy", t: "hot", p: "meal", e: "🐟", c: "pot" },
    { n: "石頭火鍋", s: "group", h: "heavy", t: "hot", p: "meal", e: "🍲", c: "pot" },
    { n: "麻油雞", s: "group", h: "heavy", t: "hot", p: "meal", e: "🐔", c: "pot" },
    { n: "砂鍋魚頭", s: "group", h: "heavy", t: "hot", p: "meal", e: "🐟", c: "pot" },
    { n: "花雕雞鍋", s: "group", h: "heavy", t: "hot", p: "meal", e: "🐔", c: "pot" },
    { n: "海鮮豆腐鍋", s: "any", h: "diet", t: "hot", p: "meal", e: "🍲", c: "pot" },
    { n: "重慶烤魚", s: "group", h: "heavy", t: "hot", p: "meal", e: "🐟", c: "pot" },
    { n: "胡椒豬肚雞", s: "group", h: "heavy", t: "hot", p: "meal", e: "🐔", c: "pot" }
];