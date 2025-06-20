import { useState, useEffect } from 'react';
import { FiImage, FiSave } from 'react-icons/fi';
import { getNewsById, updateNews } from '../../../services/news.Service';
import { toast } from 'react-toastify';
import Input from '../../../components/input/Input';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import UploadFile from '../../../components/modal/ModalUploadFile';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';
import MessageForm from '../../../components/message';
import Label from '../../../components/label';
const schema = yup.object().shape({
  name: yup.string().trim().required('Title không được để trống'),
  content: yup.string().trim().required('Nội dung không được để trống')
});
const EditNews = () => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    setValue,
    reset
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setgetNews] = useState();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<File[]>([]);
  const handleUploadSuccess = (url: File[]) => {
    if (!url) return;
    setImageUrl(url);
  };
  useEffect(() => {
    if (!id) return;
    const fetchNews = async () => {
      try {
        const data = await getNewsById(id);
        if (data) {
          setgetNews(data);
          setValue('name', data.name);
          setValue('content', data.content);
          setImageUrl(data.images);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, [id]);
  const handleUpdate: SubmitHandler<any> = async data => {
    if (!isValid) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('name', data.name || news?.name || '');
    formData.append('content', data.content || news?.content || '');
    imageUrl.forEach(file => {
      formData.append('images', file);
    });
    try {
      const res = await updateNews(id, formData);
      if (!res) {
        toast.error('Chỉnh sửa thất bại');
      } else {
        toast.success('Chỉnh sửa thành công');
        navigate('/admin/news');
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
      reset();
    }
  };
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 mt-16 ">
        <div id="news-form" className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Sửa Tin Tức Mới
          </h2>
          <form
            onSubmit={handleSubmit(handleUpdate)}
            className="space-y-6"
            encType="multipart/form-data"
          >
            <div className="mb-4">
              <Label className="block text-blue-800 font-medium mb-2">
                Tiêu đề
              </Label>
              <Input
                type="text"
                name="name"
                control={control}
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MessageForm error={errors.name?.message} />
            </div>
            <div className="mb-4">
              <Label className="block text-blue-800 font-medium mb-2">
                Nội dung
              </Label>
              <Controller
                name="content"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    {...field}
                    rows={5}
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                )}
              />
              <MessageForm error={errors.content?.message} />
            </div>
            <Label
              htmlFor="images"
              className="flex items-center  text-blue-800 font-medium mb-2"
            >
              Hình ảnh
              <FiImage className="text-blue-500 mr-2 " />
            </Label>
            <UploadFile onUploadSuccess={handleUploadSuccess} />{' '}
            <div className="flex mt-5 mb-3 px-3 gap-3">
              {' '}
              {imageUrl.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`Selected ${index}`}
                  className="w-32 h-32 object-cover mb-4 border"
                />
              ))}
            </div>
            <div className="flex justify-end gap-2 py-5">
              <button
                type="button"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition duration-200"
                onClick={() => {
                  navigate('/admin/news');
                }}
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center disabled:opacity-50"
                disabled={loading || !isValid}
              >
                <FiSave className="mr-2" />
                {loading ? 'Đang lưu...' : 'Lưu sản phẩm'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditNews;
