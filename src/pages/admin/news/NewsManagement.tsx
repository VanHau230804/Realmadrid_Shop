import { useEffect, useState } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiSearch } from 'react-icons/fi';
import { getNews, deleteNews } from '../../../services/news.Service';
import { toast } from 'react-toastify';
import ConfirmModal from '../../../components/common/ConfirmModal';
import { useNavigate } from 'react-router-dom';
const NewsManagement = () => {
  const navigate = useNavigate();
  const [listNews, setlistNews] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [getId, setNewId] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  useEffect(() => {
    const dataNews = async () => {
      try {
        const resNews = await getNews();
        console.log(resNews);
        setlistNews(resNews);
      } catch (error) {
        console.log(error);
      }
    };
    dataNews();
  }, []);

  const handleDeleteNew = async (id: string) => {
    await deleteNews(id);
    setlistNews(news => news.filter(news => news._id !== id));
    toast.success('Xóa thành công ', { position: 'top-right' });
  };
  const filteredNews = listNews?.filter(
    news =>
      news.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.content.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 mt-16 ">
        <div className="bg-white p-5 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          {' '}
          <h1 className="text-2xl font-bold text-blue-800">Quản Lý Tin Tức</h1>
          <div className="relative w-full md:w-1/2">
            <FiSearch className="absolute left-3 top-3 text-blue-500" />
            <input
              type="text"
              placeholder="Tìm kiếm tin tức..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
            onClick={() => {
              navigate('/admin/addnews');
            }}
          >
            <FiPlus className="mr-2" />
            Thêm Tin Tức
          </button>
        </div>
        {/* Danh sách tin tức */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Danh sách Tin Tức
          </h2>

          {!filteredNews ? (
            <p className="text-center text-blue-500 py-8">
              Không có tin tức nào được tìm thấy
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map(news => (
                <div
                  key={news.id}
                  className="border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition duration-200"
                >
                  <div className="h-48 bg-blue-100 overflow-hidden">
                    <img
                      src={`${news.images?.[0]?.url}`}
                      alt={news.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-blue-800">
                        {news.name}
                      </h3>
                      <span className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                        {news.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {news.content}
                    </p>
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => {
                          navigate(`/admin/news/${news._id}`);
                        }}
                        className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50"
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => {
                          setNewId(news._id);
                          setShowDeleteModal(true);
                        }}
                        className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          handleDeleteNew(getId);
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

export default NewsManagement;
