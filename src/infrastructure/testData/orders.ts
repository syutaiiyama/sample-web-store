import { TOrder } from "../../contexts/order/order.type";
import { testUser } from "./user";

export const getTestOrders = () => {
  const testOrders: Array<TOrder> = [
    {
      user: testUser,
      cart: {
        cartItems: [
          {
            product: {
              imageSrc: "/images/book_product.jpg",
              name: "売れる商品はデザインで決まる",
              price: 1000,
              description:
                "本書では、ビジネスでのサービスデザインの基本と実践方法をわかりやすく解説します。具体的な成功事例を交え、サービスデザインを使った問題の特定からその解決方法までを示していきます。" +
                "消費者・企業・行政に向けたサービスに携わる人のための、顧客体験の作り方がわかる実践的ガイドブックです。" +
                "本書では、ビジネスでのサービスデザインの基本と実践方法をわかりやすく解説します。具体的な成功事例を交え、サービスデザインを使った問題の特定からその解決方法までを示していきます。" +
                "消費者・企業・行政に向けたサービスに携わる人のための、顧客体験の作り方がわかる実践的ガイドブックです。",
            },
            quantity: 2,
          },
          {
            product: {
              imageSrc: "/images/clothe_product.jpg",
              name: "貴族風 ヨーロッパ風 洋服 仮装 ドレス ステージ衣装 ",
              price: 699,
              description:
                "ポリエステル100％素材で生地・縫製もしっかり！ 美しいラインできれいなシルエットを見せてくれます！ パーティ、お祭り、出演はもちろん普段着や、土日祝日、イベント、結婚式、コンサートではひときわ輝く素敵なドレスです。",
            },
            quantity: 3,
          },
        ],
        payment: {
          total: 1000,
          subtotal: 1000,
          tax: 100,
          shipping: 0,
        },
      },
      createdAt: "20210118",
    },
    {
      user: testUser,
      cart: {
        cartItems: [
          {
            product: {
              imageSrc: "/images/book_product.jpg",
              name: "売れる商品はデザインで決まる",
              price: 1000,
              description:
                "本書では、ビジネスでのサービスデザインの基本と実践方法をわかりやすく解説します。具体的な成功事例を交え、サービスデザインを使った問題の特定からその解決方法までを示していきます。" +
                "消費者・企業・行政に向けたサービスに携わる人のための、顧客体験の作り方がわかる実践的ガイドブックです。" +
                "本書では、ビジネスでのサービスデザインの基本と実践方法をわかりやすく解説します。具体的な成功事例を交え、サービスデザインを使った問題の特定からその解決方法までを示していきます。" +
                "消費者・企業・行政に向けたサービスに携わる人のための、顧客体験の作り方がわかる実践的ガイドブックです。",
            },
            quantity: 2,
          },
          {
            product: {
              imageSrc: "/images/clothe_product.jpg",
              name: "貴族風 ヨーロッパ風 洋服 仮装 ドレス ステージ衣装 ",
              price: 699,
              description:
                "ポリエステル100％素材で生地・縫製もしっかり！ 美しいラインできれいなシルエットを見せてくれます！ パーティ、お祭り、出演はもちろん普段着や、土日祝日、イベント、結婚式、コンサートではひときわ輝く素敵なドレスです。",
            },
            quantity: 3,
          },
        ],
        payment: {
          total: 1000,
          subtotal: 1000,
          tax: 100,
          shipping: 0,
        },
      },
      createdAt: "20210118",
    },
  ];

  return testOrders;
};
