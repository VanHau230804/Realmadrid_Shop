// src/components/orders/OrderStats.tsx
import { OrderStatsData } from '../components/ts/order';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
interface OrderStatsProps {
  data: OrderStatsData;
}
const OrderStats = ({ data }: OrderStatsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Thống kê theo tháng */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Doanh thu theo tháng
        </h3>
        <div className="h-64">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={value => [`${value.toLocaleString()}₫`, 'Doanh thu']}
              labelFormatter={label => `Tháng ${label}`}
            />
            <Bar dataKey="revenue" fill="#3b82f6" name="Doanh thu" />
          </BarChart>
        </div>
      </div>

      {/* Thống kê trạng thái đơn hàng */}
      {/* <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Phân bổ trạng thái đơn hàng
        </h3>
        <div className="h-64">
          <PieChart width={400} height={300}>
            <Pie
              data={data.statusDistribution}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.statusDistribution.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]}
                />
              ))}
            </Pie>
            <Tooltip formatter={value => [`${value} đơn`, 'Số lượng']} />
            <Legend />
          </PieChart>
        </div>
      </div> */}

      {/* Thống kê sản phẩm bán chạy */}
      <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Top sản phẩm bán chạy
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sản phẩm
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Đã bán
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doanh thu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tỷ lệ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.topProducts.map(product => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded"
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          SKU: {product.sku}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.soldQuantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.revenue.toLocaleString('vi-VN')}₫
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${product.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">
                      {product.percentage}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderStats;
