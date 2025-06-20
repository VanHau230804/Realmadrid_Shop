import { useEffect, useState } from 'react';
import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes
} from 'react-icons/fa';
import { getKits, deleteKitById } from '../../../services/kit.Service';
import { toast } from 'react-toastify';
import ConfirmModal from '../../../components/common/ConfirmModal';
import { IKit } from '../../../types/kit.type';
import { useNavigate } from 'react-router-dom';
const ProductManagement = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<IKit[]>([]);
  const [getId, setKitId] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  useEffect(() => {
    const dataKit = async () => {
      try {
        const resKits = await getKits();
        console.log(resKits);
        setProducts(resKits);
      } catch (error) {
        console.log(error);
      }
    };
    dataKit();
  }, []);
  // State cho sản phẩm đang chỉnh sửa/thêm mới
  const [editingProduct, setEditingProduct] = useState<IKit | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // Xử lý thêm/sửa sản phẩm
  const handleSaveProduct = () => {
    if (!editingProduct) return;
    if (isAdding) {
      // Thêm sản phẩm mới
      setProducts([
        ...products,
        { ...editingProduct, id: Date.now().toString() }
      ]);
    } else {
      // Cập nhật sản phẩm
      setProducts(
        products.map(p => (p.id === editingProduct.id ? editingProduct : p))
      );
    }
    setEditingProduct(null);
    setIsAdding(false);
  };
  // Xử lý xóa sản phẩm
  const handleDeleteKit = async (id: string) => {
    await deleteKitById(id);
    setProducts(kit => kit.filter(kit => kit._id !== id));
    toast.success('Xóa thành công ', { position: 'top-right' });
  };
  // Lọc sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = products.filter(
    product => product.name || product.category
  );
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow p-4 mb-6 mt-16">
        <div className="flex flex-col md:flex-row gap-4">
          <h1 className="text-2xl font-bold text-blue-800">Quản Lý Sản Phẩm</h1>
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => navigate(`/admin/addproduct`)}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            <FaPlus className="mr-2" /> Thêm Sản Phẩm
          </button>
        </div>
      </div>
      {/* Form thêm/chỉnh sửa sản phẩm */}
      {editingProduct && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {isAdding ? 'Thêm Sản Phẩm Mới' : 'Chỉnh Sửa Sản Phẩm'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên sản phẩm
              </label>
              <input
                type="text"
                value={editingProduct.name}
                onChange={e =>
                  setEditingProduct({ ...editingProduct, name: e.target.value })
                }
                className="w-full px-3 py-2 bkit rounded-md"
                placeholder="Nhập tên sản phẩm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link hình ảnh
              </label>
              <input
                type="text"
                value={editingProduct.image}
                onChange={e =>
                  setEditingProduct({
                    ...editingProduct,
                    image: e.target.value
                  })
                }
                className="w-full px-3 py-2 bkit rounded-md"
                placeholder="Nhập URL hình ảnh sản phẩm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Danh mục
              </label>
              <input
                type="text"
                value={editingProduct.category}
                onChange={e =>
                  setEditingProduct({
                    ...editingProduct,
                    categoryID: e.target.value
                  })
                }
                className="w-full px-3 py-2 bkit rounded-md"
                placeholder="Nhập danh mục"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Size (cách nhau bằng dấu phẩy)
              </label>
              <input
                type="text"
                value={editingProduct.size?.map(
                  (s: { _id: string; label: string }, i: number) => (
                    <span key={s._id}>
                      {s.label}
                      {editingProduct.size &&
                      i !== editingProduct.size.length - 1
                        ? ', '
                        : ''}
                    </span>
                  )
                )}
                onChange={e =>
                  setEditingProduct({
                    ...editingProduct,
                    size: e.target.value
                      .split(',')
                      .map(s => s.trim())
                      .filter(s => s)
                  })
                }
                className="w-full px-3 py-2 bkit rounded-md"
                placeholder="Ví dụ: S, M, L, XL"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Giá (VND)
              </label>
              <input
                type="number"
                value={editingProduct.price}
                onChange={e =>
                  setEditingProduct({
                    ...editingProduct,
                    price: Number(e.target.value)
                  })
                }
                className="w-full px-3 py-2 bkit rounded-md"
                placeholder="Nhập giá"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setEditingProduct(null)}
              className="px-4 py-2 bkit bkit-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              <FaTimes className="inline mr-1" /> Hủy
            </button>
            <button
              onClick={handleSaveProduct}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              <FaSave className="inline mr-1" /> Lưu
            </button>
          </div>
        </div>
      )}
      {/* Bảng danh sách sản phẩm */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên SP
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hình ảnh
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Danh mục
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Giá
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  #{index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product.name}
                </td>{' '}
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={`${product.images?.[0]?.url}`}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.categoryID?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.size?.map(
                    (s: { _id: string; label: string }, i: number) => (
                      <span key={s._id}>
                        {s.label}
                        {product.size && i !== product.size.length - 1
                          ? ', '
                          : ''}
                      </span>
                    )
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.price}₫
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => navigate(`/admin/kit/edit/${product._id}`)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    <FaEdit className="inline" /> Sửa
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 p-1"
                    onClick={() => {
                      setKitId(product._id);
                      setShowDeleteModal(true);
                    }}
                  >
                    <FaTrash title="Xóa đơn hàng" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          handleDeleteKit(getId);
          setShowDeleteModal(false);
        }}
        title="Xác nhận xóa người dùng"
        message="Bạn có chắc chắn muốn xóa người dùng này? Hành động này không thể hoàn tác."
        confirmText="Xóa"
        cancelText="Hủy"
      />
      ;
    </div>
  );
};
export default ProductManagement;
