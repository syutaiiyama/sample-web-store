import { TProduct } from "../../contexts/products/products.type";

const bookSample: TProduct = {
  id: "test-id",
  imageUrl: "/images/book_product2.png",
  name: "売れる商品はデザインで決まる",
  price: 1000,
  category: "book",
  description:
    "本書では、ビジネスでのサービスデザインの基本と実践方法をわかりやすく解説します。具体的な成功事例を交え、サービスデザインを使った問題の特定からその解決方法までを示していきます。" +
    "消費者・企業・行政に向けたサービスに携わる人のための、顧客体験の作り方がわかる実践的ガイドブックです。" +
    "本書では、ビジネスでのサービスデザインの基本と実践方法をわかりやすく解説します。具体的な成功事例を交え、サービスデザインを使った問題の特定からその解決方法までを示していきます。" +
    "消費者・企業・行政に向けたサービスに携わる人のための、顧客体験の作り方がわかる実践的ガイドブックです。",
};

export const testBooks = [
  bookSample,
  bookSample,
  bookSample,
  bookSample,
  bookSample,
  bookSample,
  bookSample,
  bookSample,
];

const clothesSample: TProduct = {
  id: "test-id",
  imageUrl: "/images/clothe_product2.png",
  name: "貴族風 ヨーロッパ風 洋服 仮装 ドレス ステージ衣装 ",
  price: 699,
  category: "clothe",
  description:
    "ポリエステル100％素材で生地・縫製もしっかり！ 美しいラインできれいなシルエットを見せてくれます！ パーティ、お祭り、出演はもちろん普段着や、土日祝日、イベント、結婚式、コンサートではひときわ輝く素敵なドレスです。",
};

export const testClothes = [
  clothesSample,
  clothesSample,
  clothesSample,
  clothesSample,
  clothesSample,
  clothesSample,
  clothesSample,
  clothesSample,
];

const foodSample: TProduct = {
  id: "test-id",
  imageUrl: "/images/food_product2.png",
  name: "国華園 食品 １５品目の国産野菜セット 15種1箱 常温 野菜",
  price: 2680,
  category: "food",
  description:
    "たくさんの野菜が自宅に届く！\n" +
    "野菜をたくさん買うのは重くて大変ですが、ネットなら自宅に届くので便利！使い勝手の良い野菜が10品目必ず入るため当たり外れがなく安心♪",
};

export const testFoods = [
  foodSample,
  foodSample,
  foodSample,
  foodSample,
  foodSample,
  foodSample,
  foodSample,
  foodSample,
];

export const testProducts = [...testBooks, ...testClothes, ...testFoods];
