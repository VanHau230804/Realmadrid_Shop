// src/utils/fakeData.ts
import { Order, OrderStatsData } from '../ts/order';

export const generateFakeOrders = (count: number): Order[] => {
  const statuses = [
    'pending',
    'processing',
    'shipping',
    'completed',
    'cancelled'
  ];
  const paymentMethods = ['COD', 'Banking', 'Momo', 'ZaloPay'];
  const products = [
    { name: 'iPhone 13 Pro', price: 25000000 },
    { name: 'Samsung Galaxy S22', price: 22000000 },
    { name: 'MacBook Pro M1', price: 35000000 },
    { name: 'AirPods Pro', price: 5000000 },
    { name: 'Apple Watch Series 7', price: 12000000 }
  ];

  return Array.from({ length: count }, (_, i) => {
    const orderDate = new Date();
    orderDate.setDate(orderDate.getDate() - Math.floor(Math.random() * 30));

    const itemsCount = Math.floor(Math.random() * 5) + 1;
    const items = Array.from({ length: itemsCount }, () => {
      const product = products[Math.floor(Math.random() * products.length)];
      const quantity = Math.floor(Math.random() * 3) + 1;
      return {
        productId: Math.floor(Math.random() * 1000),
        name: product.name,
        price: product.price,
        quantity,
        total: product.price * quantity
      };
    });

    const subtotal = items.reduce((sum, item) => sum + item.total, 0);
    const shippingFee = Math.floor(Math.random() * 5) * 10000;
    const totalAmount = subtotal + shippingFee;

    return {
      id: `ORD${1000 + i}`,
      customerName: ['Nguyễn Văn A', 'Trần Thị B', 'Lê Văn C', 'Phạm Thị D'][
        Math.floor(Math.random() * 4)
      ],
      phone: `09${Math.floor(10000000 + Math.random() * 90000000)}`,
      email: `customer${i + 1}@example.com`,
      address: `${Math.floor(Math.random() * 100) + 1} Đường ${
        ['Nguyễn Huệ', 'Lê Lợi', 'Hai Bà Trưng', 'Lê Duẩn'][
          Math.floor(Math.random() * 4)
        ]
      }, TP.HCM`,
      orderDate: orderDate.toISOString(),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      paymentMethod:
        paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
      isPaid: Math.random() > 0.3,
      items,
      subtotal,
      shippingFee,
      totalAmount,
      notes: Math.random() > 0.7 ? 'Giao hàng giờ hành chính' : ''
    };
  });
};

export const generateOrderStats = (): OrderStatsData => {
  const months = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6'
  ];
  const statuses = [
    'pending',
    'processing',
    'shipping',
    'completed',
    'cancelled'
  ];

  return {
    monthlyRevenue: months.map((month, index) => ({
      month,
      revenue: Math.floor(Math.random() * 100) * 1000000 + 5000000
    })),
    statusDistribution: [
      { name: 'Chờ xác nhận', value: Math.floor(Math.random() * 20) + 5 },
      { name: 'Đang xử lý', value: Math.floor(Math.random() * 15) + 5 },
      { name: 'Đang giao', value: Math.floor(Math.random() * 10) + 5 },
      { name: 'Hoàn thành', value: Math.floor(Math.random() * 50) + 20 },
      { name: 'Đã hủy', value: Math.floor(Math.random() * 10) + 1 }
    ],
    topProducts: [
      {
        id: 1,
        name: 'iPhone 13 Pro',
        sku: 'IP13P-256',
        image: 'https://via.placeholder.com/40',
        soldQuantity: 125,
        revenue: 3125000000,
        percentage: 35
      },
      {
        id: 2,
        name: 'MacBook Pro M1',
        sku: 'MBP14-M1',
        image: 'https://via.placeholder.com/40',
        soldQuantity: 78,
        revenue: 2730000000,
        percentage: 25
      },
      {
        id: 3,
        name: 'AirPods Pro',
        sku: 'APP-2',
        image: 'https://via.placeholder.com/40',
        soldQuantity: 210,
        revenue: 1050000000,
        percentage: 15
      },
      {
        id: 4,
        name: 'Samsung Galaxy S22',
        sku: 'SGS22-128',
        image: 'https://via.placeholder.com/40',
        soldQuantity: 92,
        revenue: 2024000000,
        percentage: 12
      },
      {
        id: 5,
        name: 'Apple Watch Series 7',
        sku: 'AWS7-45',
        image: 'https://via.placeholder.com/40',
        soldQuantity: 65,
        revenue: 780000000,
        percentage: 8
      }
    ]
  };
};
