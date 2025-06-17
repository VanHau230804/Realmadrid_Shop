import { getKitById, updateKit } from '../../../../services/kit.Service';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IKit } from '../../../../types/kit.type';
import Input from '../../../../components/input/Input';
import Field from '../../../../components/field';
import MessageForm from '../../../../components/message';
import Label from '../../../../components/label';
import { getCategory } from '../../../../services/category.Service';
import Select from '../../../../components/select';
import convertToOptions from '../../../../helpers/convertToOptions';
import { toast } from 'react-toastify';
import UploadFile from '../../../../components/modal/ModalUploadFile';
import { FaSave, FaTimes } from 'react-icons/fa';
const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IKit | null>(null);
  const [loading, setLoading] = useState(false);
  const [productCategory, setProductCategory] = useState<[]>([]);
  const [imageUrl, setImageUrl] = useState<File[]>([]);
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { isValid },
    control,
    reset,
    errors,
    setValue
  } = useForm({
    mode: 'onChange'
  });
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
  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const product = await getKitById(id);
        console.log(product);
        if (product) {
          setProduct(product);
          setValue('name', product.name);
          setValue('price', product.price);
          setValue('categoryID', product.categoryID);
          setValue(
            'size',
            product.size.map(size => size.label)
          );
          setImageUrl(product.images);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);
  const handleUploadSuccess = (url: File[]) => {
    if (!url) return;
    setImageUrl(url);
    const imageObjects = url.map(u => ({ url: u }));
    setValue('images', imageObjects);
  };
  const handleUpdate: SubmitHandler<any> = async data => {
    if (!isValid) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('name', data.name || product?.name || '');
    formData.append('price', data.price || product?.price || '');
    formData.append('categoryID', data.categoryID || product?.categoryID || '');
    formData.append('size', data.size || product?.size || '');
    imageUrl.forEach(file => {
      formData.append('images', file || product?.images || '');
    });
    try {
      const res = await updateKit(id, formData);
      if (res.errors) {
        toast.error('Cập nhật sản phẩm thất bại');
      } else {
        toast.success('Cập nhật sản phẩm thành công');
        navigate('/admin/products');
      }
    } catch (error) {
      toast.error('Lỗi xảy ra trong quá trình cập nhật');
      return error;
    } finally {
      setLoading(false);
      reset();
    }
  };
  console.log(imageUrl);
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mt-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Thêm sản phẩm mới
        </h2>
        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field>
              <Label htmlFor="name">Tên sản phẩm</Label>
              <Input
                name="name"
                control={control}
                placeholder="Nhập tên sản phẩm"
              />
              {/* <MessageForm error={errors.name?.message} /> */}
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
              {/* <MessageForm error={errors.price?.message} /> */}
            </Field>

            {/* Category */}
            <Field>
              <Label htmlFor="categoryID">Danh mục</Label>
              <Select
                name="categoryID"
                control={control}
                options={productCategory}
                placeholder="Chọn danh mục"
              />{' '}
              {/* <MessageForm error={errors.categoryID?.message} /> */}
            </Field>

            {/* Sizes */}
            <Field>
              <Label htmlFor="size">Size</Label>
              <Input
                name="size"
                control={control}
                placeholder="Ví dụ: S, M, L, XL"
                // error={errors.size?.message}
              />
              {/* <MessageForm error={errors.size?.message} /> */}
            </Field>
            {/* Image Upload */}
            <div className="col-span-full">
              <UploadFile onUploadSuccess={handleUploadSuccess} />
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
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              // onClick={() => resetForm()}
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
export default EditProduct;
