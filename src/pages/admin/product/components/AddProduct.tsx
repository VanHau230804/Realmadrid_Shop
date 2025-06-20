import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { FaSave, FaTimes } from 'react-icons/fa';
import { addKit } from '../../../../services/kit.Service';
import { getCategory } from '../../../../services/category.Service';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../../../components/input/Input';
import Field from '../../../../components/field';
import Label from '../../../../components/label';
import MessageForm from '../../../../components/message';
import * as yup from 'yup';
import Select from '../../../../components/select';
import convertToOptions from '../../../../helpers/convertToOptions';
import UploadFile from '../../../../components/modal/ModalUploadFile';
import { useNavigate } from 'react-router-dom';
const schema = yup.object().shape({
  name: yup.string().trim().required('Tên sản phẩm không được để trống'),
  price: yup
    .number()
    .positive('Giá phải lớn hơn 0')
    .required('Giá không được để trống'),
  size: yup.string().required('Vui lòng nhập size'),
  categoryID: yup.string().required('Vui lòng chọn danh mục')
});

const AddKit = () => {
  const [loading, setLoading] = useState(false);
  const [productCategory, setProductCategory] = useState<[]>([]);
  const [imageUrl, setImageUrl] = useState<File[]>([]);
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const handleUploadSuccess = (url: File[]) => {
    if (!url) return;
    setImageUrl(url);
  };
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        setLoading(true);
        const categoryRes = await getCategory();
        setProductCategory(convertToOptions(categoryRes));
      } catch (error) {
        toast.error('Không thể tải danh mục sản phẩm');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);
  const handleCreate: SubmitHandler<any> = async data => {
    if (!isValid) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('price', data.price);
      formData.append('categoryID', data.categoryID);
      formData.append('size', data.size);
      imageUrl.forEach(file => {
        formData.append('images', file);
      });
      const res = await addKit(formData);
      if (!res) {
        toast.error('Thêm sản phẩm thất bại');
      } else {
        toast.success('Thêm sản phẩm thành công');
        setImageUrl([]);
        reset();
        navigate('/admin/products');
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mt-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Thêm sản phẩm mới
        </h2>
        <form
          onSubmit={handleSubmit(handleCreate)}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <Field>
              <Label htmlFor="name">Tên sản phẩm</Label>
              <Input
                name="name"
                control={control}
                placeholder="Nhập tên sản phẩm"
              />
              <MessageForm error={errors.name?.message} />
            </Field>

            {/* Price */}
            <Field>
              <Label htmlFor="price">Giá (VND)</Label>
              <Input
                name="price"
                type="number"
                control={control}
                placeholder="Nhập giá sản phẩm"
              />
              <MessageForm error={errors.price?.message} />
            </Field>

            {/* Category */}
            <Field>
              <Label htmlFor="categoryID">Danh mục</Label>
              <Select
                name="categoryID"
                control={control}
                options={productCategory}
                placeholder="Chọn danh mục"
              />
              <MessageForm error={errors.categoryID?.message} />
            </Field>

            {/* Sizes */}
            <Field>
              <Label htmlFor="size">Size</Label>
              <Input
                name="size"
                control={control}
                placeholder="Ví dụ: S, M, L, XL"
                error={errors.size?.message}
                onChange={e => {
                  setValue('size', e.target.value, { shouldValidate: true });
                }}
              />
              <MessageForm error={errors.size?.message} />
            </Field>
            {/* Image Upload */}
            <div className="col-span-full">
              <UploadFile onUploadSuccess={handleUploadSuccess} />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate('/admin/products')}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center"
            >
              <FaTimes className="mr-2" />
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center disabled:opacity-50"
              disabled={loading || !isValid}
            >
              <FaSave className="mr-2" />
              {loading ? 'Đang lưu...' : 'Lưu sản phẩm'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddKit;
